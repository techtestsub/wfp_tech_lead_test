import { Router } from 'express';
import { fetchFoodSecurityData } from '../services/fetchFoodSecurityData';
import { fetchGeoData } from '../services/fetchGeoData';
import { calculateCFII } from '../utils/calculateCFII';
import { checkForAlert } from '../utils/checkForAlert';

const router = Router();

router.get('/timeseries/:countryIso3', async (req, res) => {
    try {
        const { countryIso3 } = req.params;
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 500); // Get last 500 days

        const data = await fetchFoodSecurityData(
            countryIso3,
            startDate.toISOString().split('T')[0],
            new Date().toISOString().split('T')[0]
        );

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/test', async (req, res) => {
    try {
        const countries = [
            { name: 'Yemen', iso3: 'YEM' },
            { name: 'Syria', iso3: 'SYR' }
        ];

        const today = new Date().toISOString().split('T')[0];

        let startDate = new Date();
        startDate.setDate(startDate.getDate() - 1);
        startDate = startDate.toISOString().split('T')[0];
        const endDate = new Date().toISOString().split('T')[0];

        for (const country of countries) {
            const foodSecurityData = await fetchFoodSecurityData(country.iso3, startDate.toISOString().split('T')[0], new Date().toISOString().split('T')[0]);

            if (!foodSecurityData) continue;

            const geoData = await fetchGeoData(foodSecurityData.country_id);
            if (!geoData) continue;

            let nationalCFII = 0;
            let regionCount = 0;

            for (const region of foodSecurityData.regions) {
                const fcs = region.fcs;
                const rcsi = region.rcsi;
                const cfii = calculateCFII(fcs, rcsi);

                nationalCFII += cfii;
                regionCount++;

                const regionName = geoData.find(g => g.adm1_id === region.region_id)?.adm1_name || 'Unknown';
                const shouldAlert = checkForAlert(cfii, process.env.THRESHOLD);

                // Store the data for the public dashboard
                console.log(`${country.name}, ${regionName}: CFII = ${cfii.toFixed(2)} ___ Should alert = `, shouldAlert);
            }

            if (regionCount > 0) {
                const avgNationalCFII = nationalCFII / regionCount;
                console.log(`${country.name} National Average CFII: ${avgNationalCFII.toFixed(2)}`);
                checkForAlert(avgNationalCFII, process.env.THRESHOLD);
            }
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/alerts/:countryIso3', async (req, res) => {
    // Implementation for alerts endpoint
});

export default router;
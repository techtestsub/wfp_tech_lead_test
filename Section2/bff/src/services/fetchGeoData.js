import config from '../config'
const axios = require('axios');

export const fetchGeoData = async (adm0) => {
    try {
        const response = await axios.get(
            config?.geoBoundariesBaseURL,
            {
                params: {
                    adm0,
                    admcode: adm0
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error(`Error fetching geo data for ${adm0}:`, error);
        throw error;
    }
}
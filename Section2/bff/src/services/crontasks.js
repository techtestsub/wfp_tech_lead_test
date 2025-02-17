const cron = require('node-cron');
const fetchFoodSecurityData = require('./fetchFoodSecurityData');

// Run daily at midnight
cron.schedule('0 0 * * *', async () => {

    let startDate = new Date();
    startDate.setDate(startDate.getDate() - 1);
    startDate = startDate.toISOString().split('T')[0];
    const endDate = new Date().toISOString().split('T')[0];

    try {
        await fetchFoodSecurityData('YEM', startDate, endDate);
    } catch (error) {
        console.error('Scheduled data fetch failed:', error);
    }
});
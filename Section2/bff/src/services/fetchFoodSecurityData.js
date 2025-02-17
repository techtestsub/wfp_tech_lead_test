import config from '../config'
const axios = require('axios');

export const fetchFoodSecurityData = async (iso3, startDate, endDate) => {
    try {
        const response = await axios.get(
            config?.foodSecurityBaseURL?.replace("{iso3}", iso3),
            {
                params: {
                    date_start: startDate,
                    date_end: endDate
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error(`Error fetching food security data for ${iso3}:`, error);
        throw error;
    }
}
# Section 2
Build the MVP of a food security monitoring platform

## Task Description
The food security analysts of your team are working on the validation of a composite indicator (composite food insecurity index, cfii) which is obtained combining two indicators widely used in WFP: the food consumption score (‘fcs’) and the reduced copying strategy index (‘rcsi’). Data of these two indicators are available daily through open-source APIs at first administrative level.
Your task is to facilitate the work of the food security analysts creating a data pipeline which could run every day to fetch the new data, calculate the composite indicator at subnational and national level and share it through a public dashboard. The formula to compute the prevalence of cfii at subnational level is: 

𝑐𝑓𝑖𝑖 = 0.5 ∗ 𝑓𝑐𝑠 + 1.5 ∗ 𝑟𝑐𝑠𝑖

The validation of the new indicator will be in the countries of Yemen and Syria.

## Deliverables
1. Backend solution that fetches data from our public API for Yemen and Syria (ISO codes ‘YEM’ and ‘SYR’) and gives alerts when the value of the cfii goes beyond the threshold value of T = 1.
2. The time series of the cfii, the alerts and other descriptive statistics that you feel may be informative, should be displayed in a frontend solution, where users can select which of the two countries to visualize.

## Data APIs
1. Food Security Data: Use the iso3 of the country to get the data at the endpoint
https://api.hungermapdata.org/v1/foodsecurity/country/{iso3}/region?date_start={YYYY-MM-DD}date_end={YYYY-MM-DD} ,
This endpoint returns subnational (administrative level 1 ADM1 areas) food security data for a single country, as time series for a specific time period. It supports the date_start parameter value up to 500 days ago from today.
2. Geographical Boundaries: You can retrieve the administrative boundaries of the countries from our GeoAPI.
https://api.vam.wfp.org/geodata/GetGeoAdmins?adm0={adm0}&admcode={adm0}
adm0 indicates the country_id given by the data api.


## Initial Setup

The steps below run the app.

1. Run `npm install`
2. Run `npm run start`
3. Set up MongoDB connection

The system will automatically fetch data daily, calculate the cfii index, and store results in MongoDB.

<!-- 1. Run `npm install`
2. Run `npm run build`
3. Run `npm run start`
4. Set up MongoDB connection -->

<!-- The frontend will display the data in real-time with interactive charts and alerts. -->
<!-- 5. Run the React frontend separately -->
<!-- 4. Open your browser to [localhost:[PORT_NUMBER_PROVIDED]](http://localhost:[PORT_NUMBER_PROVIDED]) -->
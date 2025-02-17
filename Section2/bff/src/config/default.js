const port = process.env.PORT ?? '8083';
const foodSecurityBaseURL = 'https://api.hungermapdata.org/v1/foodsecurity/country/{iso3}/region?';// date_start={YYYY-MM-DD}date_end={YYYY-MM-DD}
const geoBoundariesBaseURL = 'https://api.vam.wfp.org/geodata/GetGeoAdmins?';// adm0={adm0}&admcode={adm0}

const config = {
  port,
  foodSecurityBaseURL,
  geoBoundariesBaseURL
}

export default config

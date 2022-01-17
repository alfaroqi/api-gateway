const { TIMEOUT } = process.env;

const axios = require("axios");

module.exports = (baseUrl, apiKey) => {
  return axios.create({
    baseURL: baseUrl,
    timeout: TIMEOUT,
  });
};

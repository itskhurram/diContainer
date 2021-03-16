'use strict';

const dotenv = require('dotenv');

module.exports = (() => {
  dotenv.config();
  const environment = {
    PORT: process.env.PORT || 9000,
    URL: process.env.URL || 'http://localhost',
    database: {
       url: process.env.DATABASE_URI || '',
    },
  };
  return environment;
})();

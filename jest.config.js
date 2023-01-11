/** @type {import('@jest/types').Config.InitialOptions } */
module.exports = {
  transform: {
    "\\.[jt]sx?$": ["@swc/jest", ],
  },
  testMatch: ['**/?(*.)+(spec).ts?(x)'],
};

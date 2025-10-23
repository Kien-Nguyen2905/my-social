// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config({
  path: '.env.production',
});

module.exports = {
  apps: [
    {
      name: process.env.PM2_NAME,
      script: 'npm run preview',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT,
        VITE_BASE_URL: process.env.VITE_BASE_URL,
      },
    },
  ],
};

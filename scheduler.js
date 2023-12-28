import cron from 'node-cron';
import handler from './pages/api/mobile'; // Import the handler function from mobile.js

// Schedule the task to run every day at 1 AM
cron.schedule('0 1 * * *', handler);
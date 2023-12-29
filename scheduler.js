import cron from 'node-cron';

// Import the actual functions you want to schedule
import { mobileHandler } from './pages/api/mobile'; // Update the named export appropriately
import { fetchCarImagesHandler } from './pages/api/fetchCarImages'; // Update the named export appropriately

// Schedule the mobileHandler to run every day at 1 AM
cron.schedule('0 1 * * *', () => {
  console.log("Running mobileHandler job at 1 AM every day");
  mobileHandler().catch(console.error); // Assuming mobileHandler is an async function
});

// Schedule the fetchCarImagesHandler to run every day at 2 AM
cron.schedule('0 2 * * *', () => {
  console.log("Running fetchCarImagesHandler job at 2 AM every day");
  fetchCarImagesHandler().catch(console.error); // Assuming fetchCarImagesHandler is an async function
});

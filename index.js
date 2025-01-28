// Backend: Node.js + Express
const express = require("express");
const app = express();
// const fs = require("fs");
const cors = require("cors");
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy location data simulating vehicle movement
const locationData = [
  { latitude: 20.705535, longitude: 77.002775, timestamp: "2025-01-21T10:00:00Z",place:"Akola" ,address:"Jatharpeth Akola"},
  { latitude: 12.914045, longitude: 77.632339, timestamp: "2025-01-22T10:00:10Z",place:"Bengaluru" ,address:"Incubex HSR21, 5th Main Rd, Sector 6, HSR Layout Bengaluru, Karnataka - 560068, Bengaluru, Karnataka 560034"},
  { latitude: 18.555083, longitude: 73.886212, timestamp: "2025-01-20T10:00:15Z",place:"Pune" ,address:""},
  { latitude: 28.676792, longitude: 77.262001, timestamp: "2025-01-19T10:00:20Z",place:"New Delhi",address:"12/12, IT Park Road, Metro Vihar, Shastri Park, Jagjit Nagar, New Delhi, Delhi, 110053" },
  { latitude: 21.161333, longitude: 79.056978, timestamp: "2025-01-25T10:00:05Z",place:"Nagpur",address:"Ravi nagar ,Nagpur ,maharashtra ,India" }];

// // OR Load dummy data
// const data = JSON.parse(fs.readFileSync("dummy_data.json", "utf-8"));

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the Vehicle Tracker API!",
    routes: {
      routeData: "/api/route", //  vehicle route data
      travelHistory: "/api/history", //travel history
      vehicleStatus: "/api/location", // vehicle's current status
    },
  });
});


let currentIndex = 0;

// API to fetch the current location of the vehicle
app.get('/api/location', (req, res) => {
  if (currentIndex < locationData.length) {
    res.json(locationData[currentIndex]);
    currentIndex++;
  } else {
    res.json({ message: "No more data", end: true });
  }
});

// API to fetch the entire route
app.get('/api/route', (req, res) => {
  res.json(locationData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
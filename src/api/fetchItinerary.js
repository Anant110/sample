// src/api/fetchItinerary.js

const itineraries = [
    {
      title: "Paris Trip",
      description: "5 days in Paris exploring museums, cafes, and landmarks.",
    },
    {
      title: "Goa Vacation",
      description: "3 days chilling at beaches and parties in Goa!",
    },
  ];
  
  export function fetchItinerary(title) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const trip = itineraries.find((trip) => trip.title === title);
        if (trip) resolve(trip);
        else reject("Trip not found");
      }, 1000); // Simulating network delay
    });
  }
  
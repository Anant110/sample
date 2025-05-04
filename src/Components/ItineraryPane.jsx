import { useState } from "react";

const dummyItineraries = [
  {
    id: 1,
    title: "Paris Trip",
    description: "5 days in Paris exploring museums, cafes, and landmarks.",
  },
  {
    id: 2,
    title: "Goa Vacation",
    description: "3 days chilling at beaches and parties in Goa!",
  },
];

function ItineraryPane({ setShowThirdPane, setSelectedTrip }) {
  const [itineraries, setItineraries] = useState(dummyItineraries);
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(true);

  const handleSelect = (trip) => {
    setSelectedTrip(trip);
    setShowThirdPane(true);
  };

  const handleAddItinerary = () => {
    const newTrip = {
      id: Date.now(),
      title: "New Adventure",
      description: "An amazing new journey!",
    };
    setItineraries([newTrip, ...itineraries]);
  };

  const handleDeleteItinerary = (id) => {
    const filteredTrips = itineraries.filter((trip) => trip.id !== id);
    setItineraries(filteredTrips);
  };

  const handleEditItinerary = (id) => {
    const newTitle = prompt("Enter new title:");
    const newDesc = prompt("Enter new description:");
    setItineraries(
      itineraries.map((trip) =>
        trip.id === id ? { ...trip, title: newTitle, description: newDesc } : trip
      )
    );
  };

  const filteredItineraries = itineraries.filter((trip) =>
    trip.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full md:w-2/3 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Itineraries</h2>
        <button
          onClick={handleAddItinerary}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Trip
        </button>
      </div>

      <input
        type="text"
        placeholder="Search trips..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      {/* <button
        onClick={() => setShowItineraries(!showItineraries)}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 mt-4 ml-4 w-fit"
      >
        {showItineraries ? "Hide Itineraries" : "Show Itineraries"}
      </button> */}

      {expanded && (
        <div className="flex flex-col gap-4">
          {filteredItineraries.length > 0 ? (
            filteredItineraries.map((trip) => (
              <div
                key={trip.id}
                className="bg-white p-4 rounded shadow hover:bg-blue-50 cursor-pointer flex justify-between items-center"
              >
                <div onClick={() => handleSelect(trip)}>
                  <h3 className="text-xl font-semibold">{trip.title}</h3>
                  <p className="text-gray-600">{trip.description}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditItinerary(trip.id)}
                    className="text-green-500 hover:text-green-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteItinerary(trip.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No itineraries found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ItineraryPane;

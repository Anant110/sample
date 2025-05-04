import Sidebar from './Components/Sidebar';
import Topbar from './components/Topbar';
import ItineraryPane from './Components/ItineraryPane';
import ThirdPane from './Components/ThirdPane';
import { useState } from 'react';
import ItineraryDetail from './Components/ItineraryDetails';
import ItineraryList from './Components/ItineraryList';

function App() {
  const [showThirdPane, setShowThirdPane] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [showItineraries, setShowItineraries] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar />

        {/* Beautiful Show/Hide Itineraries Button */}
        <div className="p-4">
          <button
            onClick={() => setShowItineraries(!showItineraries)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {showItineraries ? "Hide Itineraries" : "Show Itineraries"}
          </button>
        </div>

        {/* Itinerary and Third Pane */}
        <div className="flex flex-1">
          {showItineraries && (
            <ItineraryPane
              setShowThirdPane={setShowThirdPane}
              setSelectedTrip={setSelectedTrip}
            />
          )}
          {showThirdPane && selectedTrip && (
            <ThirdPane trip={selectedTrip} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;



// function App() {
//   const [trips, setTrips] = useState([
//     {
//       id: 1,
//       title: "Paris Trip",
//       description: "5 days in Paris exploring museums, cafes, and landmarks.",
//       startDate: "2025-05-01",
//       endDate: "2025-05-05",
//     },
//     {
//       id: 2,
//       title: "Goa Vacation",
//       description: "3 days chilling at beaches and parties in Goa!",
//       startDate: "2025-06-10",
//       endDate: "2025-06-13",
//     },
//   ]);

//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const [showItineraries, setShowItineraries] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");

//   const addTrip = () => {
//     const newTrip = {
//       id: trips.length + 1,
//       title: "New Trip",
//       description: "Description of the new trip...",
//       startDate: "",
//       endDate: "",
//     };
//     setTrips([...trips, newTrip]);
//   };

//   const editTrip = (trip) => {
//     const newTitle = prompt("Enter new title", trip.title);
//     const newDescription = prompt("Enter new description", trip.description);
//     if (newTitle && newDescription) {
//       const updatedTrips = trips.map((t) =>
//         t.id === trip.id ? { ...t, title: newTitle, description: newDescription } : t
//       );
//       setTrips(updatedTrips);
//     }
//   };

//   const deleteTrip = (id) => {
//     const updatedTrips = trips.filter((trip) => trip.id !== id);
//     setTrips(updatedTrips);
//     if (selectedTrip && selectedTrip.id === id) {
//       setSelectedTrip(null);
//     }
//   };

//   const handleSelectTrip = (trip) => {
//     setSelectedTrip(trip);
//   };

//   const filteredTrips = trips.filter((trip) =>
//     trip.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-blue-50 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Travel Itinerary</h1>

//       {/* Beautiful Show/Hide Button */}
//       <div className="flex justify-center">
//         <button
//           onClick={() => setShowItineraries(!showItineraries)}
//           className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
//         >
//           {showItineraries ? "Hide Itineraries" : "Show Itineraries"}
//         </button>
//       </div>

//       {/* Add Trip and Search */}
//       {showItineraries && (
//         <>
//           <div className="flex justify-between items-center mt-6">
//             <input
//               type="text"
//               placeholder="Search trips..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm"
//             />
//             <button
//               onClick={addTrip}
//               className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
//             >
//               + Add Trip
//             </button>
//           </div>

//           {/* Trip List and Trip Detail */}
//           <div className="flex flex-wrap gap-6 mt-8 justify-center">
//             <ItineraryList
//               trips={filteredTrips}
//               onSelectTrip={handleSelectTrip}
//               onEditTrip={editTrip}
//               onDeleteTrip={deleteTrip}
//             />
//             <ItineraryDetail trip={selectedTrip} />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
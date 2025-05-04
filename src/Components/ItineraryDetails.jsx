function ItineraryDetail({ trip }) {
    if (!trip) {
      return (
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-gray-500">Select a trip to see details</h2>
        </div>
      );
    }
  
    return (
      <div className="flex flex-col w-1/3 p-6 bg-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{trip.title}</h2>
        <p className="text-gray-700 mb-6">{trip.description}</p>
  
        {/* You can add more detailed information here if needed */}
        <div className="flex flex-col space-y-2">
          <span className="text-gray-500">Start Date: {trip.startDate || "Not specified"}</span>
          <span className="text-gray-500">End Date: {trip.endDate || "Not specified"}</span>
          {/* Add other trip details if your trip object contains them */}
        </div>
      </div>
    );
  }
  
  export default ItineraryDetail;
  
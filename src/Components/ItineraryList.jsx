import ItineraryCard from "./ItineraryCard";

function ItineraryList({ trips, onSelectTrip, onEditTrip, onDeleteTrip }) {
  return (
    <div className="flex flex-col space-y-4 w-1/3 p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Available Itineraries</h2>

      {trips.length === 0 ? (
        <p className="text-gray-500">No itineraries available. Please add some!</p>
      ) : (
        trips.map((trip) => (
          <ItineraryCard
            key={trip.id}
            trip={trip}
            onSelect={onSelectTrip}
            onEdit={onEditTrip}
            onDelete={onDeleteTrip}
          />
        ))
      )}
    </div>
  );
}

export default ItineraryList;


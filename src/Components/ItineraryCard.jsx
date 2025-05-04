function ItineraryCard({ trip, onSelect, onEdit, onDelete }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer flex justify-between items-center">
        <div onClick={() => onSelect(trip)}>
          <h3 className="text-xl font-bold">{trip.title}</h3>
          <p className="text-gray-600">{trip.description}</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(trip);
            }}
            className="text-green-500 hover:text-green-700 font-semibold"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(trip.id);
            }}
            className="text-red-500 hover:text-red-700 font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  
  export default ItineraryCard;
  
function ThirdPane({ selectedTrip }) {
  if (!selectedTrip) return null;

  return (
    <div className="w-full md:w-1/3 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{selectedTrip.title}</h2>
      <p className="text-gray-700">{selectedTrip.description}</p>
      {/* You can add more trip details here later */}
      <input
  type="date"
  value={newTrip.startDate}
  onChange={(e) => setNewTrip({ ...newTrip, startDate: e.target.value })}
  className="border p-2 rounded w-full mb-4"
/>

<input
  type="date"
  value={newTrip.endDate}
  onChange={(e) => setNewTrip({ ...newTrip, endDate: e.target.value })}
  className="border p-2 rounded w-full mb-4"
/>
    </div>
  );
}

export default ThirdPane;

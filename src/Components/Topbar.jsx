function Topbar() {
    return (
      <div className="h-16 bg-white shadow-md flex items-center justify-between px-6">
        {/* Left side - App title */}
        <h1 className="text-xl font-bold text-gray-800">Travel Itinerary</h1>
  
        {/* Right side - User Info or Button */}
        <div className="flex items-center gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Create Itinerary
          </button>
  
          {/* User avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="font-semibold text-gray-700">A</span>
          </div>
        </div>
      </div>
    )
  }
  
  export default Topbar;
  
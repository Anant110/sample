// src/components/Sidebar.jsx
export default function Sidebar() {
    return (
      <aside className="w-full md:w-1/5 bg-blue-100 min-h-[60px] md:min-h-screen p-4">
      <div className="w-64 h-screen bg-blue-100 p-4">
        <h2 className="text-xl font-bold mb-6">Travel App</h2>
        <ul className="space-y-4">
          <li>Home</li>
          <li>Explore</li>
          <li>Bookings</li>
        </ul>
      </div>
      </aside>
    );
  }
  
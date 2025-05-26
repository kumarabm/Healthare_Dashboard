export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: "🏠", active: true },
    { name: "History", icon: "🕐", active: false },
    { name: "Calendar", icon: "📅", active: false },
    { name: "Appointments", icon: "📋", active: false },
    { name: "Statistics", icon: "📊", active: false },
    { name: "Chat", icon: "💬", active: false },
    { name: "Support", icon: "📞", active: false },
    { name: "Settings", icon: "⚙️", active: false },
  ];

  return (
    <div className="bg-white h-full shadow-lg border-r border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <h2 className="text-xl font-bold text-slate-800">HealthCare</h2>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors
                ${item.active 
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-500' 
                  : 'text-slate-600 hover:bg-slate-50'
                }
              `}>
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
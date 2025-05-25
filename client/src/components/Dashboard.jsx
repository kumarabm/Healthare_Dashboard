import { useState } from "react";
import Sidebar from "./Sidebar";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4">
          {/* Search Bar - Top Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 flex-1">
              <button
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="text-xl">☰</span>
              </button>
              <div className="relative flex-1 max-w-md">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">🔍</span>
                <input
                  placeholder="Search"
                  className="pl-10 w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-500">This Week</span>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">👤</span>
              </div>
            </div>
          </div>

          {/* Dashboard Title and Icons Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              {/* Dashboard Icon */}
              <div className="relative p-3 hover:bg-slate-100 rounded-lg transition-colors" title="Dashboard">
                <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                  <div className="w-full h-full bg-slate-600 rounded-sm"></div>
                  <div className="w-full h-full bg-slate-600 rounded-sm"></div>
                  <div className="w-full h-full bg-slate-600 rounded-sm"></div>
                  <div className="w-full h-full bg-slate-600 rounded-sm"></div>
                </div>
              </div>

              {/* History Icon */}
              <div className="relative p-3 hover:bg-slate-100 rounded-lg transition-colors" title="History">
                <div className="w-5 h-5 relative">
                  <div className="w-full h-full border-2 border-slate-600 rounded-full relative">
                    <div className="absolute top-1 left-1/2 w-0.5 h-1.5 bg-slate-600 transform -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-1 h-0.5 bg-slate-600 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Calendar Icon */}
              <div className="relative p-3 hover:bg-slate-100 rounded-lg transition-colors" title="Calendar">
                <div className="w-5 h-5 flex flex-col">
                  <div className="w-full h-1 bg-slate-600 rounded-t"></div>
                  <div className="w-full h-4 border-2 border-slate-600 bg-white relative">
                    <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-slate-600"></div>
                    <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-slate-600"></div>
                    <div className="absolute bottom-1 left-0.5 w-3 h-0.5 bg-slate-600"></div>
                  </div>
                </div>
              </div>

              {/* Appointments Icon */}
              <div className="relative p-3 hover:bg-slate-100 rounded-lg transition-colors" title="Appointments">
                <div className="w-5 h-5 relative">
                  <div className="w-4 h-5 border-2 border-slate-600 bg-white relative">
                    <div className="absolute top-1 left-0.5 w-2.5 h-0.5 bg-slate-600"></div>
                    <div className="absolute top-2 left-0.5 w-2 h-0.5 bg-slate-600"></div>
                    <div className="absolute top-3 left-0.5 w-2.5 h-0.5 bg-slate-600"></div>
                  </div>
                  <div className="absolute -top-0.5 right-0 w-2 h-1 bg-slate-600"></div>
                </div>
              </div>

              {/* Statistics Icon */}
              <div className="relative p-3 hover:bg-slate-100 rounded-lg transition-colors" title="Statistics">
                <div className="w-5 h-5 flex items-end justify-between space-x-0.5">
                  <div className="w-1 h-2 bg-slate-600 rounded-t"></div>
                  <div className="w-1 h-4 bg-slate-600 rounded-t"></div>
                  <div className="w-1 h-3 bg-slate-600 rounded-t"></div>
                  <div className="w-1 h-5 bg-slate-600 rounded-t"></div>
                </div>
              </div>



              {/* Call Icon */}
              <button className="relative hover:bg-slate-100 transition-colors" title="Call Support">
                <div className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="text-lg">📞</span>
                </div>
                <span className="absolute -top-1 -right-1 block h-3 w-3 rounded-full ring-2 ring-white bg-red-400 animate-pulse"></span>
              </button>

              {/* Chat Icon */}
              <button className="relative hover:bg-slate-100 transition-colors" title="Chat Support">
                <div className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="text-lg">💬</span>
                </div>
                <span className="absolute -top-1 -right-1 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
              </button>

              {/* Support Icon */}
              <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Help & Support">
                <span className="text-xl">❓</span>
              </button>

              {/* Notifications */}
              <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Notifications">
                <span className="text-xl">🔔</span>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors">
                  <span className="text-sm">+</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-12 gap-6 h-full">
            {/* Left Column - Health Metrics & Activity */}
            <div className="col-span-12 lg:col-span-5 space-y-6">
              <AnatomySection />
              <ActivityFeed />
            </div>

            {/* Right Column - Calendar & Schedule */}
            <div className="col-span-12 lg:col-span-7 space-y-6">
              <CalendarView />
              <UpcomingSchedule />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
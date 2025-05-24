import { useState } from "react";
import Sidebar from "./Sidebar";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

export default function DashboardMainContent() {
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
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <button
                  className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="text-xl">☰</span>
                </button>
                <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <span className="mr-2">This Week</span>
                <span className="font-semibold">October 2021</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">🔍</span>
                <input
                  placeholder="Search"
                  className="pl-10 w-64 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 hover:bg-slate-100 rounded-lg">
                <span className="text-xl">🔔</span>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">
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
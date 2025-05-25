import { useState } from "react";
import Sidebar from "@/components/sidebar";
import HealthMetrics from "@/components/health-metrics";
import CalendarSection from "@/components/calendar-section";
import UpcomingSchedule from "@/components/upcoming-schedule";
import ActivityChart from "@/components/activity-chart";
import { Search, Bell, Plus, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </Button>
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search"
                  className="pl-10 w-64"
                />
              </div>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
              </Button>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/api/placeholder/32/32" />
                  <AvatarFallback className="bg-cyan-500 text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
                <Button size="icon" className="bg-blue-500 hover:bg-blue-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-12 gap-6 h-full">
            {/* Left Column - Health Metrics & Activity */}
            <div className="col-span-12 lg:col-span-5 space-y-6">
              <HealthMetrics />
              <ActivityChart />
            </div>

            {/* Right Column - Calendar & Schedule */}
            <div className="col-span-12 lg:col-span-7 space-y-6">
              <CalendarSection />
              <UpcomingSchedule />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

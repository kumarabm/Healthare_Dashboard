import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


const weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

// Sample calendar data for October 2021
const calendarDays = [
  { day: 25, appointments: ["10:00"] },
  { day: 26, appointments: ["08:00", "09:00"] },
  { day: 27, appointments: ["12:00"] },
  { day: 28, appointments: ["11:00"] },
  { day: 29, appointments: ["15:00", "09:00"], isToday: true },
  { day: 30, appointments: ["10:00"] },
  { day: 31, appointments: ["11:00"] },
];

export default function CalendarSection() {
  const [selectedDate, setSelectedDate] = useState("2021-10-29");
  
  const { data: appointments, isLoading } = useQuery({
    queryKey: ["/api/appointments/1"], // Using user ID 1 for demo
  });

  const { data: todayAppointments } = useQuery({
    queryKey: ["/api/appointments/1/2021-10-29"], // Today's appointments
  });

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-slate-200 rounded w-1/3"></div>
            <div className="h-64 bg-slate-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-800">
            October 2021
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4 text-slate-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4 text-slate-600" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Calendar Week View */}
        <div className="space-y-4">
          {/* Week days header */}
          <div className="grid grid-cols-8 gap-2">
            <div className="text-xs font-medium text-slate-500 py-2"></div>
            {weekDays.map((day) => (
              <div key={day} className="text-center">
                <div className="text-xs font-medium text-slate-500 mb-1">{day}</div>
                <div className={`text-lg font-bold ${
                  day === "Fri" ? "bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center mx-auto" : "text-slate-800"
                }`}>
                  {day === "Mon" ? "25" : day === "Tues" ? "26" : day === "Wed" ? "27" : 
                   day === "Thurs" ? "28" : day === "Fri" ? "29" : day === "Sat" ? "30" : "31"}
                </div>
              </div>
            ))}
          </div>

          {/* Time slots with appointments */}
          <div className="space-y-2">
            {/* 10:00 row */}
            <div className="grid grid-cols-8 gap-2 items-center">
              <div className="text-xs text-slate-500 font-medium">10:00</div>
              <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded text-center">08:00</div>
              <div></div>
              <div className="text-xs text-center text-slate-400">12:00</div>
              <div className="text-xs text-center text-slate-400">10:00</div>
              <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded text-center">15:00</div>
              <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded text-center">09:00</div>
            </div>

            {/* 11:00 row */}
            <div className="grid grid-cols-8 gap-2 items-center">
              <div className="text-xs text-slate-500 font-medium">11:00</div>
              <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded text-center">09:00</div>
              <div></div>
              <div className="text-xs text-center text-slate-400">13:00</div>
              <div className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded text-center">11:00</div>
              <div className="text-xs text-center text-slate-400">14:00</div>
              <div className="text-xs text-center text-slate-400">10:00</div>
            </div>

            {/* 12:00 row */}
            <div className="grid grid-cols-8 gap-2 items-center">
              <div className="text-xs text-slate-500 font-medium">12:00</div>
              <div className="text-xs text-center text-slate-400">10:00</div>
              <div></div>
              <div className="text-xs text-center text-slate-400">—</div>
              <div className="text-xs text-center text-slate-400">16:00</div>
              <div className="text-xs text-center text-slate-400">15:00</div>
              <div className="text-xs text-center text-slate-400">11:00</div>
            </div>
          </div>
        </div>

        {/* Today's Appointments Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-900 text-white p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-white">🦷</span>
                <span className="font-medium">Dentist</span>
              </div>
              <span className="text-blue-200 text-sm">09:00-11:00</span>
            </div>
            <p className="text-blue-200 text-sm">Dr. Cameron Williamson</p>
          </div>

          <div className="bg-slate-100 text-slate-800 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-slate-600">🏃‍♂️</span>
                <span className="font-medium">Physiotherapy Appointment</span>
              </div>
              <span className="text-slate-600 text-sm">11:00-12:00</span>
            </div>
            <p className="text-slate-600 text-sm">Dr. Kevin Djones</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

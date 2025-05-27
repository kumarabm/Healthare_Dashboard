import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarView() {
  const weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const hours = ["10:00", "11:00", "12:00"];

  // Appointment cards data
  const appointmentCards = [
    { 
      id: 1, 
      title: "Dentist",
      time: "09:00-11:00",
      doctor: "Dr. Cameron Williamson",
      color: "bg-indigo-600",
      icon: "🦷"
    },
    { 
      id: 2, 
      title: "Physiotherapy Appointment",
      time: "11:00-12:00", 
      doctor: "Dr. Kevin Dsouza",
      color: "bg-indigo-300",
      icon: "🏃"
    }
  ];

  // Time slot appointments for grid
  const timeSlotAppointments = {
    26: [{ time: "08:00", color: "bg-indigo-600" }],
    27: [{ time: "12:00", color: "bg-indigo-600" }],
    28: [
      { time: "10:00", color: "bg-indigo-600" },
      { time: "11:00", color: "bg-indigo-300" }
    ],
    29: [{ time: "12:00", color: "bg-indigo-300" }],
    30: [
      { time: "09:00", color: "bg-indigo-300" },
      { time: "14:00", color: "bg-gray-300" },
      { time: "15:00", color: "bg-gray-300" }
    ],
    31: [
      { time: "10:00", color: "bg-gray-300" },
      { time: "11:00", color: "bg-gray-300" }
    ]
  };

  const getAppointmentsForDay = (date) => {
    return timeSlotAppointments[date] || [];
  };

  return (
   
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800">October 2021</h2>
            <div className="flex space-x-2">
              <button className="p-2 rounded hover:bg-gray-100 text-gray-500">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2 rounded hover:bg-gray-100 text-gray-500">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            {/* Days + Dates Header */}
            <div className="grid grid-cols-8 gap-2 text-center text-sm font-medium text-gray-600 mb-4">
              <div></div>
              {weekDays.map((day, idx) => (
                <div key={idx} className="py-2">{day}</div>
              ))}
              <div></div>
              {dates.map((date, idx) => (
                <div
                  key={idx}
                  className={`py-2 rounded-lg font-medium ${
                    date === 29 ? "bg-indigo-100 text-indigo-700" : "text-gray-700"
                  }`}
                >
                  {date}
                </div>
              ))}
            </div>

            {/* Time Grid */}
            <div className="grid grid-cols-8 gap-2 text-sm">
              {hours.map((hour, hourIdx) => (
                <React.Fragment key={hourIdx}>
                  {/* Time label */}
                  <div className="text-gray-500 py-3 text-left font-medium">{hour}</div>

                  {dates.map((date, dateIdx) => {
                    const dayAppointments = getAppointmentsForDay(date);
                    const appointmentAtTime = dayAppointments.find(apt => apt.time === hour);

                    return (
                      <div key={`${date}-${hour}`} className="py-2">
                        {appointmentAtTime ? (
                          <div className={`px-3 py-1 rounded-full text-white text-xs font-medium text-center ${appointmentAtTime.color}`}>
                            {appointmentAtTime.time}
                          </div>
                        ) : (
                          // Handle specific time slots from the image
                          (date === 26 && hour === "10:00") ? (
                            <div className="px-3 py-1 rounded-full text-white text-xs font-medium text-center bg-indigo-600">
                              08:00
                            </div>
                          ) : (date === 27 && hour === "10:00") ? (
                            <div className="px-3 py-1 rounded-full text-white text-xs font-medium text-center bg-indigo-600">
                              12:00
                            </div>
                          ) : (date === 28 && hour === "10:00") ? (
                            <div className="px-3 py-1 rounded-full text-white text-xs font-medium text-center bg-indigo-600">
                              10:00
                            </div>
                          ) : (date === 28 && hour === "11:00") ? (
                            <div className="px-3 py-1 rounded-full text-white text-xs font-medium text-center bg-indigo-300">
                              11:00
                            </div>
                          ) : (date === 28 && hour === "12:00") ? (
                            <div className="text-gray-400 text-center">—</div>
                          ) : (date === 29 && hour === "10:00") ? (
                            <div className="text-gray-400 text-center">—</div>
                          ) : (date === 29 && hour === "11:00") ? (
                            <div className="text-gray-400 text-center">—</div>
                          ) : (date === 29 && hour === "12:00") ? (
                            <div className="px-3 py-1 rounded-full text-white text-xs font-medium text-center bg-indigo-300">
                              12:00
                            </div>
                          ) : (date === 30 && hour === "10:00") ? (
                            <div className="px-3 py-1 rounded-full text-gray-700 text-xs font-medium text-center bg-gray-300">
                              09:00
                            </div>
                          ) : (date === 30 && hour === "11:00") ? (
                            <div className="px-3 py-1 rounded-full text-gray-700 text-xs font-medium text-center bg-gray-300">
                              14:00
                            </div>
                          ) : (date === 30 && hour === "12:00") ? (
                            <div className="px-3 py-1 rounded-full text-gray-700 text-xs font-medium text-center bg-gray-300">
                              15:00
                            </div>
                          ) : (date === 31 && hour === "10:00") ? (
                            <div className="px-3 py-1 rounded-full text-gray-700 text-xs font-medium text-center bg-gray-300">
                              15:00
                            </div>
                          ) : (date === 31 && hour === "11:00") ? (
                            <div className="px-3 py-1 rounded-full text-gray-700 text-xs font-medium text-center bg-gray-300">
                              11:00
                            </div>
                          ) : (
                            <div className="text-gray-400 text-center">—</div>
                          )
                        )}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Appointment Cards */}
          <div className="px-6 pb-6">
            <div className="grid md:grid-cols-2 gap-4">
              {appointmentCards.map((appointment) => (
                <div
                  key={appointment.id}
                  className={`p-4 rounded-xl text-white relative overflow-hidden ${appointment.color}`}
                >
                  <div className="relative z-10">
                    <h3 className="font-semibold text-white mb-1">{appointment.title}</h3>
                    <p className="text-sm text-white/90 mb-2">{appointment.time}</p>
                    <p className="text-sm text-white/80">{appointment.doctor}</p>
                  </div>
                  <div className="absolute top-4 right-4 text-2xl opacity-20">
                    {appointment.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
   
  );
}
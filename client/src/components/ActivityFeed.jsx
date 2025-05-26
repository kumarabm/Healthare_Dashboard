import React from "react";

export default function ActivityFeed() {
  const weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  
  // Activity data matching the image pattern
  const activityData = [
    { day: "Mon", appointments: 2, colors: ["bg-cyan-400", "bg-purple-500"] },
    { day: "Tues", appointments: 3, colors: ["bg-cyan-400", "bg-blue-500", "bg-purple-500"] },
    { day: "Wed", appointments: 1, colors: ["bg-cyan-400"] },
    { day: "Thurs", appointments: 3, colors: ["bg-cyan-400", "bg-blue-500", "bg-purple-500"] },
    { day: "Fri", appointments: 4, colors: ["bg-cyan-400", "bg-blue-500", "bg-purple-500", "bg-green-400"] },
    { day: "Sat", appointments: 2, colors: ["bg-cyan-400", "bg-gray-400"] },
    { day: "Sun", appointments: 2, colors: ["bg-cyan-400", "bg-purple-500"] }
  ];

  const totalAppointments = activityData.reduce((sum, day) => sum + day.appointments, 0);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Activity</h3>
        <span className="text-sm text-gray-500">{totalAppointments} appointments this week</span>
      </div>
      
      {/* Chart */}
      <div className="flex items-end justify-between space-x-3 h-32 mb-4">
        {activityData.map((dayData, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            {/* Bar container */}
            <div className="flex flex-col items-center justify-end h-24 w-6">
              {dayData.colors.map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  className={`w-full rounded-sm mb-1 ${color}`}
                  style={{ 
                    height: `${15 + (colorIndex * 8)}px`,
                    marginBottom: colorIndex < dayData.colors.length - 1 ? '2px' : '0'
                  }}
                />
              ))}
            </div>
            
            {/* Day label */}
            <span className="text-xs text-gray-500 mt-2 font-medium">
              {dayData.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
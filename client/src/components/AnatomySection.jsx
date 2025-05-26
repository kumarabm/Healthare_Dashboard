import React from "react";

export default function AnatomySection() {
  // Health metrics data matching the image
  const healthMetrics = [
    {
      id: 1,
      name: "Lungs",
      dueDate: "26 Oct 2021",
      progress: 85,
      color: "#EF4444", // Red
      icon: "🫁"
    },
    {
      id: 2,
      name: "Teeth",
      dueDate: "26 Oct 2021", 
      progress: 60,
      color: "#10B981", // Green
      icon: "🦷"
    },
    {
      id: 3,
      name: "Bone",
      dueDate: "26 Oct 2021",
      progress: 75,
      color: "#F59E0B", // Orange
      icon: "🦴"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Health Status</h3>
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <span className="text-slate-400 text-lg">🔍</span>
        </button>
      </div>
      
      <div className="space-y-6">
        {/* Human Body Illustration - Anatomical Model */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 h-80 flex items-center justify-center overflow-hidden">
          <div className="relative">
            {/* Anatomical human body with detailed muscle structure */}
            <div className="w-28 h-60 relative">
              {/* Head */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-9 h-11 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full border border-orange-400"></div>
              
              {/* Neck */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-200 border border-orange-300"></div>
              
              {/* Main torso with detailed muscle anatomy */}
              <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-18 h-36 bg-gradient-to-b from-red-400 via-red-500 to-red-600 rounded-t-3xl relative border border-red-700">
                {/* Chest muscles (pectorals) */}
                <div className="absolute top-2 left-2 right-2 h-5 border-2 border-red-300 rounded-t-full opacity-80"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-px h-3 bg-red-300"></div>
                
                {/* Rib definition */}
                <div className="absolute top-9 left-2 right-2 space-y-1">
                  <div className="h-px bg-red-300 opacity-60"></div>
                  <div className="h-px bg-red-300 opacity-60"></div>
                  <div className="h-px bg-red-300 opacity-60"></div>
                </div>
                
                {/* Abdominal muscles */}
                <div className="absolute top-14 left-3 right-3 h-14 border border-red-300 rounded opacity-70">
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-px h-12 bg-red-300"></div>
                  <div className="absolute top-2 left-1 right-1 h-px bg-red-300"></div>
                  <div className="absolute top-5 left-1 right-1 h-px bg-red-300"></div>
                  <div className="absolute top-8 left-1 right-1 h-px bg-red-300"></div>
                </div>
              </div>
              
              {/* Arms with muscle definition */}
              <div className="absolute top-13 -left-3 w-5 h-20 bg-gradient-to-b from-red-400 to-red-500 rounded-full rotate-12 border border-red-600">
                <div className="absolute top-3 left-1 right-1 h-3 border border-red-300 rounded-full opacity-60"></div>
              </div>
              <div className="absolute top-13 -right-3 w-5 h-20 bg-gradient-to-b from-red-400 to-red-500 rounded-full -rotate-12 border border-red-600">
                <div className="absolute top-3 left-1 right-1 h-3 border border-red-300 rounded-full opacity-60"></div>
              </div>
              
              {/* Legs with muscle definition */}
              <div className="absolute bottom-0 left-4 w-4 h-14 bg-gradient-to-b from-red-500 to-red-600 rounded-full border border-red-700">
                <div className="absolute top-2 left-0.5 right-0.5 h-5 border border-red-400 rounded opacity-60"></div>
              </div>
              <div className="absolute bottom-0 right-4 w-4 h-14 bg-gradient-to-b from-red-500 to-red-600 rounded-full border border-red-700">
                <div className="absolute top-2 left-0.5 right-0.5 h-5 border border-red-400 rounded opacity-60"></div>
              </div>
            </div>

            {/* Health indicator badge */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                <span>❤️</span>
                <span>Healthy Heart</span>
              </div>
            </div>

            {/* Monthly Log button */}
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-cyan-500 hover:bg-cyan-600 text-white text-xs px-3 py-1 rounded-md shadow-md">
              📅 Monthly Log
            </button>
          </div>
        </div>

        {/* Health Metrics */}
        <div className="space-y-4">
          {healthMetrics.map((metric) => (
            <div key={metric.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  metric.color === "#EF4444" ? "bg-red-100" :
                  metric.color === "#F59E0B" ? "bg-yellow-100" :
                  "bg-green-100"
                }`}>
                  <span className="text-sm">
                    {metric.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800">{metric.name}</h3>
                  <p className="text-sm text-slate-500">Due: {metric.dueDate}</p>
                </div>
              </div>
              <div className="w-24">
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${metric.progress}%`,
                      backgroundColor: metric.color
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
            Details →
          </button>
        </div>
      </div>
    </div>
  );
}
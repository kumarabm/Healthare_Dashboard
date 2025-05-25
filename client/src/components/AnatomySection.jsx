import { useState, useEffect } from "react";

const iconMap = {
  "fa-lungs": "🫁",
  "fa-tooth": "🦷", 
  "fa-bone": "🦴",
};

export default function AnatomySection() {
  const [healthMetrics, setHealthMetrics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/health-metrics/1')
      .then(res => res.json())
      .then(data => {
        setHealthMetrics(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-slate-200 rounded w-3/4"></div>
          <div className="h-64 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="h-16 bg-slate-200 rounded"></div>
            <div className="h-16 bg-slate-200 rounded"></div>
            <div className="h-16 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Health Status</h3>
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <span className="text-cyan-500 text-xl">+</span>
        </button>
      </div>
      
      <div className="space-y-6">
        {/* Human Body Illustration - Anatomical Model */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 h-80 flex items-center justify-center overflow-hidden">
          <div className="relative">
            {/* Anatomical human body with detailed muscle structure */}
            <div className="w-32 h-64 relative">
              {/* Head */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-12 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full"></div>
              
              {/* Neck */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-200"></div>
              
              {/* Main torso with detailed muscle anatomy */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 h-40 bg-gradient-to-b from-red-400 via-red-500 to-red-600 rounded-t-3xl relative">
                {/* Chest muscles (pectorals) */}
                <div className="absolute top-2 left-2 right-2 h-6 border-2 border-red-300 rounded-t-full opacity-80"></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-px h-4 bg-red-300"></div>
                
                {/* Rib definition */}
                <div className="absolute top-10 left-3 right-3 space-y-1">
                  <div className="h-px bg-red-300 opacity-60"></div>
                  <div className="h-px bg-red-300 opacity-60"></div>
                  <div className="h-px bg-red-300 opacity-60"></div>
                </div>
                
                {/* Abdominal muscles */}
                <div className="absolute top-16 left-4 right-4 h-16 border border-red-300 rounded opacity-70">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-px h-12 bg-red-300"></div>
                  <div className="absolute top-3 left-2 right-2 h-px bg-red-300"></div>
                  <div className="absolute top-6 left-2 right-2 h-px bg-red-300"></div>
                  <div className="absolute top-9 left-2 right-2 h-px bg-red-300"></div>
                </div>
              </div>
              
              {/* Arms with muscle definition */}
              <div className="absolute top-14 -left-4 w-6 h-24 bg-gradient-to-b from-red-400 to-red-500 rounded-full rotate-12">
                <div className="absolute top-4 left-1 right-1 h-4 border border-red-300 rounded-full opacity-60"></div>
              </div>
              <div className="absolute top-14 -right-4 w-6 h-24 bg-gradient-to-b from-red-400 to-red-500 rounded-full -rotate-12">
                <div className="absolute top-4 left-1 right-1 h-4 border border-red-300 rounded-full opacity-60"></div>
              </div>
              
              {/* Legs with muscle definition */}
              <div className="absolute bottom-0 left-5 w-5 h-16 bg-gradient-to-b from-red-500 to-red-600 rounded-full">
                <div className="absolute top-2 left-1 right-1 h-6 border border-red-400 rounded opacity-60"></div>
              </div>
              <div className="absolute bottom-0 right-5 w-5 h-16 bg-gradient-to-b from-red-500 to-red-600 rounded-full">
                <div className="absolute top-2 left-1 right-1 h-6 border border-red-400 rounded opacity-60"></div>
              </div>
            </div>

            {/* Health indicator badge */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
          {healthMetrics?.map((metric) => (
            <div key={metric.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  metric.color === "#EF4444" ? "bg-red-100" :
                  metric.color === "#F59E0B" ? "bg-yellow-100" :
                  "bg-blue-100"
                }`}>
                  <span className="text-sm">
                    {iconMap[metric.icon] || "🏥"}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800">{metric.name}</h3>
                  <p className="text-sm text-slate-500">Due: {new Date(metric.dueDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
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
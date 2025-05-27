import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";
import humanBodyImage from "../assets/human .jpg";

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

  const [hoveredMetric, setHoveredMetric] = useState(null);

  const handleSearch = () => {
    console.log('Search health metrics...');
  };

  const handleHeartDetails = () => {
    console.log('Show heart health details...');
  };

  const handleHealthyLeg = () => {
    console.log('Show healthy leg details...');
  };

  const handleDetails = () => {
    console.log('Navigate to detailed health view...');
  };

  const handleMetricClick = (metricName) => {
    console.log(`View ${metricName} details...`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-sm w-full">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Health Status</h3>
        <button 
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={handleSearch}
        >
          <Search className="w-5 h-5 text-slate-400" />
        </button>
      </div>
      
      {/* Anatomical Body Illustration */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 h-80 flex items-center justify-center overflow-hidden mb-6">
        <div className="relative">
          {/* Human body anatomical image */}
          <img 
            src={humanBodyImage} 
            alt="Anatomical human body illustration" 
            className="w-32 h-72 object-contain"
          />

          {/* Health indicator badge - positioned on right side of heart */}
          <div className="absolute top-20 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center space-x-1 transition-colors cursor-pointer"
              onClick={handleHeartDetails}
            >
              <span>❤️</span>
              <span>Healthy Heart</span>
            </button>
          </div>

          {/* Healthy Leg button - positioned at left knee */}
          <button 
            className="absolute bottom-16 left-6 bg-cyan-500 hover:bg-cyan-600 text-white text-xs px-3 py-1 rounded-md shadow-md transition-colors flex items-center space-x-1"
            onClick={handleHealthyLeg}
          >
            <span>🦵</span>
            <span>Healthy Leg</span>
          </button>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="space-y-4 mb-6">
        {healthMetrics.map((metric) => (
          <div 
            key={metric.id} 
            className={`flex items-center justify-between p-4 bg-slate-50 rounded-lg transition-colors cursor-pointer ${
              hoveredMetric === metric.id ? 'bg-slate-100' : 'hover:bg-slate-100'
            }`}
            onMouseEnter={() => setHoveredMetric(metric.id)}
            onMouseLeave={() => setHoveredMetric(null)}
            onClick={() => handleMetricClick(metric.name)}
          >
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

      {/* Details Navigation */}
      <div className="text-center">
        <button 
          className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors flex items-center space-x-1 mx-auto"
          onClick={handleDetails}
        >
          <span>Details</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
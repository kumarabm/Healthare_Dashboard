import { useState, useEffect } from "react";

export default function ActivityFeed() {
  const [activityData, setActivityData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/activity-data/1')
      .then(res => res.json())
      .then(data => {
        setActivityData(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-slate-200 rounded w-1/2"></div>
          <div className="h-32 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }

  const maxValue = Math.max(...activityData.map(d => d.value));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-6">Activity Overview</h3>
      
      <div className="space-y-4">
        {/* Chart */}
        <div className="h-32 flex items-end justify-between space-x-2">
          {activityData.map((item, index) => (
            <div key={item.id} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-slate-100 rounded-t relative overflow-hidden" style={{ height: '100px' }}>
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t transition-all duration-500"
                  style={{ height: `${(item.value / maxValue) * 100}%` }}
                />
              </div>
              <span className="text-xs text-slate-500 mt-2">
                {new Date(item.date).getDate()}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">{activityData.length}</p>
            <p className="text-xs text-slate-500">Days Tracked</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{Math.round(activityData.reduce((sum, item) => sum + item.value, 0) / activityData.length)}</p>
            <p className="text-xs text-slate-500">Avg Activity</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{Math.max(...activityData.map(d => d.value))}</p>
            <p className="text-xs text-slate-500">Peak Day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
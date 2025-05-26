import React from "react";

export default function UpcomingSchedule() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-md">
      <h3 className="text-lg font-semibold text-slate-800 mb-6">
        The Upcoming Schedule
      </h3>

      <div className="space-y-6">
        {/* Thursday */}
        <div>
          <h4 className="text-sm font-medium text-slate-600 mb-3">On Thursday</h4>
          <div className="grid grid-cols-2 gap-3">
            {/* Health checkup complete */}
            <div className="bg-purple-100 p-4 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">✅</span>
                  <span className="font-medium text-slate-800 text-sm">
                    Health checkup complete
                  </span>
                </div>
                <span className="text-slate-400">✏️</span>
              </div>
              <p className="text-xs text-slate-600">11:00 AM</p>
            </div>

            {/* Ophthalmologist */}
            <div className="bg-purple-100 p-4 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">👁️</span>
                  <span className="font-medium text-slate-800 text-sm">
                    Ophthalmologist
                  </span>
                </div>
                <span className="text-slate-400">👤</span>
              </div>
              <p className="text-xs text-slate-600">14:00 PM</p>
            </div>
          </div>
        </div>

        {/* Saturday */}
        <div>
          <h4 className="text-sm font-medium text-slate-600 mb-3">On Saturday</h4>
          <div className="grid grid-cols-2 gap-3">
            {/* Cardiologist */}
            <div className="bg-purple-100 p-4 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">❤️</span>
                  <span className="font-medium text-slate-800 text-sm">
                    Cardiologist
                  </span>
                </div>
                <span className="text-slate-400">👤</span>
              </div>
              <p className="text-xs text-slate-600">12:00 AM</p>
            </div>

            {/* Neurologist */}
            <div className="bg-purple-100 p-4 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">🧠</span>
                  <span className="font-medium text-slate-800 text-sm">
                    Neurologist
                  </span>
                </div>
                <span className="text-slate-400">👤</span>
              </div>
              <p className="text-xs text-slate-600">16:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
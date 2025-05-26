import { useState, useEffect } from "react";

const iconMap = {
  "fa-check-circle": "✅",
  "fa-eye": "👁️",
  "fa-heart": "❤️",
  "fa-brain": "🧠",
};

export default function UpcomingSchedule() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/appointments/1')
      .then(res => res.json())
      .then(data => {
        setAppointments(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-slate-200 rounded w-1/2"></div>
          <div className="space-y-3">
            <div className="h-20 bg-slate-200 rounded"></div>
            <div className="h-20 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  // Group appointments by date
  const groupedAppointments = appointments?.reduce((acc, appointment) => {
    const date = appointment.appointmentDate;
    if (!acc[date]) acc[date] = [];
    acc[date].push(appointment);
    return acc;
  }, {});

  // Get Thursday and Saturday appointments
  const thursdayAppointments = groupedAppointments?.["2021-10-28"] || [];
  const saturdayAppointments = groupedAppointments?.["2021-10-30"] || [];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-6">
        The Upcoming Schedule
      </h3>

      <div className="space-y-6">
        {/* Thursday */}
        <div>
          <h4 className="text-sm font-medium text-slate-600 mb-3">On Thursday</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {thursdayAppointments.map((appointment) => (
              <div key={appointment.id} className="bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">
                      {iconMap[appointment.icon] || "🏥"}
                    </span>
                    <span className="font-medium text-slate-800 text-sm">
                      {appointment.appointmentType}
                    </span>
                  </div>
                  <span className="text-slate-400">
                    {appointment.status === "completed" ? "✏️" : "👤"}
                  </span>
                </div>
                <p className="text-xs text-slate-600">11:00 AM</p>
              </div>
            ))}
          </div>
        </div>

        {/* Saturday */}
        <div>
          <h4 className="text-sm font-medium text-slate-600 mb-3">On Saturday</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {saturdayAppointments.map((appointment) => (
              <div key={appointment.id} className="bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">
                      {iconMap[appointment.icon] || "🏥"}
                    </span>
                    <span className="font-medium text-slate-800 text-sm">
                      {appointment.appointmentType}
                    </span>
                  </div>
                  <span className="text-slate-400">👤</span>
                </div>
                <p className="text-xs text-slate-600">{appointment.startTime}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
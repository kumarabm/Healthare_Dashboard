import { useState, useEffect } from "react";

export default function CalendarView() {
  const [appointments, setAppointments] = useState([]);
  const [currentDate] = useState(new Date());

  useEffect(() => {
    fetch('/api/appointments/1')
      .then(res => res.json())
      .then(data => setAppointments(data))
      .catch(() => {});
  }, []);

  // Generate calendar days for October 2021
  const getDaysInMonth = () => {
    const year = 2021;
    const month = 9; // October (0-indexed)
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const hasAppointment = (day) => {
    if (!day) return false;
    const dateStr = `2021-10-${day.toString().padStart(2, '0')}`;
    return appointments.some(apt => apt.appointmentDate === dateStr);
  };

  const getAppointmentsForDay = (day) => {
    if (!day) return [];
    const dateStr = `2021-10-${day.toString().padStart(2, '0')}`;
    return appointments.filter(apt => apt.appointmentDate === dateStr);
  };

  const days = getDaysInMonth();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800">October 2021</h3>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-slate-100 rounded-lg">
            <span className="text-slate-400">←</span>
          </button>
          <button className="p-2 hover:bg-slate-100 rounded-lg">
            <span className="text-slate-400">→</span>
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {/* Week day headers */}
        {weekDays.map(day => (
          <div key={day} className="p-2 text-center text-xs font-medium text-slate-500">
            {day}
          </div>
        ))}
        
        {/* Calendar days */}
        {days.map((day, index) => (
          <div key={index} className="relative">
            {day ? (
              <div className={`
                p-2 text-center text-sm cursor-pointer rounded-lg transition-colors
                ${day === 29 ? 'bg-blue-500 text-white font-medium' : 'hover:bg-slate-50'}
                ${hasAppointment(day) ? 'text-blue-600 font-medium' : ''}
              `}>
                {day}
                {hasAppointment(day) && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                )}
              </div>
            ) : (
              <div className="p-2"></div>
            )}
          </div>
        ))}
      </div>

      {/* Today's Appointments */}
      <div className="mt-6 border-t border-slate-100 pt-4">
        <h4 className="text-sm font-medium text-slate-600 mb-3">Today's Schedule - Oct 29</h4>
        <div className="space-y-3">
          {getAppointmentsForDay(29).map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  appointment.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                }`}></div>
                <div>
                  <p className="font-medium text-slate-800 text-sm">{appointment.appointmentType}</p>
                  <p className="text-xs text-slate-500">{appointment.startTime} - {appointment.endTime}</p>
                </div>
              </div>
              <div className="text-xs text-slate-500">
                {appointment.doctorName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
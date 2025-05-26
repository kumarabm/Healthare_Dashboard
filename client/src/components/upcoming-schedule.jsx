import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const iconMap = {
  "fa-check-circle": "✅",
  "fa-eye": "👁️",
  "fa-heart": "❤️",
  "fa-brain": "🧠",
};

export default function UpcomingSchedule() {
  const { data: appointments, isLoading } = useQuery({
    queryKey: ["/api/appointments/1"], // Using user ID 1 for demo
  });

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-slate-200 rounded w-1/2"></div>
            <div className="space-y-3">
              <div className="h-20 bg-slate-200 rounded"></div>
              <div className="h-20 bg-slate-200 rounded"></div>
            </div>
          </div>
        </CardContent>
      </Card>
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
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">
          The Upcoming Schedule
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Thursday */}
        <div>
          <h3 className="text-sm font-medium text-slate-600 mb-3">On Thursday</h3>
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
                <p className="text-xs text-slate-600">{appointment.startTime}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Saturday */}
        <div>
          <h3 className="text-sm font-medium text-slate-600 mb-3">On Saturday</h3>
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
      </CardContent>
    </Card>
  );
}

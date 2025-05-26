import type { Appointment, HealthMetric, ActivityData } from "@shared/schema";

export const mockAppointments: Appointment[] = [
  {
    id: 1,
    userId: 1,
    doctorName: "Dr. Cameron Williamson",
    appointmentType: "Dentist",
    appointmentDate: "2021-10-29",
    startTime: "09:00",
    endTime: "11:00",
    status: "scheduled",
    icon: "fa-tooth",
    color: "#3B82F6",
  },
  {
    id: 2,
    userId: 1,
    doctorName: "Dr. Kevin Djones",
    appointmentType: "Physiotherapy Appointment",
    appointmentDate: "2021-10-29",
    startTime: "11:00",
    endTime: "12:00",
    status: "scheduled",
    icon: "fa-dumbbell",
    color: "#F1F5F9",
  },
];

export const mockHealthMetrics: HealthMetric[] = [
  {
    id: 1,
    userId: 1,
    category: "respiratory",
    name: "Lungs",
    dueDate: "2021-10-26",
    progress: 75,
    icon: "fa-lungs",
    color: "#EF4444",
  },
  {
    id: 2,
    userId: 1,
    category: "dental",
    name: "Teeth",
    dueDate: "2021-10-28",
    progress: 50,
    icon: "fa-tooth",
    color: "#F59E0B",
  },
  {
    id: 3,
    userId: 1,
    category: "skeletal",
    name: "Bone",
    dueDate: "2021-10-30",
    progress: 25,
    icon: "fa-bone",
    color: "#3B82F6",
  },
];

export const mockActivityData: ActivityData[] = [
  { id: 1, userId: 1, date: "2021-10-25", value: 20, category: "appointments" },
  { id: 2, userId: 1, date: "2021-10-26", value: 45, category: "appointments" },
  { id: 3, userId: 1, date: "2021-10-27", value: 30, category: "appointments" },
  { id: 4, userId: 1, date: "2021-10-28", value: 60, category: "appointments" },
  { id: 5, userId: 1, date: "2021-10-29", value: 35, category: "appointments" },
  { id: 6, userId: 1, date: "2021-10-30", value: 50, category: "appointments" },
  { id: 7, userId: 1, date: "2021-10-31", value: 25, category: "appointments" },
];

import { 
  users, appointments, healthMetrics, activityData,
  type User, type InsertUser, 
  type Appointment, type InsertAppointment,
  type HealthMetric, type InsertHealthMetric,
  type ActivityData, type InsertActivityData
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Appointment methods
  getAppointments(userId: number): Promise<Appointment[]>;
  getAppointmentsByDate(userId: number, date: string): Promise<Appointment[]>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  
  // Health metrics methods
  getHealthMetrics(userId: number): Promise<HealthMetric[]>;
  createHealthMetric(metric: InsertHealthMetric): Promise<HealthMetric>;
  
  // Activity data methods
  getActivityData(userId: number): Promise<ActivityData[]>;
  createActivityData(data: InsertActivityData): Promise<ActivityData>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private appointments: Map<number, Appointment>;
  private healthMetrics: Map<number, HealthMetric>;
  private activityData: Map<number, ActivityData>;
  private currentUserId: number;
  private currentAppointmentId: number;
  private currentHealthMetricId: number;
  private currentActivityDataId: number;

  constructor() {
    this.users = new Map();
    this.appointments = new Map();
    this.healthMetrics = new Map();
    this.activityData = new Map();
    this.currentUserId = 1;
    this.currentAppointmentId = 1;
    this.currentHealthMetricId = 1;
    this.currentActivityDataId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Create sample user
    const sampleUser: User = {
      id: 1,
      username: "patient1",
      password: "password123",
      fullName: "John Doe",
      profileImage: null,
      createdAt: new Date(),
    };
    this.users.set(1, sampleUser);
    this.currentUserId = 2;

    // Sample appointments
    const sampleAppointments: Appointment[] = [
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
      {
        id: 3,
        userId: 1,
        doctorName: "Dr. Sarah Johnson",
        appointmentType: "Health checkup complete",
        appointmentDate: "2021-10-28",
        startTime: "11:00",
        endTime: "12:00",
        status: "completed",
        icon: "fa-check-circle",
        color: "#10B981",
      },
      {
        id: 4,
        userId: 1,
        doctorName: "Dr. Michael Brown",
        appointmentType: "Ophthalmologist",
        appointmentDate: "2021-10-28",
        startTime: "14:00",
        endTime: "15:00",
        status: "scheduled",
        icon: "fa-eye",
        color: "#F59E0B",
      },
      {
        id: 5,
        userId: 1,
        doctorName: "Dr. Emily Davis",
        appointmentType: "Cardiologist",
        appointmentDate: "2021-10-30",
        startTime: "12:00",
        endTime: "13:00",
        status: "scheduled",
        icon: "fa-heart",
        color: "#EF4444",
      },
      {
        id: 6,
        userId: 1,
        doctorName: "Dr. Robert Wilson",
        appointmentType: "Neurologist",
        appointmentDate: "2021-10-30",
        startTime: "16:00",
        endTime: "17:00",
        status: "scheduled",
        icon: "fa-brain",
        color: "#8B5CF6",
      },
    ];

    sampleAppointments.forEach(appointment => {
      this.appointments.set(appointment.id, appointment);
    });
    this.currentAppointmentId = 7;

    // Sample health metrics
    const sampleHealthMetrics: HealthMetric[] = [
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

    sampleHealthMetrics.forEach(metric => {
      this.healthMetrics.set(metric.id, metric);
    });
    this.currentHealthMetricId = 4;

    // Sample activity data
    const sampleActivityData: ActivityData[] = [
      { id: 1, userId: 1, date: "2021-10-25", value: 20, category: "appointments" },
      { id: 2, userId: 1, date: "2021-10-26", value: 45, category: "appointments" },
      { id: 3, userId: 1, date: "2021-10-27", value: 30, category: "appointments" },
      { id: 4, userId: 1, date: "2021-10-28", value: 60, category: "appointments" },
      { id: 5, userId: 1, date: "2021-10-29", value: 35, category: "appointments" },
      { id: 6, userId: 1, date: "2021-10-30", value: 50, category: "appointments" },
      { id: 7, userId: 1, date: "2021-10-31", value: 25, category: "appointments" },
    ];

    sampleActivityData.forEach(data => {
      this.activityData.set(data.id, data);
    });
    this.currentActivityDataId = 8;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }

  async getAppointments(userId: number): Promise<Appointment[]> {
    return Array.from(this.appointments.values()).filter(
      (appointment) => appointment.userId === userId,
    );
  }

  async getAppointmentsByDate(userId: number, date: string): Promise<Appointment[]> {
    return Array.from(this.appointments.values()).filter(
      (appointment) => appointment.userId === userId && appointment.appointmentDate === date,
    );
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.currentAppointmentId++;
    const appointment: Appointment = { ...insertAppointment, id };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async getHealthMetrics(userId: number): Promise<HealthMetric[]> {
    return Array.from(this.healthMetrics.values()).filter(
      (metric) => metric.userId === userId,
    );
  }

  async createHealthMetric(insertHealthMetric: InsertHealthMetric): Promise<HealthMetric> {
    const id = this.currentHealthMetricId++;
    const metric: HealthMetric = { ...insertHealthMetric, id };
    this.healthMetrics.set(id, metric);
    return metric;
  }

  async getActivityData(userId: number): Promise<ActivityData[]> {
    return Array.from(this.activityData.values()).filter(
      (data) => data.userId === userId,
    );
  }

  async createActivityData(insertActivityData: InsertActivityData): Promise<ActivityData> {
    const id = this.currentActivityDataId++;
    const data: ActivityData = { ...insertActivityData, id };
    this.activityData.set(id, data);
    return data;
  }
}

export const storage = new MemStorage();

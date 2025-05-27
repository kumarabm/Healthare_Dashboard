import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  Clock, 
  BarChart3, 
  MessageCircle, 
  HelpCircle, 
  Settings,
  Heart
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
  { icon: History, label: "History", href: "/history", active: false },
  { icon: Calendar, label: "Calendar", href: "/calendar", active: false },
  { icon: Clock, label: "Appointments", href: "/appointments", active: false },
  { icon: BarChart3, label: "Statistics", href: "/statistics", active: false },
];

const toolItems = [
  { icon: MessageCircle, label: "Chat", href: "/chat" },
  { icon: HelpCircle, label: "Support", href: "/support" },
];

export default function Sidebar() {
  return (
    <div className="h-full bg-white shadow-lg flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-2">
          {/* <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" />
          </div> */}
          <span className="text-xl font-bold text-slate-800">
            Healthcare<span className="text-cyan-500">.</span>
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-6">
        {/* General Section */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            General
          </p>
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg font-medium transition-colors",
                    item.active
                      ? "bg-blue-500 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Section */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Tools
          </p>
          <ul className="space-y-2">
            {toolItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Settings */}
      <div className="p-4 border-t border-slate-200">
        <a
          href="/settings"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span>Setting</span>
        </a>
      </div>
    </div>
  );
}
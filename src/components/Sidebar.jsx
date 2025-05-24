import React from "react";
import { navigationLinks } from "../data/navigation";
import * as Icons from "lucide-react";
import "../style/Sidebar.css";

const Sidebar = () => (
  <aside className="sidebar">
    <h3 className="sidebar-heading">General</h3>
    <ul>
      {navigationLinks.map((link) => {
        const Icon = Icons[link.icon];
        return (
          <li key={link.label}>
            <Icon size={18} />
            <span>{link.label}</span>
          </li>
        );
      })}
    </ul>
  </aside>
);

export default Sidebar;

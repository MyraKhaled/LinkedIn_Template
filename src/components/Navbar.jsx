import { Search, Grid3x3, ChevronDown } from "lucide-react";
import Avatar from "./Avatar.jsx";
import Icon from "./Icon.jsx";
import { navItems } from "../data/data.js";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">in</div>
        <label className="search">
          <Search size={20} />
          <input placeholder="Search" />
        </label>
        <nav className="nav">
          {navItems.map(({ id, label, icon, active, badge }) => (
            <a key={id} className={`nav-item ${active ? "active" : ""}`} href="#">
              <span className="icon-wrap">
                <Icon name={icon} size={24} fill={active ? "currentColor" : "none"} />
                {badge && <span className="badge">{badge}</span>}
              </span>
              <span>{label}</span>
            </a>
          ))}
          <a className="nav-item" href="#">
            <Avatar size={24} color="#6b7a8c" label="AK" />
            <span>Me <ChevronDown size={12} fill="currentColor" /></span>
          </a>
        </nav>
        <div className="nav-divider" />
        <a className="nav-item" href="#">
          <Grid3x3 size={24} />
          <span>For Business <ChevronDown size={12} fill="currentColor" /></span>
        </a>
        <a className="premium-link" href="#">
          <span className="premium-icon" />
          Try Premium for $0
        </a>
      </div>
    </header>
  );
}

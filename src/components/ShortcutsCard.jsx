import Icon from "./Icon.jsx";
import { shortcuts } from "../data/data.js";

export default function ShortcutsCard() {
  return (
    <section className="card pad links">
      {shortcuts.map(({ label, icon }) => (
        <a key={label} href="#"><Icon name={icon} size={18} fill="currentColor" /> {label}</a>
      ))}
    </section>
  );
}

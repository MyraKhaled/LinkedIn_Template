import { useState } from "react";
import { Plus, Check } from "lucide-react";
import Avatar from "./Avatar.jsx";
import { suggestions } from "../data/data.js";

export default function SuggestionsCard() {
  const [followed, setFollowed] = useState({});
  const toggle = (name) => setFollowed((f) => ({ ...f, [name]: !f[name] }));
  return (
    <section className="card pad">
      <h3 className="light">Add to your feed</h3>
      {suggestions.map((s) => (
        <div key={s.name} className="suggest">
          <Avatar size={48} color={s.color} label={s.name} square={s.square} />
          <div>
            <strong>{s.name}</strong>
            <div className="muted small">{s.info}</div>
            <button className="follow outline" onClick={() => toggle(s.name)}>
              {followed[s.name] ? <><Check size={18} /> Following</> : <><Plus size={18} /> Follow</>}
            </button>
          </div>
        </div>
      ))}
      <a className="link-btn" href="#">View all recommendations →</a>
    </section>
  );
}

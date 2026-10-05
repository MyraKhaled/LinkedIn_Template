import { useState } from "react";
import { ChevronRight, ChevronDown, ChevronUp, Puzzle } from "lucide-react";
import { puzzles } from "../data/data.js";

export default function PuzzlesCard() {
  const [all, setAll] = useState(false);
  const list = all ? puzzles : puzzles.slice(0, 4);
  return (
    <section className="card pad">
      <h3 className="light">Today's puzzles</h3>
      {list.map((p) => (
        <a key={p.name} href="#" className="puzzle">
          <span className="puzzle-icon" style={{ background: p.color }}><Puzzle size={22} color="#fff" /></span>
          <div className="grow">
            <strong>{p.name}</strong>
            <div className="muted small">{p.info}</div>
          </div>
          <ChevronRight size={22} />
        </a>
      ))}
      <button className="link-btn" onClick={() => setAll(!all)}>
        {all ? "Show less" : "Show more"} {all ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
    </section>
  );
}

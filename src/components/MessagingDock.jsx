import { useState } from "react";
import { MoreHorizontal, SquarePen, ChevronUp, ChevronDown } from "lucide-react";
import Avatar from "./Avatar.jsx";

export default function MessagingDock() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`dock ${open ? "open" : ""}`}>
      <div className="dock-head">
        <div className="dock-avatar"><Avatar size={40} color="#a1887f" label="AK" /><span className="online" /></div>
        <strong className="grow">Messaging</strong>
        <MoreHorizontal size={22} />
        <SquarePen size={20} />
        <button onClick={() => setOpen(!open)} aria-label="Toggle messaging">
          {open ? <ChevronDown size={22} /> : <ChevronUp size={22} />}
        </button>
      </div>
      {open && <div className="dock-body muted">No new messages</div>}
    </div>
  );
}

import { Plus, MoreHorizontal } from "lucide-react";
import Avatar from "./Avatar.jsx";

export default function PostHeader({ post }) {
  const a = post.author;
  const promoted = post.type === "promoted";
  return (
    <div className="post-head">
      <Avatar size={60} color={a.color} label={a.name} square={a.square} />
      <div className="post-author">
        <div>
          <strong className="name">{a.name}</strong>{" "}
          {a.premium && <span className="in-badge">in</span>}{" "}
          {a.degree && <span className="muted">• {a.degree}</span>}
        </div>
        {a.title && <div className="muted small">{a.title}</div>}
        {a.followers && <div className="muted small">{a.followers}</div>}
        <div className="muted small">{promoted ? "Promoted" : `${post.age} • 🌐`}</div>
      </div>
      {promoted ? <MoreHorizontal size={22} /> : <button className="follow"><Plus size={20} /> Follow</button>}
    </div>
  );
}

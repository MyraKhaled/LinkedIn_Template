import { useState } from "react";
import { ThumbsUp, MessageCircle, MoreHorizontal } from "lucide-react";
import Avatar from "./Avatar.jsx";

export default function Comment({ data }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="comment">
      <Avatar size={40} color={data.color} label={data.author} />
      <div className="comment-body">
        <div className="row-between">
          <div>
            <strong>{data.author}</strong> <span className="muted">• {data.degree}</span>
            <div className="muted small">{data.title}</div>
          </div>
          <div className="muted small row-gap">{data.age} <MoreHorizontal size={20} /></div>
        </div>
        <p className="comment-text">{data.text}</p>
        <div className="comment-actions">
          <button className={liked ? "on" : ""} onClick={() => setLiked(!liked)}>
            <ThumbsUp size={20} fill={liked ? "currentColor" : "none"} />
          </button>
          <button><MessageCircle size={20} /></button>
        </div>
        <p className="more-comments">See {data.more} more comments</p>
      </div>
    </div>
  );
}

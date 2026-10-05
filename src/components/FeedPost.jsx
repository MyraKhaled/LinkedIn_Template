import { useState } from "react";
import { X, MoreHorizontal, ThumbsUp, MessageCircle, Repeat2, Send } from "lucide-react";
import Avatar from "./Avatar.jsx";
import PostHeader from "./PostHeader.jsx";
import Comment from "./Comment.jsx";

export default function FeedPost({ post, onDismiss }) {
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const likes = post.likes + (liked ? 1 : 0);

  return (
    <article className="card post">
      <div className="post-banner">
        <Avatar size={30} color={post.commentedBy.color} label={post.commentedBy.name} />
        <span><strong>{post.commentedBy.name}</strong> commented</span>
        <div className="spacer" />
        <button><MoreHorizontal size={22} /></button>
        <button onClick={onDismiss} aria-label="Dismiss post"><X size={22} /></button>
      </div>

      <PostHeader post={post} />

      <div className="post-text">
        <p>{post.text[0]}</p>
        <p className="mt-lg">
          {post.preview}{" "}
          {expanded
            ? <span>Send your CV and a short message to apply.</span>
            : <button className="muted" onClick={() => setExpanded(true)}>more</button>}
        </p>
      </div>

      <div className="row-between stats">
        <span className="reactions"><span className="react-dot">👍</span> <u className="blue">{likes}</u></span>
        <span className="muted">{post.comments} comments</span>
      </div>

      <div className="post-actions">
        <button className={liked ? "on" : ""} onClick={() => setLiked(!liked)}>
          <ThumbsUp size={22} fill={liked ? "currentColor" : "none"} /> Like
        </button>
        <button><MessageCircle size={22} /> Comment</button>
        <button className="highlight"><Repeat2 size={22} /> Repost</button>
        <button><Send size={22} /> Send</button>
      </div>

      <Comment data={post.topComment} />
    </article>
  );
}

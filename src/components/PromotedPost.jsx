import { useState } from "react";
import PostHeader from "./PostHeader.jsx";

export default function PromotedPost({ post }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="card post promoted">
      <PostHeader post={post} />
      <p className="post-text">
        {post.preview}{" "}
        {expanded
          ? <span>Discover jobs, housing and relocation support in Canada's capital.</span>
          : <button className="muted" onClick={() => setExpanded(true)}>more</button>}
      </p>
    </article>
  );
}

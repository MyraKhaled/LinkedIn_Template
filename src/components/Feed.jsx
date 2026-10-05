import { useState } from "react";
import Composer from "./Composer.jsx";
import SortBar from "./SortBar.jsx";
import FeedPost from "./FeedPost.jsx";
import PromotedPost from "./PromotedPost.jsx";
import { posts as initialPosts } from "../data/data.js";

export default function Feed() {
  const [posts, setPosts] = useState(initialPosts);
  const dismiss = (id) => setPosts((p) => p.filter((x) => x.id !== id));

  return (
    <section className="col-center">
      <Composer onStart={() => {}} />
      <SortBar />
      {posts.map((post) =>
        post.type === "promoted"
          ? <PromotedPost key={post.id} post={post} />
          : <FeedPost key={post.id} post={post} onDismiss={() => dismiss(post.id)} />
      )}
    </section>
  );
}

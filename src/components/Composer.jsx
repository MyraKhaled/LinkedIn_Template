import { Video, Image, FileText } from "lucide-react";
import Avatar from "./Avatar.jsx";

export default function Composer({ onStart }) {
  return (
    <section className="card pad">
      <div className="start-row">
        <Avatar size={60} color="#a1887f" label="AK" />
        <button className="start-btn" onClick={onStart}>Start a post</button>
      </div>
      <div className="actions-row">
        <button><Video size={22} color="#2e7d32" fill="#2e7d32" /> Video</button>
        <button><Image size={22} color="#378fe9" /> Photo</button>
        <button><FileText size={22} color="#e06847" /> Write article</button>
      </div>
    </section>
  );
}

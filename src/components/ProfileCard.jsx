import Avatar from "./Avatar.jsx";
import { currentUser as u } from "../data/data.js";

export default function ProfileCard() {
  return (
    <section className="card profile-card">
      <div className="banner">
        <span>Talk is cheap.</span>
        <span>Show me the code.</span>
      </div>
      <div className="profile-avatar"><Avatar size={96} color="#a1887f" label="AK" /></div>
      <div className="profile-body">
        <h2>{u.name}</h2>
        <p>{u.headline}</p>
        <p className="muted">{u.location}</p>
        <div className="company">
          <Avatar size={28} color="#7e57c2" label="LI" square />
          <strong>{u.company}</strong>
        </div>
      </div>
    </section>
  );
}

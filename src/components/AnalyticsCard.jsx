import { currentUser } from "../data/data.js";

export default function AnalyticsCard() {
  return (
    <section className="card pad">
      <div className="row-between">
        <span>Profile viewers</span>
        <span className="blue">{currentUser.profileViewers}</span>
      </div>
      <p className="mt">View all analytics</p>
    </section>
  );
}

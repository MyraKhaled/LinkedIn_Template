import ProfileCard from "./ProfileCard.jsx";
import PremiumCard from "./PremiumCard.jsx";
import AnalyticsCard from "./AnalyticsCard.jsx";
import ShortcutsCard from "./ShortcutsCard.jsx";

export default function Sidebar() {
  return (
    <aside className="col-left">
      <ProfileCard />
      <PremiumCard />
      <AnalyticsCard />
      <ShortcutsCard />
    </aside>
  );
}

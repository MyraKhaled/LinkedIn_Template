import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";
import RightRail from "./components/RightRail.jsx";
import MessagingDock from "./components/MessagingDock.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="layout">
        <Sidebar />
        <Feed />
        <RightRail />
      </main>
      <MessagingDock />
    </>
  );
}

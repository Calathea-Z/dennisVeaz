import "./App.css";
import MainContent from "./components/MainContent";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className="h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;

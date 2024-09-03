import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Sidebar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { BrowserRouter as Router } from "react-router-dom";
import Work from "./components/Work";

function App() {
	return (
		<Router>
			<div className="h-screen flex bg-primary">
				<div className="hidden md:block md:w-[10%] fixed h-full">
					<Sidebar />
				</div>
				<div className="w-full md:w-[90%] ml-auto">
					<div className="md:hidden">
						<TopBar />
					</div>
					<main>
						<Hero />
						<About />
						<Work />
					</main>
				</div>
			</div>
		</Router>
	);
}

export default App;

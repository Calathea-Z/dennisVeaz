import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Sidebar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { BrowserRouter as Router } from "react-router-dom";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Youtube from "./components/Youtube";

function App() {
	return (
		<Router>
			<div className="h-screen flex bg-primary">
				<div className="hidden lg:block lg:w-[10%] fixed h-full">
					<Sidebar />
				</div>
				<div className="w-full lg:w-[90%] ml-auto">
					<div className="lg:hidden">
						<TopBar />
					</div>
					<main>
						<Hero />
						<About />
						<Work />
						<Youtube />
						<Contact />
					</main>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;

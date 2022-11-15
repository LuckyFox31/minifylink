// Layouts
import Header from "./Header";
import Footer from "./Footer";

// Components
import { Outlet } from "react-router-dom";

export default function Template(){
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
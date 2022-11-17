// Layouts
import Header from "./Header";
import Footer from "./Footer";

// Hooks
import { Outlet } from "react-router-dom";
import {useState} from "react";
import RegisterModal from "../Molecules/RegisterModal.jsx";
import {RegisterModalContext} from "../Contexts/RegisterModalContext";

export default function Template(){
	const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

	function toggleRegisterModal(){
		setRegisterModalIsOpen(!registerModalIsOpen);
	}

	return (
		<>
			<RegisterModalContext.Provider value={{registerModalIsOpen, toggleRegisterModal: toggleRegisterModal}}>
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
				{registerModalIsOpen ? <RegisterModal /> : null}
			</RegisterModalContext.Provider>
		</>
	)
}
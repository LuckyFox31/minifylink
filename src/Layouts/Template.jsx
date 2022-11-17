// Layouts
import Header from "./Header";
import Footer from "./Footer";

// Hooks
import { Outlet } from "react-router-dom";
import {useState} from "react";
import RegisterModal from "../Molecules/RegisterModal.jsx";
import {RegisterModalContext} from "../Contexts/RegisterModalContext";
import {LoginModalContext} from "../Contexts/LoginModalContext";
import LoginModal from "../Molecules/LoginModal";

export default function Template(){
	const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

	function toggleRegisterModal(){
		setRegisterModalIsOpen(!registerModalIsOpen);
	}

	function toggleLoginModal(){
		setLoginModalIsOpen(!loginModalIsOpen);
	}

	return (
		<>
			<LoginModalContext.Provider value={{toggleLoginModal: toggleLoginModal}}>
				<RegisterModalContext.Provider value={{toggleRegisterModal: toggleRegisterModal}}>
					<Header />
					<main>
						<Outlet />
					</main>
					<Footer />
					{registerModalIsOpen ? <RegisterModal /> : null}
					{loginModalIsOpen ? <LoginModal /> : null}
				</RegisterModalContext.Provider>
			</LoginModalContext.Provider>
		</>
	)
}
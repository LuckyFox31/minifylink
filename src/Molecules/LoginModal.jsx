import {Modal, ModalTitle} from "../Components/Modal";
import SignInWithAppleButton from "../Components/SignInWithAppleButton";
import SignInWithGoogleButton from "../Components/SignInWithGoogleButton";
import styled from "styled-components";
import {BREAKPOINTS} from "../Constants/Breakpoints.js";
import FormInput from "../Components/FormInput";
import Checkbox from "../Components/Checkbox";
import {Button} from "../Components/Button";
import {useContext} from "react";
import {RegisterModalContext} from "../Contexts/RegisterModalContext.jsx";
import {LoginModalContext} from "../Contexts/LoginModalContext.jsx";

export default function LoginModal(){
	const {toggleLoginModal} = useContext(LoginModalContext);

	return (
		<Modal onClose={toggleLoginModal}>
			<ModalTitle>Connexion</ModalTitle>
			<SignNetworkContainer>
				<SignInWithAppleButton />
				<SignInWithGoogleButton />
			</SignNetworkContainer>
			<LoginForm>
				<FormInput name="email" placeholder="Entrez votre adresse email" required={true}>Email</FormInput>
				<FormInput name="password" placeholder="Entrez votre mot de passe" required={true}>Mot de passe</FormInput>
				<SubmitButtonContainer>
					<Button type="submit" className="blue">Se connecter</Button>
				</SubmitButtonContainer>
			</LoginForm>
		</Modal>
	)
}

const SignNetworkContainer = styled.section`
	display: flex;
  	flex-direction: column;
  	flex-wrap: wrap;
  	align-items: center;
  	justify-content: space-between;
  	height: calc(2 * 2.5rem + 1rem);
  
  	@media screen and (min-width: ${BREAKPOINTS.tablet}){
	  	height: auto;
	  	flex-direction: row;
	}
`;

const LoginForm = styled.form`
	width: 100%;
  	margin-bottom: 2rem;
`;

const SubmitButtonContainer = styled.div`
	width: 100%;
  	display: flex;
  	justify-content: center;
  	margin-top: 2rem;
`;

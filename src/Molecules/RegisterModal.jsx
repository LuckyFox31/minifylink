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

export default function RegisterModal(){
	const {toggleRegisterModal} = useContext(RegisterModalContext);

	return (
		<Modal onClose={toggleRegisterModal}>
			<ModalTitle>Inscription</ModalTitle>
			<SignNetworkContainer>
				<SignInWithAppleButton />
				<SignInWithGoogleButton />
			</SignNetworkContainer>
			<RegisterForm>
				<FormInput name="email" placeholder="Entrez votre adresse email" required={true}>Email</FormInput>
				<FormInput name="password" placeholder="Entrez votre mot de passe" required={true}>Mot de passe</FormInput>
				<FormInput name="verification" placeholder="Confirmez votre mot de passe" required={true}>Confirmation du mot de passe</FormInput>
				<Checkbox name="accept" required={true}>J’accepte la <a href="#">politique de confidentialité</a> et les <a href="#">conditions générales d’utilisation</a></Checkbox>
				<SubmitButtonContainer>
					<Button type="submit" className="blue">S'inscrire</Button>
				</SubmitButtonContainer>
			</RegisterForm>
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

const RegisterForm = styled.form`
	width: 100%;
  	margin-bottom: 2rem;
`;

const SubmitButtonContainer = styled.div`
	width: 100%;
  	display: flex;
  	justify-content: center;
  	margin-top: 2rem;
`;

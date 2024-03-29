// Hooks
import {useFormik} from "formik";
import {useContext, useState} from "react";
// Components
import {Modal, ModalTitle} from "../Components/Modal";
import SignInWithAppleButton from "../Components/SignInWithAppleButton";
import SignInWithGoogleButton from "../Components/SignInWithGoogleButton";
import FormInput from "../Components/FormInput";
import Checkbox from "../Components/Checkbox";
import {Button} from "../Components/Button";
import {FormErrorMessage} from "../Components/FormErrorMessage";
import styled from "styled-components";
// Constants
import {BREAKPOINTS} from "../Constants/Breakpoints.js";
import {ERROR_CODE} from "../Constants/ErrorCode.js";
// Contexts
import {RegisterModalContext} from "../Contexts/RegisterModalContext.jsx";
import {UserContext} from "../Contexts/UserContext.jsx";
// Firebase
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../Firebase/FirebaseConfig.js";
// Schemes
import {RegisterInitialValues, RegisterScheme} from "../Schemes/RegisterScheme.js";

export default function RegisterModal(){
	const {toggleRegisterModal} = useContext(RegisterModalContext);
	const {setUser} = useContext(UserContext);
	const [error, setError] = useState(null);

	const formik = useFormik({
		initialValues: RegisterInitialValues,
		validationSchema: RegisterScheme,
		onSubmit: values => {
			createUserWithEmailAndPassword(auth, values.email, values.password)
				.then(userCredential => {
					const user = userCredential.user;
					setUser(user);
					setError(null);
					toggleRegisterModal();
				})
				.catch(error => {
					const errorCode = error.code;
					if(errorCode === ERROR_CODE.EMAIL_ALREADY_USED){
						setError('Adresse email déjà utilisée');
					} else {
						setError('Une erreur est survenue lors de l\'inscription, veuillez réessayer plus tard...')
					}
				})
		}
	});

	return (
		<Modal onClose={toggleRegisterModal}>
			<ModalTitle>Inscription</ModalTitle>
			<SignNetworkContainer>
				<SignInWithAppleButton />
				<SignInWithGoogleButton />
			</SignNetworkContainer>
			<RegisterForm onSubmit={formik.handleSubmit}>
				<FormInput type="email" name="email" placeholder="Entrez votre adresse email" required={true} onChange={formik.handleChange} value={formik.values.email} error={formik.touched && formik.errors.email}>Email</FormInput>
				<FormInput type="password" name="password" placeholder="Entrez votre mot de passe" required={true} onChange={formik.handleChange} value={formik.values.password} error={formik.touched && formik.errors.password}>Mot de passe</FormInput>
				<FormInput type="password" name="verification" placeholder="Confirmez votre mot de passe" required={true} onChange={formik.handleChange} value={formik.values.verification} error={formik.touched && formik.errors.verification}>Confirmation du mot de passe</FormInput>
				<Checkbox name="accept" required={true} onChange={formik.handleChange} value={formik.values.accept} error={formik.touched && formik.errors.accept}>J’accepte la <a href="#">politique de confidentialité</a> et les <a href="#">conditions générales d’utilisation</a></Checkbox>
				{error && <FormErrorMessage className="center">{error}</FormErrorMessage>}
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

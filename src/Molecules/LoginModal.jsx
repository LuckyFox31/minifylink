// Hooks
import {useContext, useState} from "react";
import {useFormik} from "formik";
// Components
import {Modal, ModalTitle} from "../Components/Modal";
import SignInWithAppleButton from "../Components/SignInWithAppleButton";
import SignInWithGoogleButton from "../Components/SignInWithGoogleButton";
import FormInput from "../Components/FormInput";
import {FormErrorMessage} from "../Components/FormErrorMessage.jsx";
import {Button} from "../Components/Button";
import styled from "styled-components";
// Constants
import {ERROR_CODE} from "../Constants/ErrorCode.js";
import {BREAKPOINTS} from "../Constants/Breakpoints.js";
// Contexts
import {LoginModalContext} from "../Contexts/LoginModalContext.jsx";
import {UserContext} from "../Contexts/UserContext.jsx";
// Firebase
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../Firebase/FirebaseConfig.js";
// Schemes
import {LoginInitialValues, LoginScheme} from "../Schemes/LoginScheme.js";

export default function LoginModal(){
	const {toggleLoginModal} = useContext(LoginModalContext);
	const {setUser} = useContext(UserContext);
	const [error, setError] = useState(null);

	const formik = useFormik({
		initialValues: LoginInitialValues,
		validationSchema: LoginScheme,
		onSubmit: values => {
			signInWithEmailAndPassword(auth, values.email, values.password)
				.then(userCredential => {
					const user = userCredential.user;
					setUser(user);
					setError(null);
					toggleLoginModal();
				})
				.catch(error => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.error(`${errorMessage} - Code : ${errorCode}`);
					if(errorCode === ERROR_CODE.USER_NOT_FOUND){
						setError('Adresse email ou mot de passe incorrect');
					} else {
						setError('Une erreur est survenue lors de la connexion, veuillez réessayer plus tard...')
					}
				})
		}
	});

	return (
		<Modal onClose={toggleLoginModal}>
			<ModalTitle>Connexion</ModalTitle>
			<SignNetworkContainer>
				<SignInWithAppleButton />
				<SignInWithGoogleButton />
			</SignNetworkContainer>
			<LoginForm onSubmit={formik.handleSubmit}>
				<FormInput type="email" name="email" placeholder="Entrez votre adresse email" required={true} onChange={formik.handleChange} value={formik.values.email} error={formik.touched && formik.errors.email}>Email</FormInput>
				<FormInput type="password" name="password" placeholder="Entrez votre mot de passe" required={true} onChange={formik.handleChange} value={formik.values.password} error={formik.touched && formik.errors.password}>Mot de passe</FormInput>
				{error && <FormErrorMessage className="center">{error}</FormErrorMessage>}
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

import * as Yup from 'yup';

export const LoginScheme = Yup.object().shape({
	email: Yup.string()
		.email('L\'email que vous avez saisi est invalide')
		.required('Veuillez renseigner votre email'),
	password: Yup.string()
		.required('Veuillez renseigner votre mot de passe'),
});

export const LoginInitialValues = {
	email: '',
	password: '',
}
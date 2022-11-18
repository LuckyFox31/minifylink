import * as Yup from 'yup';

export const RegisterScheme = Yup.object().shape({
	email: Yup.string()
		.email('L\'email que vous avez saisi est invalide')
		.required('Veuillez renseigner un email valide'),
	password: Yup.string()
		.min(8, 'Le mot de passe doit contenir au moins 8 caractères')
		.max(40, 'Le mot de passe ne peux pas contenir plus de 40 caractères')
		.required('Veuillez renseigner un mot de passe valide'),
	verification: Yup.string()
		.oneOf(
			[Yup.ref('password'), null],
			'La verification ne correspond pas au premier mot de passe saisi'
		)
		.required('La confirmation du mot de passe est obligatoire'),
	accept: Yup.bool()
		.oneOf(
			[true],
			'Veuillez devez accepter la politique de confidentialité et les conditions générales d\'utilisation pour continuer'
		)
});

export const RegisterInitialValues = {
	email: '',
	password: '',
	verification: '',
	accept: false,
}
import * as Yup from 'yup';

export const UrlScheme = Yup.object().shape({
	url: Yup.string()
		.url('L\'url que vous avez saisi est incorrect')
		.required('Veuillez saisir une url valide'),
});

export const UrlInitialValues = {
	url: ''
}
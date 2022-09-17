import * as yup from 'yup'

export const RegistShema = yup.object({
	login: yup.string().required('Логин обязателен'),
	email: yup.string().email('Неверная почта').required('Почта обязательная'),
	password: yup.string().min(6, 'Пароль не менее 6 символов').required('Пароль обязательный'),
	confirmPassword: yup.string().min(6, 'Пароль не менее 6 символов').required('Пароль обязательный')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
})

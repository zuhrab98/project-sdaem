import * as yup from "yup";

export const LoginShema = yup.object({
  login: yup.string().min(6, 'Логин не менее 4 символов').required('Логин обязателен'),
  password: yup.string().min(6, 'Пароль не менее 6 символов').required('Пароль обязательный'),
});
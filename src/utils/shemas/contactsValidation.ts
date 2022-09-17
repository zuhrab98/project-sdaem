import * as yup from "yup";

export const ContactsShema = yup.object({
  name: yup.string().required('Имя обязательное'),
  email: yup.string().email('Неверная почта').required('Почта обязательная'),
  message: yup.string().min(5, 'не менее 5 символов').max(100, 'не более 100 символов').required('Сообщение обязательное'),
});
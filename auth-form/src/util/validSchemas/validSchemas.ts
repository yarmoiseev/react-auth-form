import * as yup from "yup";

export const requiredMessage = "Обязательное поле";

export const email = {
  email: yup
    .string()
    .required(requiredMessage)
    .email("Введите действительный e-mail адрес"),
};

export const pass = {
  password: yup
    .string()
    .required(requiredMessage)
    .min(6, "Минимальная длина 6 символов"),
};

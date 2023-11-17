"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "@/util/validSchemas/authSchema";
import sendForm from "@/util/sendForm.js";
import UniversalInput from "@/components/UniversalInput";
import FormBody from "@/components/FormBody";
import SubmitButton from "@/components/UniversalButton";
import { useEffect } from "react";
import { colors, fonts } from "@/styles/cssVariables";

export default function ConsultForm() {
  const {
    register,
    reset,
    trigger,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: {}) => {
    sendForm(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <FormBody handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <div className="form">
        <div className="form__cta cta">
          <h3 className="cta__text">Авторизация</h3>
        </div>
        <div className="form__content">
          <div className="form__group">
            <UniversalInput
              name="email"
              register={register}
              trigger={trigger}
              errors={errors}
              disableLabel={true}
              placeholder="Email адрес"
            ></UniversalInput>
            <UniversalInput
              name="password"
              register={register}
              trigger={trigger}
              errors={errors}
              disableLabel={true}
              placeholder="Пароль"
            ></UniversalInput>
            <SubmitButton height="50px" width="100%">
              Войти
            </SubmitButton>
            <div className="form__links">
              <a href="">Забыли пароль?</a>
              <span className="form__links-divider">|</span>
              <a href="">Регистрация</a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .form {
          width: 320px;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0px 3px 20px 0px rgba(50, 50, 50, 0.2);
        }
        .form__content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 36px 15px 36px 15px;
          background-color: ${colors.lightest};
          height: 100%;
        }
        .cta {
          background-color: ${colors.heavyBackground};
          padding: 13px 35px;
        }
        .cta__text {
          color: ${colors.lightest};
          font-size: ${fonts.headlineSize};
          font-weight: ${fonts.bold};
          text-align: center;
          position: relative;
        }
        .form__group {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .form__links {
          display: flex;
          justify-content: center;
          opacity: 0.8;
          font-size: 13px;
          line-height: 15px;
          font-weight: 400;
          color: ${colors.heavyBackground};
        }
        .form__links a {
          color: inherit;
          flex: 0 0 105px;
        }
        .form__links-divider {
          margin: 0 15px;
        }
        @media (min-width: 769px) {
          .form {
            width: 370px;
          }
          .form__content {
            padding: 35px;
          }
          .cta {
            padding: 20.5px 35px;
          }
        }
      `}</style>
    </FormBody>
  );
}

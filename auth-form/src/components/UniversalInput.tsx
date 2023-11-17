import InputErrorMsg from "@/components/InputErrorMsg";
import { colors, fonts } from "@/styles/cssVariables";
import {
  UseFormRegister,
  FieldValues,
  UseFormTrigger,
  FieldErrors,
} from "react-hook-form";

interface UniversalInputProps {
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  trigger: UseFormTrigger<any>;
  errors: FieldErrors<FieldValues>;
  disableLabel?: boolean;
}

const UniversalInput: React.FC<UniversalInputProps> = (props) => {
  type ErrorObjectKey = keyof typeof props.errors;
  const errKey = props.name as ErrorObjectKey;

  const iconFolder = "/img/icons/";
  let svgIcon;
  switch (props.name) {
    case "email":
      svgIcon = "mail.svg";
      break;
    case "password":
      svgIcon = "pass.svg";
      break;
    default:
      svgIcon = "arrow.svg";
      break;
  }

  return (
    <div>
      <label
        htmlFor={props.name}
        className={`universal-label ${props.disableLabel && "hidden-label"}`}
      >
        <span>*&nbsp;</span>
        {props.name}:
      </label>
      <div className="universal-input">
        <div className="universal-input__ico">
          <i className="icon"></i>
        </div>
        <div className="universal-input__inp">
          <input
            className="universal-input__inp-field"
            id={props.name}
            type="text"
            placeholder={props.placeholder}
            {...props.register(props.name, {
              onBlur: () => {
                props.trigger(props.name);
              },
            })}
          />
        </div>
      </div>
      <div className="err-wrap">
        {props.errors[errKey] && (
          <InputErrorMsg>
            {(props.errors[errKey] as any)?.message}
          </InputErrorMsg>
        )}
      </div>
      <style jsx>{`
        .universal-label {
          text-align: left;
        }
        .universal-label span {
          color: red;
        }
        .universal-input {
          box-sizing: border-box;
          display: block;
          display: flex;
          align-items: center;
          font-size: ${fonts.secondHeadlineSize};
          line-height: ${fonts.secondHeadlineHeight};
          border: 1px solid #f4f4f4;
          border-radius: 25px;
          width: 100%;
          height: 50px;
          background: ${colors.inputBgr};
        }
        .universal-input .universal-input__inp {
          flex: 0 1 750px;
        }
        .universal-input__inp-field {
          width: 96%;
          height: 50px;
          color: ${colors.heavyBackground};
          font-size: 18px;
        }
        .err-wrap {
          height: 24px;
          display: flex;
        }
        .universal-input__ico {
          min-width: 77px;
        }
        .icon {
          display: block;
          background-repeat: no-repeat;
          background-size: contain;
          margin-left: 17px;
          width: 24px;
          height: 24px;
          background-image: url(${iconFolder}${svgIcon});
          position: relative;
        }
        .icon::after {
          content: "";
          background-color: #d9dada;
          width: 1px;
          height: 25px;
          display: inline-block;
          position: absolute;
          top: 55%;
          left: 42px;
          margin-top: calc(-12.5px);
        }
        .universal-input_s .universal-input__inp {
          flex: 0 1 190px;
        }
        .hidden-label {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
      `}</style>
    </div>
  );
};

export default UniversalInput;

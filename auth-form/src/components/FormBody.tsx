import { UseFormHandleSubmit } from "react-hook-form";
import { ReactNode } from "react";

interface FormBodyProps {
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: {}) => Promise<void>;
  children: ReactNode;
}

const FormBody: React.FC<FormBodyProps> = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)} className="form-body">
      {props.children}
      <style jsx>{`
        .form-body {
          max-width: 870px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>
    </form>
  );
};

export default FormBody;

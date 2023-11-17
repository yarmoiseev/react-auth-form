import React from "react";

type Props = {
  children: string;
};

const InputErrorMsg = (props: Props) => {
  return (
    <p className="error">
      {props.children}
      <style jsx>{`
        .error {
          margin: 2px;
          font-size: 14px;
          color: red;
          line-height: 20px;
        }
      `}</style>
    </p>
  );
};

export default InputErrorMsg;

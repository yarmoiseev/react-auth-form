import React, { FC } from "react";
import Link from "next/link";
import { colors } from "@/styles/cssVariables";

interface RedButtonProps {
  width?: string;
  height: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  mobWidth?: string;
  mobHeight?: string;
  disabled?: boolean;
  fSize?: string;
  bwVariant?: boolean;
}

const RedButton: FC<RedButtonProps> = ({
  width,
  height,
  children,
  onClick,
  href,
  mobWidth,
  mobHeight,
  disabled,
  fSize,
  bwVariant,
}) => {
  const calculateFontSize = () => {
    const pixelHeight = parseInt(height);

    if (fSize) {
      return fSize;
    } else if (pixelHeight > 39) {
      return "18px";
    }
    return "16px";
  };

  const buttonCore = (
    <>
      <button
        className={`red-button  ${disabled && "disabled"} ${
          bwVariant && "black-white"
        }`}
        onClick={onClick}
        disabled={disabled}
        style={{
          width: mobWidth || width,
          height: mobHeight || height,
          fontSize: calculateFontSize(),
        }}
      >
        {children}
      </button>
      <style jsx>{`
        .red-button {
          background-image: linear-gradient(
            0deg,
            ${colors.mainAccent} 0%,
            ${colors.mainAccentLightShift} 100%
          );
          box-shadow: 0px 5px 20px 0px ${colors.mainAccentTrans};
          border-radius: 25px;
          color: ${colors.lightest};
          font-weight: 600;
          line-height: 22px;
          border: none;
        }
        .disabled {
          background-image: linear-gradient(180deg, grey, grey);
          box-shadow: none;
        }
        .black-white {
          color: #282f39;
          border: 1px solid #282f39;
          background: #fff;
          box-shadow: none;
        }

        @media (min-width: 769px) {
          .red-button:hover {
            cursor: pointer;
            background-image: linear-gradient(
              180deg,
              ${colors.buttonHover},
              ${colors.buttonHover}
            );
            box-shadow: none;
          }
          .disabled:hover {
            cursor: not-allowed;
            background-image: linear-gradient(180deg, grey, grey);
          }
          .black-white:hover {
            color: ${colors.lightest};
          }
        }
      `}</style>
    </>
  );

  return <>{href ? <Link href={href}>{buttonCore}</Link> : buttonCore}</>;
};

export default RedButton;

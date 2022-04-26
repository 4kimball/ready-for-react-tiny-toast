import React, { FC } from "react";

interface Props {
  children?: any;
}

const ToastProvider: FC<Props> = ({ children }) => {
  return (
    <div
      className="toast-provider"
      style={{
        position: "fixed",
        boxSizing: "border-box",
        zIndex: 9999,
        padding: 4,
      }}
    >
      {children}
    </div>
  );
};

export default ToastProvider;

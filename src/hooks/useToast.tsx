import React from "react";
import { render } from "react-dom";

import Toast from "src/components/Toast";

const useToast = () => {
  const toast = () => {
    const provider = document.querySelector(".toast-provider");
    if (provider) {
      render(<Toast />, provider);
    }
  };

  return toast;
};

export default useToast;

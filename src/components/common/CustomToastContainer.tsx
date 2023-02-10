import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

const CustomToastContainer = () => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={1500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default CustomToastContainer;

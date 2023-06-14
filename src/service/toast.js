import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

//Toast
export const Toast = ({ type = "success", message = "", time = "4000" }) => {
  if (Array.isArray(message)) {
    let item;

    for (item of message) {
      toast[type](item.message, "", time);
    }
  } else {
    toast[type](message, "", time);
  }
};

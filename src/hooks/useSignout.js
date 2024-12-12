import { toast } from "react-toastify";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

export const useSignout = () => {
  const userSignout = () => {
    signOut(auth)
      .then(() => {
        toast.success("see you soon :) ");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened
        toast.error(error.message);
      });
  };
  return { userSignout };
};

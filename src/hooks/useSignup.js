import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

//  GLOBAL CONSTEXT
import { useGlobalContext } from "./useGlobalContext";

export const useSignup = () => {
  const { dispatch } = useGlobalContext();
  const signUpWhithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
      })

      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return { signUpWhithGoogle };
};

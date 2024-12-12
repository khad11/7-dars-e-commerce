import { useSignup } from "../hooks/useSignup";

function Login() {
  const { signUpWhithGoogle } = useSignup();
  return (
    <div className="h-screen grid place-items-center">
      <button onClick={signUpWhithGoogle} className="btn btn-primary">
        google
      </button>
    </div>
  );
}

export default Login;

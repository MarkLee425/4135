import React from "react";
import Button from "../buttons/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  /* signIn("google") */
  return (
    <div>
      <Button
        type="button"
        txt="Login"
        icon="/login.svg"
        variant="btn_dark_green ml-3"
        onClick={() => router.push('/login')}
      ></Button>
    </div>
  );
};

export default Login;

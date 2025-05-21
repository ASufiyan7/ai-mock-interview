import { SignUp } from "@clerk/clerk-react";

export const SignUpPage = () => {
  return (
    <SignUp
      routing="path"
      path="/signup"
      signInUrl="/signin"
      fallbackRedirectUrl="/home"
      forceRedirectUrl="/home"
    />
  );
};
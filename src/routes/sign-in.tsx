import { SignIn } from "@clerk/clerk-react";

export const SignInPage = () => {
  return (
    <SignIn
      routing="path"
      path="/signin"
      signUpUrl="/signup"
      fallbackRedirectUrl="/home"
      forceRedirectUrl="/home"
    />
  );
};
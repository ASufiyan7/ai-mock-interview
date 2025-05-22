import { SignIn } from "@clerk/clerk-react";

export const SignInPage = () => {
  return (
    <SignIn
      routing="path"
      path="/signin" // This path corresponds to the <Route path="/signin/*"> in App.tsx
      signUpUrl="/signup"
      fallbackRedirectUrl="/dashboard" // Redirect to dashboard after sign-in
      forceRedirectUrl="/dashboard"   // Force redirect to dashboard after sign-in
    />
  );
};
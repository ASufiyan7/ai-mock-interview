import { SignUp } from "@clerk/clerk-react";

export const SignUpPage = () => {
  return (
    <SignUp
      routing="path"
      path="/signup" // This path corresponds to the <Route path="/signup/*"> in App.tsx
      signInUrl="/signin"
      fallbackRedirectUrl="/dashboard" // Redirect to dashboard after sign-up
      forceRedirectUrl="/dashboard"   // Force redirect to dashboard after sign-up
    />
  );
};
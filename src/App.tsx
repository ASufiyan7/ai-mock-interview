import { Routes, Route, Navigate } from "react-router-dom";
import AuthenticationLayout from "@/layouts/auth-layout";
import { SignIn } from "@clerk/clerk-react";
import { SignUp } from "@clerk/clerk-react";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />

      <Route element={<AuthenticationLayout />}>
        <Route
          path="signin"
          element={<SignIn routing="path" path="/signin" signUpUrl="/signup" />}
        />
        <Route
          path="signup"
          element={<SignUp routing="path" path="/signup" signInUrl="/signin" />}
        />
      </Route>

      {/* ...public & protected routes... */}

      <Route path="*" element={<Navigate to="/signin" replace />} />
    </Routes>
  );
}

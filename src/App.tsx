import { Routes, Route, Navigate } from "react-router-dom";
import AuthenticationLayout from "./layouts/auth-layout";
import { SignInPage } from "./routes/sign-in";
import { SignUpPage } from "./routes/sign-up";
import { PublicLayout } from "./layouts/public-layout";
import HomePage from "./routes/home";

export default function App() {
  return (
    <Routes>
      {/* 1) Redirect root → /signin */}
      <Route path="/" element={<Navigate to="/signin" replace />} />

      {/* 2) Authentication flows */}
      <Route element={<AuthenticationLayout />}>
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Route>

      {/* 3) Post-login landing */}
      <Route element={<PublicLayout />}>
        <Route path="home" element={<HomePage />} />
      </Route>

      {/* 4) Catch-all back to sign-in */}
      <Route path="*" element={<Navigate to="/signin" replace />} />
    </Routes>
  );
}

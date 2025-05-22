import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/public-layout";
import AuthenticationLayout from "@/layouts/auth-layout";
import ProtectRoutes from "./layouts/protected-routes";
import { MainLayout } from "./layouts/main-layout";

import Home from "@/routes/home"; // Corrected import for HomePage
import { SignInPage } from "./routes/sign-in";
import { SignUpPage } from "./routes/sign-up";
// import { Generate } from "./components/generate";
// import { Dashboard } from "./routes/dashboard";
// import { CreateEditPage } from "./routes/create-edit-page";
// import { MockLoadPage } from "./routes/mock-load-page";
// import { MockInterviewPage } from "./routes/mock-interview-page";
// import { Feedback } from "./routes/feedback";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes (accessible to everyone) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} /> {/* Changed index to path="/" for clarity */}
        </Route>

        {/* Authentication routes (for sign-in/sign-up) */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* Protected routes (only accessible to authenticated users) */}
        <Route
          element={
            <ProtectRoutes>
              <MainLayout />
            </ProtectRoutes>
          }
        >
          {/* Add all the protect routes */}
          {/* Example: */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/generate/*" element={<Generate />}>
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route> */}
        </Route>

        {/* Fallback route for unmatched paths - optional, but good practice */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
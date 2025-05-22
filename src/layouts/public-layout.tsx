import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AuthHandler from "@/handlers/auth-handlers";
// import { useAuth } from "@clerk/clerk-react"; // No longer needed here
// import { Navigate } from "react-router-dom"; // No longer needed here

export function PublicLayout() {
  // const { isSignedIn } = useAuth(); // Removed
  // if (isSignedIn) return <Navigate to="/dashboard" replace />; // Example: If you want to redirect signed-in users from public page

  return (
    <div className="min-h-screen flex flex-col">
      <AuthHandler />
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}
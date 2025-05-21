import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export function PublicLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) return <Navigate to="/signin" />;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
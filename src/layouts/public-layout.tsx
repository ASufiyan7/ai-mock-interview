import Header from "@/components/header";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

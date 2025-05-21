import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import {Container} from "@/components/container";
import Footer from "@/components/footer";

export function PublicLayout() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
        <Container className="flex-grow">
          <main className="flex-grow">
          <Outlet />
          </main>
        </Container>
      <Footer />
    </div>
  );
}
import { useAuth } from "@clerk/clerk-react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import LogoContainer from "./logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";
import { Sparkles } from "lucide-react";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header className={cn("w-full bg-gradient-to-r from-purple-700 to-purple-300")}>
      <Container>
        <div className="flex items-center gap-4 w-full py-3">
          {/* Logo section */}
          <div className="flex items-center gap-2">
            <LogoContainer />
            <span className="text-lg font-semibold bg-gradient-to-r from-purple-900 to-pink-700 bg-clip-text text-transparent">
              AI Mock Interview
            </span>
          </div>

          {/* Navigation section */}
          <nav className="hidden md:flex items-center gap-6 ml-4">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-1 px-3 py-1 rounded-md text-purple-800 hover:bg-purple-100 transition-colors",
                    isActive && "bg-purple-100 font-medium"
                  )
                }
              >
                <Sparkles className="w-4 h-4 text-purple-900" />
                Take an Interview
              </NavLink>
            )}
          </nav>

          {/* Right section */}
          <div className="ml-auto flex items-center gap-4">
            <ProfileContainer />
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
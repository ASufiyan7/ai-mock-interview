import { Link } from "react-router";

const LogoContainer = () => {
  return (
    <Link to="/">
      <img
        src="/assets/svg/logo.svg"
        alt="Logo"
        className="w-11 h-11 object-contain"
      />
    </Link>
  );
};

export default LogoContainer;

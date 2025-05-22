// src/pages/Home.tsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Welcome to AI Mock Interview</h1>
      <div className="mt-4">
        <Link to="/signin" className="mr-4">
          Sign In
        </Link>
        <Link to="/signup">Sign Up</Link> 
      </div>
    </div>
  );
}
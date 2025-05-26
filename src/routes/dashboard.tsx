import { Headings } from "@/components/headings";
import { InterviewPin } from "@/components/pin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "../config/firebase.config";
import type { Interview } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Plus, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export const Dashboard = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    setLoading(true);
    const interviewQuery = query(
      collection(db, "interviews"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(
      interviewQuery,
      (snapshot) => {
        const interviewList: Interview[] = snapshot.docs.map((doc) => {
          const id = doc.id;
          return {
            id,
            ...doc.data(),
          };
        }) as Interview[];
        setInterviews(interviewList);
        setLoading(false);
      },
      (error) => {
        console.log("Error on fetching : ", error);
        toast.error("Error..", {
          description: "Something went wrong.. Try again later..",
        });
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <Headings
          title="Interview Sessions"
          description="Create and manage your AI mock interviews"
        />
        <Link to={"/generate/create"}>
          <Button className="h-10 px-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg transition-all">
            <Sparkles className="w-4 h-4 mr-2" />
            New Session
          </Button>
        </Link>
      </div>

      <Separator className="bg-purple-100" />

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton 
              key={index} 
              className="h-32 rounded-xl bg-purple-50/50" 
            />
          ))
        ) : interviews.length > 0 ? (
          interviews.map((interview) => (
            <InterviewPin 
              key={interview.id} 
              interview={interview}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center space-y-6 py-16">
            <img
              src="/assets/svg/not-found.svg"
              className="w-48 h-48 object-contain opacity-75"
              alt="No interviews found"
            />
            <div className="space-y-2 text-center">
              <h2 className="text-xl font-semibold text-purple-900">
                No Sessions Found
              </h2>
              <p className="text-purple-600 max-w-md mx-auto">
                Start your journey by creating a new mock interview session
              </p>
            </div>
            <Link to={"/generate/create"}>
              <Button className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-8">
                <Plus className="w-4 h-4 mr-2" />
                Create Session
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
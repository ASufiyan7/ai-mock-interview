import { Sparkles, ArrowRight, Zap, BarChart, Users } from "lucide-react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MarqueImg } from "@/components/marquee-img";

const HomePage = () => {

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          <img
            src="/assets/img/bg.jpg"
            alt="AI Interview Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-purple-400/30" />
        </div>

        <div className="relative h-full flex items-center z-10 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-white space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                AI-Powered Interview
              </span>
              <br />
              <span className="text-4xl md:text-6xl font-semibold text-purple-50">
                Mastery Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100 max-w-2xl">
              Transform your interview skills with AI-driven analysis, personalized feedback, and dynamic practice scenarios.
            </p>

            <div className="flex gap-6 mt-12">
              <motion.div whileHover={{ scale: 1.05 }} className="flex gap-6">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                  <p className="text-3xl font-bold text-purple-50">250K+</p>
                  <p className="text-purple-200 flex items-center gap-2">
                    <Users className="w-5 h-5" /> Offers Secured
                  </p>
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                  <p className="text-3xl font-bold text-purple-50">1.2M+</p>
                  <p className="text-purple-200 flex items-center gap-2">
                    <BarChart className="w-5 h-5" /> Interviews Aced
                  </p>
                </div>
              </motion.div>
            </div>

            <Link to="/generate">
              <Button className="h-16 px-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-2xl font-bold space-x-4 shadow-xl">
                <Zap className="w-7 h-7" />
                <span>Start Free Trial</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* AI Coach Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 shadow-inner">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="/assets/img/hero.jpg"
                alt="AI Coach Interface"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-purple-900">AI Interview Coach</p>
                  <p className="text-sm text-purple-600">Available 24/7</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-purple-900">
                Personalized AI Interview Preparation
              </h2>
              <p className="text-xl text-purple-700 leading-relaxed">
                Experience smart mock interviews tailored to your target role. Get instant feedback on communication 
                skills, confidence levels, and technical knowledge powered by advanced AI analysis.
              </p>
              <Link to="/demo">
                <Button className="h-14 px-8 rounded-full bg-purple-600 hover:bg-purple-700 text-lg font-bold text-white shadow-lg">
                  Try Live Demo <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* marquee section */}
      <div className=" w-full my-12">
        <Marquee >
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      {/* Elevate Section */}
      <div className="py-24 bg-gradient-to-br from-purple-100 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Intelligent Practice Environment
              </h2>
              <p className="text-xl text-purple-700 leading-relaxed">
                Revolutionize your preparation with adaptive scenarios that mirror real-world interviews. 
                Our platform learns your unique style to provide targeted improvements and confidence-building exercises.
              </p>
              <div className="flex gap-4">
                <Link to="/features">
                  <Button className="h-14 px-8 rounded-full bg-purple-600 hover:bg-purple-700 text-lg font-bold text-white shadow-lg">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-100"
            >
              <img
                src="/assets/img/office.jpg"
                alt="AI Analytics Dashboard"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
                <p className="text-sm font-semibold text-purple-600">Live Progress Tracking</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
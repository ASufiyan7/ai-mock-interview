import { Sparkles, ArrowRight } from "lucide-react"; // Added ArrowRight for a more dynamic button
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion"; // For subtle animations

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

const HomePage = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2, delay: 0.6 } },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col w-full pb-24 overflow-hidden bg-gradient-to-br from-white to-blue-50">
      <Container className="py-12 md:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="my-8 text-center md:text-left"
        >
          <h2 className="text-4xl leading-tight font-extrabold text-gray-900 md:text-7xl lg:text-8xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              AI Superpower
            </span>
            <span className="block mt-2 text-gray-600 md:inline">
              <span className="hidden md:inline"> - </span>A smarter way to
            </span>
            <br />
            <span className="text-gray-800">
              dominate your interviews and master new skills
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto md:mx-0">
            Unleash your full potential. Our cutting-edge AI-driven platform offers personalized insights and dynamic practice sessions to elevate your interview performance and career trajectory. Prepare to impress, adapt, and succeed.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={statsVariants}
          className="flex flex-col md:flex-row w-full items-center justify-center md:justify-end gap-8 my-12 md:my-16"
        >
          <motion.p variants={statItemVariants} className="text-4xl font-extrabold text-gray-900 text-center">
            250k+
            <span className="block text-xl text-blue-600 font-medium mt-1">
              Offers Secured
            </span>
          </motion.p>
          <motion.p variants={statItemVariants} className="text-4xl font-extrabold text-gray-900 text-center">
            1.2M+
            <span className="block text-xl text-purple-600 font-medium mt-1">
              Interviews Aced
            </span>
          </motion.p>
        </motion.div>

        {/* Dynamic image section with overlay */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="w-full mt-8 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 h-[450px] md:h-[550px] shadow-2xl overflow-hidden relative group"
        >
          <img
            src="/assets/img/hero.jpg" // Ensure this path is correct
            alt="AI Interview Preparation"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute top-6 left-6 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md text-sm font-semibold text-gray-800 shadow-lg transform translate-y-0 opacity-100 transition duration-500 group-hover:translate-y-[-10px] group-hover:opacity-0">
            Interviews Copilot&copy;
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="hidden md:block absolute w-96 bottom-6 right-6 px-6 py-4 rounded-xl bg-white/80 backdrop-blur-xl shadow-2xl border border-gray-100 transform translate-y-0 opacity-100 transition duration-500 group-hover:translate-y-[-10px] group-hover:opacity-0"
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Your Personal AI Interview Coach</h3>
            <p className="text-base text-neutral-600 leading-relaxed">
              Experience mock interviews tailored to your target role. Receive instant, data-driven feedback on your communication, confidence, and knowledge, all powered by advanced AI.
            </p>

            <Link to={"/generate"}>
              <Button className="mt-5 px-6 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg flex items-center">
                Start Your AI Mock <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      {/* Marquee section for partners/logos */}
      <div className="w-full my-16 py-8 bg-gray-100 border-y border-gray-200">
        <h3 className="text-center text-2xl font-semibold text-gray-700 mb-8">Trusted by aspiring professionals globally</h3>
        <Marquee pauseOnHover gradient gradientColor="rgb(243, 244, 246)" gradientWidth={100}>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
        </Marquee>
      </div>

      <Container className="py-12 md:py-16 space-y-12">
        <h2 className="text-center tracking-tight text-3xl md:text-5xl font-extrabold text-gray-900 max-w-4xl mx-auto leading-snug">
          Elevate Your Interview Game with Intelligent, Adaptive Practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets/img/office.jpg" 
              alt="Professional Interview Setting"
              className="w-full max-h-[500px] rounded-xl object-cover shadow-xl border border-gray-200"
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Revolutionize your preparation process. Our platform adapts to your unique learning style, providing targeted feedback and dynamic scenarios that simulate real-world interviews. Gain the confidence to shine.
            </p>

            <Link to={"/generate"} className="w-full max-w-xs">
              <Button className="w-full px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 transition duration-300 shadow-xl flex items-center justify-center">
                Unlock Your Potential <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;

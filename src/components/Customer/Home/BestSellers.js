import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Placeholder images - using API placeholders as directed
const truckImage = "/api/placeholder/200/200";
const clockImage = "/api/placeholder/200/200";
const packageImage = "/api/placeholder/200/200";

export const BestSellers = () => {
  // Animation controls for scroll-triggered animations
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls1.start('visible');
      setTimeout(() => controls2.start('visible'), 200);
      setTimeout(() => controls3.start('visible'), 400);
    }
  }, [controls1, controls2, controls3, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    }
  };

  // Enhanced hover animations for cards
  const hoverEffect = {
    scale: 1.03,
    boxShadow: "0px 20px 40px rgba(79, 70, 229, 0.15)",
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    }
  };

  return (
    <div ref={ref} className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 w-full overflow-hidden" id="best_Sellers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animated elements */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">E-Ration</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Experience the difference with our service that prioritizes quality, speed, and sustainability
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 mx-auto rounded-full"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Fast Delivery Card */}
          <motion.div
            initial="hidden"
            animate={controls1}
            variants={cardVariants}
            whileHover={hoverEffect}
            className="bg-white rounded-2xl overflow-hidden shadow-xl border-b-4 border-purple-500 group relative"
          >
            {/* Card background decoration */}
            <div className="absolute right-0 top-0 h-24 w-24 bg-purple-100 rounded-bl-full opacity-70 z-0"></div>
            
            <div className="p-8 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-xl shadow-inner">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="relative"
                  >
                    <img src={truckImage} alt="Delivery truck" className="w-14 h-14 object-contain relative z-10" />
                    <div className="absolute inset-0 bg-purple-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
                  </motion.div>
                </div>
                <div className="h-12 w-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">Fast Delivery</h3>
              <p className="text-gray-600 mb-5">Receive your essential supplies within 2-3 hours after placing your order.</p>
              <div className="mt-6 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "90%" }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
                />
              </div>
            </div>
            
            {/* Animated shine effect on hover */}
            <motion.div 
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 pointer-events-none"
            />
          </motion.div>

          {/* Opening Hours Card */}
          <motion.div
            initial="hidden"
            animate={controls2}
            variants={cardVariants}
            whileHover={hoverEffect}
            className="bg-white rounded-2xl overflow-hidden shadow-xl border-b-4 border-indigo-500 group relative"
          >
            {/* Card background decoration */}
            <div className="absolute right-0 top-0 h-24 w-24 bg-indigo-100 rounded-bl-full opacity-70 z-0"></div>
            
            <div className="p-8 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-4 rounded-xl shadow-inner">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 15,
                      ease: "linear"
                    }}
                    className="relative"
                  >
                    <img src={clockImage} alt="Clock" className="w-14 h-14 object-contain relative z-10" />
                    <div className="absolute inset-0 bg-indigo-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
                  </motion.div>
                </div>
                <div className="h-12 w-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">Opening Hours</h3>
              <p className="text-gray-600 mb-5">Our services are available Monday to Friday, from 9:00 AM to 6:00 PM.</p>
              <div className="mt-6 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ delay: 1.2, duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full"
                />
              </div>
            </div>
            
            {/* Animated shine effect on hover */}
            <motion.div 
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 pointer-events-none"
            />
          </motion.div>

          {/* Eco-Friendly Packaging Card */}
          <motion.div
            initial="hidden"
            animate={controls3}
            variants={cardVariants}
            whileHover={hoverEffect}
            className="bg-white rounded-2xl overflow-hidden shadow-xl border-b-4 border-blue-500 group relative"
          >
            {/* Card background decoration */}
            <div className="absolute right-0 top-0 h-24 w-24 bg-blue-100 rounded-bl-full opacity-70 z-0"></div>
            
            <div className="p-8 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-xl shadow-inner">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    <img src={packageImage} alt="Eco packaging" className="w-14 h-14 object-contain relative z-10" />
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
                  </motion.div>
                </div>
                <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">Eco-Friendly Packaging</h3>
              <p className="text-gray-600 mb-5">We use sustainable materials for packaging to reduce environmental impact.</p>
              <div className="mt-6 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ delay: 1.4, duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-blue-400 to-teal-500 rounded-full"
                />
              </div>
            </div>
            
            {/* Animated shine effect on hover */}
            <motion.div 
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 pointer-events-none"
            />
          </motion.div>
        </div>

        {/* Enhanced call to action section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 py-10 px-8 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Ready for hassle-free shopping?</h3>
              <p className="text-indigo-100 mb-8 text-lg max-w-lg mx-auto">Get essential supplies delivered straight to your doorstep with just a few clicks.</p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(79, 70, 229, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Shop Now</span>
                <motion.div 
                  initial={{ width: "0%" }}
                  whileHover={{ width: "120%" }}
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-600 to-purple-600 -z-0 rounded-xl transition-all duration-300"
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        {/* Floating background decorations */}
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            animate={{
              y: [0, 20, 0],
              x: [0, 15, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute left-1/4 top-1/2 w-32 h-32 bg-purple-400 rounded-full opacity-10 blur-3xl"
          />
          <motion.div 
            animate={{
              y: [0, -30, 0],
              x: [0, -20, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute right-1/4 top-1/3 w-64 h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Daniel James",
    text: "Adopting from this platform changed my life! My pet is healthy and happy.",
    rating: 5,
    image: "https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Sophia Lee",
    text: "Great experience! The adoption process was smooth, and the pet was well cared for.",
    rating: 5,
    image: "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Michael Brown",
    text: "Amazing customer service and great pet care options. Highly recommend!",
    rating: 5,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between pl-20 py-16 rounded"
      style={{ background: "linear-gradient(to right, #C52546, #FCD34D)" }}
    >
      {/* Left Side - Text */}
      <div className="md:w-1/2 text-white">
        <motion.h3
          className="text-yellow-300 font-semibold text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TESTIMONIALS
        </motion.h3>
        <motion.h2
          className="text-4xl font-bold mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What Our Clients Have to Say!
        </motion.h2>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {testimonials[index].text}
        </motion.p>

        {/* Ratings */}
        <div className="flex items-center mt-4">
          {Array.from({ length: testimonials[index].rating }).map((_, i) => (
            <span key={i} className="text-yellow-300 text-xl">★</span>
          ))}
        </div>

        {/* Client Name */}
        <motion.p
          className="font-bold text-lg mt-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {testimonials[index].name}
        </motion.p>
        <p className="text-gray-200">Happy Client</p>

        {/* Navigation Buttons */}
        <div className="flex mt-6">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-800 text-lg mx-2"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-800 text-lg mx-2"
          >
            →
          </button>
        </div>
      </div>

      {/* Right Side - Floating Images */}
      <div className="md:w-1/2 flex flex-wrap justify-center items-center relative">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.id}
            className={`absolute rounded-full overflow-hidden shadow-lg transition-all duration-700 ${
              index === i ? "w-40 h-40 md:w-60 md:h-60 z-20" : "w-24 h-24 md:w-36 md:h-36 opacity-50"
            }`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: index === i ? 1.2 : 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;

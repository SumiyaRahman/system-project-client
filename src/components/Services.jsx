import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  // Services Data
  const services = [
    {
      id: 1,
      icon: "🐾",
      title: "Animal Rescue",
      description:
        "We ensure safe and compassionate rescues for animals in need.",
      modalContent: (
        <p>
          Our animal rescue process is dedicated to saving animals from
          dangerous situations, abandonment, and neglect. We work tirelessly to
          provide them with medical care, shelter, and a chance to find a
          forever home.
        </p>
      ),
    },
    {
      id: 2,
      icon: "😺",
      title: "Cat Adoption",
      description:
        "Find your perfect feline companion and give them a loving home.",
      modalContent: (
        <p>
          Our cat adoption process is simple and rewarding. First, explore our
          catalog of adorable cats. Once you've found your match, fill out the
          adoption form and schedule a meet-and-greet.
        </p>
      ),
    },
    {
      id: 3,
      icon: "🍖",
      title: "Pet Food",
      description: "Healthy, nutritious food for your furry friends.",
      modalContent: (
        <p>
          We provide a variety of high-quality pet food options tailored to
          different breeds, sizes, and dietary needs.
        </p>
      ),
    },
    {
      id: 4,
      icon: "✂️",
      title: "Pet Grooming",
      description: "Keep your pets clean, happy, and looking their best.",
      modalContent: (
        <p>
          Our grooming services include bathing, haircuts, nail trimming, and
          more. We ensure a stress-free and comfortable experience for your
          pets.
        </p>
      ),
    },
    {
      id: 5,
      icon: "🩺",
      title: "Veterinary",
      description: "Expert care for your pets' health and well-being.",
      modalContent: (
        <p>
          Our veterinary services cover everything from routine check-ups to
          emergency care. With experienced professionals and state-of-the-art
          facilities, your pets are always in safe hands.
        </p>
      ),
    },
    {
      id: 6,
      icon: "🎾",
      title: "Pet Training",
      description: "Train your pets to be well-behaved and responsive.",
      modalContent: (
        <p>
          Our pet training programs are designed to teach basic obedience,
          resolve behavioral issues, and strengthen the bond between you and
          your furry friend.
        </p>
      ),
    },
  ];

  // State for Modal
  const [activeService, setActiveService] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="p-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[#373737] text-3xl md:text-4xl mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12">
          We provide a variety of services to ensure the best care for your
          pets.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }} // Floating animation
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-4xl mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-[#373737] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button
                onClick={() => setActiveService(service)}
                className="text-[#C52546] font-semibold hover:underline"
              >
                Read more →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
<AnimatePresence>
  {activeService && (
    <>
      {/* Backdrop with Glass Effect */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-r from-[#fcd34d30] to-[#c5254532] z-40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>

      {/* Modal Content with Glassmorphism */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white/50 backdrop-blur-lg rounded-lg p-8 max-w-lg mx-auto text-center">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#C52546] to-[#FCD34D] play-fair font-semibold tracking-widest text-xl md:text-2xl mb-4">
            {activeService.title}
          </h3>
          <div className="text-gray-600 text-sm leading-[1.5rem] tracking-[0.01rem] mb-6">
            {activeService.modalContent}
          </div>
          <button
            onClick={() => setActiveService(null)}
            className="bg-[#C52546] text-white py-2 px-4 rounded hover:bg-[#FCD34D] transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

    </motion.section>
  );
};

export default Services;

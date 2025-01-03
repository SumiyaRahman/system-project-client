import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  // Services Data
  const services = [
    {
      id: 1,
      icon: "🐾",
      title: "Animal Rescue",
      description: "We ensure safe and compassionate rescues for animals in need.",
      modalContent: (
        <p>
          Our animal rescue process is dedicated to saving animals from
          dangerous situations, abandonment, and neglect. We work tirelessly to
          provide them with medical care, shelter, and a chance to find a
          forever home. Whether it's rescuing stray dogs or injured wildlife,
          we ensure a compassionate and safe recovery for every animal in need.
        </p>
      ),
    },
    {
      id: 2,
      icon: "😺",
      title: "Cat Adoption",
      description: "Find your perfect feline companion and give them a loving home.",
      modalContent: (
        <p>
          Our cat adoption process is simple and rewarding. First, explore our
          catalog of adorable cats. Once you've found your match, fill out the
          adoption form and schedule a meet-and-greet. After approval, your new
          furry friend will be ready to join your family!
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
          different breeds, sizes, and dietary needs. From grain-free options to
          special diet formulas, your pets' health and happiness are our
          priorities.
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
          pets, leaving them refreshed and looking fabulous!
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
          your furry friend. Start your training journey with us today!
        </p>
      ),
    },
  ];

  // State for Modal
  const [activeService, setActiveService] = useState(null);

  // Modal Animation Variants
  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  // Section Scroll Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="p-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          variants={cardVariants}
          className="text-3xl font-bold text-[#373737] mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          variants={cardVariants}
          className="text-gray-600 mb-12"
        >
          We provide a variety of services to ensure the best care for your pets.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
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
            {/* Backdrop Animation */}
            <motion.div
              className="fixed inset-0 bg-black"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            ></motion.div>

            {/* Modal Animation */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
            >
              <div className="bg-white rounded-lg p-8 max-w-lg mx-auto text-center">
                <h3 className="text-2xl font-bold text-[#373737] mb-4">
                  {activeService.title}
                </h3>
                <div className="text-gray-600 mb-6">
                  {activeService.modalContent}
                </div>
                <button
                  onClick={() => setActiveService(null)}
                  className="bg-[#C52546] text-white py-2 px-4 rounded hover:bg-red-600 transition"
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

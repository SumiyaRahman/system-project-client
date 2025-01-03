import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    icon: "🏆",
    value: "85+",
    label: "Awards Win",
    bg: "bg-green-50",
  },
  {
    id: 2,
    icon: "😊",
    value: "96k",
    label: "Happy Clients",
    bg: "bg-red-50",
  },
  {
    id: 3,
    icon: "🎓",
    value: "60+",
    label: "Professional Vets",
    bg: "bg-purple-50",
  },
  {
    id: 4,
    icon: "🛡️",
    value: "99.99%",
    label: "Protection",
    bg: "bg-yellow-50",
  },
];

const StatsSection = () => {
  return (
    <div className="flex justify-center gap-6 p-8">
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          className={`w-60 p-6 rounded-lg shadow-md ${stat.bg} flex flex-col items-center`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: stat.id * 0.2 }}
        >
          <motion.div
            className="text-5xl mb-4"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {stat.icon}
          </motion.div>
          <h2 className="text-2xl font-bold">{stat.value}</h2>
          <p className="text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsSection;

import { FaCalendarAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

const ConsultationForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#C52546] to-[#C52546] p-10 rounded-lg shadow-lg">
      {/* Left Side - Form */}
      <div className="md:w-1/2 text-white">
        <h3 className="uppercase font-semibold tracking-wider text-sm">Book A Consultation</h3>
        <h2 className="text-4xl font-bold mt-2">Schedule a Visit Today!</h2>

        <form className="mt-6 space-y-4">
          {/* Name and Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative w-full">
              <label className="block text-sm font-medium">Your Name:</label>
              <input
                type="text"
                placeholder="Ex. John Andrew"
                className="w-full p-3 rounded-full text-gray-800"
              />
            </div>

            <div className="relative w-full">
              <label className="block text-sm font-medium">Phone Number:</label>
              <input
                type="text"
                placeholder="+ 5689 2589 6325"
                className="w-full p-3 rounded-full text-gray-800"
              />
              <FaPhoneAlt className="absolute top-11 right-4 text-gray-500" />
            </div>
          </div>

          {/* Date and Time */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative w-full">
              <label className="block text-sm font-medium">Select Date:</label>
              <input type="date" className="w-full p-3 rounded-full text-gray-800" />
              <FaCalendarAlt className="absolute top-11 right-4 text-gray-500" />
            </div>

            <div className="relative w-full">
              <label className="block text-sm font-medium">Select Time:</label>
              <input type="time" className="w-full p-3 rounded-full text-gray-800" />
              <FaClock className="absolute top-11 right-4 text-gray-500" />
            </div>
          </div>

          {/* Service Dropdown */}
          <div className="relative w-full">
            <label className="block text-sm font-medium">Select Service:</label>
            <select className="w-full p-3 rounded-full text-gray-800">
              <option>Pet Training</option>
              <option>Vet Consultation</option>
              <option>Grooming Service</option>
            </select>
          </div>

          {/* Submit Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full mt-4">
            Submit Now
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2">
        <img
          src="https://images.pexels.com/photos/7210768/pexels-photo-7210768.jpeg"
          alt="Pet Consultation"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ConsultationForm;

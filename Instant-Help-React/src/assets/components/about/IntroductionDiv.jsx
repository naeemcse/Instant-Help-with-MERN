import React from 'react';

const IntroductionDiv = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-green-500 text-white p-12 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-6 text-center">Welcome to Instant-Help</h1>
      <p className="text-lg mb-8  text-center" >
        Your gateway to instant assistance and professional connections. Discover, connect, and thrive with Instant-Help.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Our Goal</h2>
          <p>
            Bridging connections and empowering success. We're committed to creating a dynamic platform that fosters meaningful connections between professionals and those seeking their services.
          </p>
        </div>

        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Our Services</h2>
          <p>
            Instant-Help provides a wide range of services, connecting you with professionals from various industries. Whether you need guidance, collaboration, or expertise, we've got you covered.
          </p>
        </div>

        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Our Activities</h2>
          <p>
            Engage with a vibrant community through our activities. From workshops and webinars to networking events, Instant-Help offers opportunities to enhance your skills and broaden your professional horizons.
          </p>
        </div>

        <div className="bg-white bg-opacity-10 p-6 rounded-lg col-span-3 lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Facilities</h2>
          <p>
            Explore a user-friendly experience, robust privacy and security measures, and a feedback-driven development approach. Your satisfaction is our priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionDiv;

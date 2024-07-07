import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto  p-6 bg-white shadow-lg rounded-lg   mt-56 "  >
      <h2 className="text-3xl font-bold mb-4 text-center">About This Project</h2>
      <p className="text-gray-700 mb-4">
        Hello! My name is <span className="font-bold text-blue-500">Akshit Aggarwal</span>. I am a passionate developer with experience in the MERN stack (MongoDB, Express, React.js, Node.js). This project is a full-featured bookstore website developed in Delhi, showcasing a variety of functionalities .
      </p>
      <p className="text-gray-700 mb-4">
        The project utilizes modern web development technologies and follows best practices to ensure a seamless user experience and maintainable codebase. Tailwind CSS is used for styling, providing a responsive and visually appealing design.
      </p>
      <p className="text-gray-700 mb-4">
        Feel free to explore the project and reach out via the contact form if you have any questions or feedback. Thank you for visiting!
      </p>
    </div>
  );
};

export default About;

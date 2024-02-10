'use client'
import React from 'react';

const PersonalDataSection = ({ isVisible, toggleVisibility }) => {
  return (
    <div className={`lg:w-2/6 sticky top-0 bg-blue-200 p-6 rounded-lg text-blue-800 shadow-md mb-8 ${isVisible ? 'block' : 'hidden'}`}>
      <button
        className="mb-2 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={toggleVisibility}
      >
        {isVisible ? 'Hide Personal Data' : 'Show Personal Data'}
      </button>
      <h2 className="text-2xl font-semibold mb-4">Mohammed Hasan Alsalehi</h2>
      <p className="text-sm opacity-50">Islamabad, Pakistan</p>
      <p className="text-sm opacity-50">+963 331 687 698 · mohammedalsalehi033@gmail.com</p>

      {/* Education Section */}
      <h3 className="text-lg font-semibold mt-4">Education</h3>
      <p>
        COMSATS University Islamabad, Islamabad, Pakistan<br />
        Software Engineering | Feb 2022 – Present<br />
        Achievements: First place in class with 4.0/4.0 GPA for the first semester
      </p>
      <p>
        Al-Wahda Arabic Modern School | GPA: 92.8/100, Sanaa, Yemen<br />
        High School degree | Sep 2018 – Nov 2020<br />
        Achievements: Second place in class by GPA for the years 2019 and 2020<br />
        Societies: Al-Shap football club (Summer 2019)
      </p>

      {/* Work Experience Section */}
      <h3 className="text-lg font-semibold mt-4">Work Experience</h3>
      <p>
        Independent Car Transporter, Sanaa, Yemen<br />
        Car Delivery | Jan – April 2019<br />
        Worked in the car industry, delivering cars from the seaport to their owners as a paid service.
      </p>

      {/* Leadership & Volunteering Section */}
      <h3 className="text-lg font-semibold mt-4">Leadership & Volunteering Experience</h3>
      <p>
        Al-Wahda Arabic Modern School, Sanaa, Yemen<br />
        Class leader | Jan – Jul 2020<br />
        Managed logistics and communication between students and teachers. Tasks included organizing morning routines and reporting student concerns to the school administration.
      </p>
      <p>
        Youth of Sanaa Initiative, Online<br />
        Volunteer | Jan – Jul 2020<br />
        Contributed to the cleaning campaign of the historic Sanaa city (Old Sanaa) and distributed material help to disadvantaged people at Al-Tahreer Square.
      </p>

      {/* Additional Courses & Certificates Section */}
      <h3 className="text-lg font-semibold mt-4">Additional Courses & Certificates</h3>
      <p>
        Deeplearning.AI, Online<br />
        AI For Everyone | Jul – Aug 2022
      </p>
      <p>
        Michigan State University, Online<br />
        Game Design and Development course | Jul 2022
      </p>
      <p>
        University Of Michigan, Online<br />
        Using Databases with Python Course | Jul 2022
      </p>
      <p>
        Google, Online<br />
        Digital Marketing Course | Jan – Jul 2020
      </p>
      <p>
        Data Programming Institute, Sana’a, Yemen<br />
        Fundamentals of Coding Course
      </p>

      {/* TOEFL ITP Certificate Section */}
      <h3 className="text-lg font-semibold mt-4">TOEFL ITP Certificate</h3>
      <p>Score: 497 | Sana’a, Yemen</p>
      {/* Skills & Hobbies Section */}
      <h3 className="text-lg font-semibold mt-4">Skills & Hobbies</h3>
      <div className="mb-4">
        <p className="flex justify-between">
          <span>Languages:</span>
          <span>Arabic (native)</span>
        </p>
        <div className="relative w-full bg-gray-300 h-3 rounded-md">
          <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-md" style={{ width: '90%' }}></div>
        </div>
      </div>
      <div className="mb-4">
        <p className="flex justify-between">
          <span>English:</span>
          <span>Advanced</span>
        </p>
        <div className="relative w-full bg-gray-300 h-3 rounded-md">
          <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-md" style={{ width: '75%' }}></div>
        </div>
      </div>
      <div className="mb-4">
        <p className="flex justify-between">
          <span>Urdu:</span>
          <span>Beginner</span>
        </p>
        <div className="relative w-full bg-gray-300 h-3 rounded-md">
          <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-md" style={{ width: '20%' }}></div>
        </div>
      </div>
      <p className="text-sm opacity-50 mb-4">Programming: C in Arduino Studio (intermediate), Android/IOS app development (intermediate), Games Development (Unity: C#)</p>
      <p className="text-sm opacity-50 mb-4">CAD and Design: Blender 3D modeling (beginner), Photoshop (intermediate)</p>
      <p className="text-sm opacity-50 mb-4">Hobbies: Football and Volleyball</p>
    </div>
  );
};

export default PersonalDataSection;

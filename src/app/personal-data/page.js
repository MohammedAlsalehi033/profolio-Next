export default function PersonalData() {
    const isVisible = true;
  
    return (
      <div className={`mx-auto w-full lg:w-2/3 text-white p-6 rounded-lg shadow-md mb-8 transition-all to-black ${isVisible ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <h2 className="text-3xl font-semibold mb-4 text-center animate__animated animate__bounceInDown text-white">Mohammed Hasan Alsalehi</h2>
        <p className="text-sm opacity-80 text-center animate__animated animate__bounceInDown">Islamabad, Pakistan</p>
        <p className="text-sm opacity-80 text-center animate__animated animate__bounceInDown">+963 331 687 698 · mohammedalsalehi033@gmail.com</p>
  
        {/* Education Section */}
        <SectionHeader title="Education" highlightColor="text-pink-500" />
        <p className="animate__animated animate__bounceInDown">
          COMSATS University Islamabad, Islamabad, Pakistan<br />
          Software Engineering | Feb 2022 – Present<br />
          Achievements: First place in class with 4.0/4.0 GPA for the first semester
        </p>
        <p className="animate__animated animate__bounceInDown">
          Al-Wahda Arabic Modern School | GPA: 92.8/100, Sanaa, Yemen<br />
          High School degree | Sep 2018 – Nov 2020<br />
          Achievements: Second place in class by GPA for the years 2019 and 2020<br />
          Societies: Al-Shap football club (Summer 2019)
        </p>
  
        {/* Work Experience Section */}
        <SectionHeader title="Work Experience" highlightColor="text-purple-500" />
        <p className="animate__animated animate__bounceInDown">
          Independent Car Transporter, Sanaa, Yemen<br />
          Car Delivery | Jan – April 2019<br />
          Worked in the car industry, delivering cars from the seaport to their owners as a paid service.
        </p>
  
        {/* Leadership & Volunteering Section */}
        <SectionHeader title="Leadership & Volunteering Experience" highlightColor="text-blue-500" />
        <p className="animate__animated animate__bounceInDown">
          Al-Wahda Arabic Modern School, Sanaa, Yemen<br />
          Class leader | Jan – Jul 2020<br />
          Managed logistics and communication between students and teachers. Tasks included organizing morning routines and reporting student concerns to the school administration.
        </p>
        <p className="animate__animated animate__bounceInDown">
          Youth of Sanaa Initiative, Online<br />
          Volunteer | Jan – Jul 2020<br />
          Contributed to the cleaning campaign of the historic Sanaa city (Old Sanaa) and distributed material help to disadvantaged people at Al-Tahreer Square.
        </p>
  
        {/* Additional Courses & Certificates Section */}
        <SectionHeader title="Additional Courses & Certificates" highlightColor="text-green-500" />
        <p className="animate__animated animate__bounceInDown">
          Deeplearning.AI, Online<br />
          AI For Everyone | Jul – Aug 2022
        </p>
        <p className="animate__animated animate__bounceInDown">
          Michigan State University, Online<br />
          Game Design and Development course | Jul 2022
        </p>
        <p className="animate__animated animate__bounceInDown">
          University Of Michigan, Online<br />
          Using Databases with Python Course | Jul 2022
        </p>
        <p className="animate__animated animate__bounceInDown">
          Google, Online<br />
          Digital Marketing Course | Jan – Jul 2020
        </p>
        <p className="animate__animated animate__bounceInDown">
          Data Programming Institute, Sana’a, Yemen<br />
          Fundamentals of Coding Course
        </p>
  
        {/* TOEFL ITP Certificate Section */}
        <SectionHeader title="TOEFL ITP Certificate" highlightColor="text-yellow-500" />
        <p className="animate__animated animate__bounceInDown">Score: 497 | Sana’a, Yemen</p>
  
        {/* Skills & Hobbies Section */}
        <SectionHeader title="Skills & Hobbies" highlightColor="text-orange-500" />
        <SkillBar label="Languages" level="90%" />
        <SkillBar label="English" level="75%" />
        <SkillBar label="Urdu" level="20%" />
        <p className="text-sm opacity-80 mb-4 animate__animated animate__bounceInDown">
          Programming: C in Arduino Studio (intermediate), Android/IOS app development (intermediate), Games Development (Unity: C#)
        </p>
        <p className="text-sm opacity-80 mb-4 animate__animated animate__bounceInDown">
          CAD and Design: Blender 3D modeling (beginner), Photoshop (intermediate)
        </p>
        <p className="text-sm opacity-80 mb-4 animate__animated animate__bounceInDown">
          Hobbies: Football and Volleyball
        </p>
      </div>
    );
  };
  
  // Component for Section Headers
  const SectionHeader = ({ title, highlightColor }) => (
    <h3 className={`text-lg font-semibold mt-4 transform hover:scale-105 transition-transform animate__animated animate__pulse ${highlightColor}`}>{title}</h3>
  );
  
  // Component for Skill Bars
  const SkillBar = ({ label, level }) => (
    <div className="mb-4 animate__animated animate__bounceInDown">
      <p className="flex justify-between">
        <span>{label}:</span>
        <span>{level}</span>
      </p>
      <div className="relative w-full bg-gray-300 h-3 rounded-md">
        <div className="absolute top-0 left-0 h-full bg-gray-700 rounded-md" style={{ width: level }}></div>
      </div>
    </div>
  );

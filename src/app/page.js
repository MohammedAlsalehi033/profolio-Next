// Home.js
'use client'
import ProjectCard from './ProjectCard'; 
import PersonalDataSection from './PersonalSection';
import React, { useState } from 'react';


export default function Home() {
  // Define your project data for different categories
  // Web Projects
const webProjects = [
  {
    title: 'TheBooKStoreAdminPage',
    description: 'The JavaScript admin page for a bookStore that uploads data to Firebase connected with a Flutter application.',
    githubRepo: 'https://github.com/MohammedAlsalehi033/TheBooKStoreAdminPage',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myfirstapp-c49e9.appspot.com/o/images%2FScreenshot_8.png?alt=media&token=99c083b3-f796-402d-b081-c79b06f0aa32',
    downloadLink: 'dummy-deployment-link',
  },
  {
    title: 'Portfolio in Next.JS',
    description: 'This is a simple and customizable Next.js portfolio template designed to showcase your projects and personal information. It includes separate sections for projects, education, work experience, leadership, certificates, skills, and hobbies. The template is built with flexibility in mind, allowing users to easily modify the content',
    githubRepo: 'https://github.com/MohammedAlsalehi033/Portfolio-in-next',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myfirstapp-c49e9.appspot.com/o/images%2FScreenshot_9.png?alt=media&token=f358163d-7381-42ea-b029-416d6acfad64',
    downloadLink: 'https://portfolio-in-next-rho.vercel.app/',
  },
  {
    title: 'Yemeni Sayings API',
    description: 'Built using Node.js, Express.js, MongoDB Atlas, and deployed on Heroku, the Yemeni Sayings API provides a fast and scalable solution for accessing traditional Yemeni sayings.',
    githubRepo: 'https://github.com/MohammedAlsalehi033/Portfolio-in-next',
    imageUrl: '',
    downloadLink: 'https://api-test-5c467f78feca.herokuapp.com/',
  },
];

// Game Projects
const gameProjects = [
  {
    title: 'Pixel Wars',
    description: 'A 2-player local multiplayer Android game featuring pixel art characters engaged in a dynamic duel. Players jump, dodge, and shoot at each other. The objective is to be the first to score four hits on the opponent.',
    githubRepo: 'https://github.com/MohammedAlsalehi033/Pixel-Wars',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myfirstapp-c49e9.appspot.com/o/images%2FApple%20iPhone%2011%20Pro%20Max%20Presentation%20(2).png?alt=media&token=edfd6a19-feb9-46f1-8e94-bb9da707e8cf',
    downloadLink: 'https://drive.google.com/file/d/14qerJaGnhDH-xBXHQar-foFaj9gmfGw7/view?usp=drive_link',
  },
  {
    title: 'Cube Runner',
    description: 'Cube Runner is an addictive 3D gaming experience where players control a cube through a challenging maze of obstacles. With intuitive controls and progressively difficult levels, it offers a ton of fun and excitement for players of all ages.',
    githubRepo: 'https://github.com/MohammedAlsalehi033/3D-unity-game',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myfirstapp-c49e9.appspot.com/o/images%2FUntitled%20design%20(1).png?alt=media&token=5f1468ef-48bb-45a1-af09-56ca82b983c0',
    downloadLink: 'https://drive.google.com/file/d/11VcDQA697LsEXsZn0xLrffqMVruMu7Ml/view?usp=sharing',
  },

  {
    title: 'Low Poly Adventure Unity-3D-Game',
    description: 'Welcome to the Low Poly Adventure, an immersive multi-level 3D game built using Unity and powered by C#! Embark on a thrilling journey through a beautifully crafted low-poly world filled with challenges, mysteries, and endless excitement.',
    githubRepo: 'https://github.com/MohammedAlsalehi033/Low-Poly-Adventure---Unity-3D-Game2',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myfirstapp-c49e9.appspot.com/o/images%2FUntitled%20design.png?alt=media&token=ce3a845c-9a68-4d86-aa71-78da5d217611',
    downloadLink: 'https://drive.google.com/file/d/1c6ftHftoP8opOJ7dqdpeqtdbULxAX-FT/view?usp=sharing',
  },

  {
    title: 'Android Game',
    description: 'A 5 Levels Android Game made using C# for coding, Photoshop for UI and modeling, and Unity.',
    githubRepo: 'https://github.com/MohammedAlsalehi033/Android-Game1',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myfirstapp-c49e9.appspot.com/o/images%2FApple%20iPhone%2011%20Pro%20Max%20Presentation%20(1).png?alt=media&token=0e8744a0-c9dd-4be5-a49a-3e1d73006c08',
    downloadLink: 'https://drive.google.com/file/d/14p9xsr7KQKPOrk88BYE8NR4ur0l0vVeY/view?usp=drive_link',
  },
];

// Mobile App Projects
const mobileAppProjects = [
  
  {
    title: 'The BookStore Mobile App',
    description: 'Your go-to mobile companion for our web book platform. Enjoy seamless Firebase integration, SQLite offline reading, and PDF viewing. Jot down thoughts with interactive note-taking. Clone, configure, and dive into your literary world effortlessly. Happy Reading! 📚📱',
    githubRepo: 'https://github.com/MohammedAlsalehi033/TheBookStoreMobileApp',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myfirstapp-c49e9.appspot.com/o/images%2FApple%20iPhone%2011%20Pro%20Max%20Presentation.png?alt=media&token=d6020644-45f3-4d67-9f36-13c858002592',
    downloadLink: 'https://drive.google.com/file/d/14uKLP_svIYnGjPSnfQ8UVfh8QOnWohbJ/view?usp=drive_link',
  },
  {
    title: 'Flutter image Classifier',
    description: 'Flutter app powered by TensorFlow for image classification. Detects and categorizes images into four types: pornography, neutral, drawing, and sexy. Enhance content moderation and filtering with this user-friendly mobile tool.',
    githubRepo: 'https://github.com/MohammedAlsalehi033/Flutter-Image-Classifier',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myfirstapp-c49e9.appspot.com/o/images%2FApple%20iPhone%2011%20Pro%20Max%20Presentation%20(3).png?alt=media&token=9af37394-202c-4ecd-9287-169c9b56431b',
    downloadLink: 'dummy-apk-link',
  },
  {
    title: 'Ohda',
    description: 'A Flutter application designed for managing exam-related records and tracking Ohda devices. The app includes features such as adding new student information, searching for records, and generating insightful reports based on exam and Ohda data.',
    githubRepo: 'https://github.com/MohammedAlsalehi033/Ohda',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myfirstapp-c49e9.appspot.com/o/images%2FApple%20iPhone%2011%20Pro%20Max%20Presentation%20(4).png?alt=media&token=745b971a-55ed-460b-a042-5f68742a226b',
    downloadLink: 'https://drive.google.com/file/d/14pG9p6MKApPCCxgU8znLIrdnWsY7rM44/view?usp=drive_link',
  },
  {
    title: 'Image Tool',
    description: 'A tool that can help Designer by providing editing and generating tools.',
    githubRepo: 'https://github.com/MohammedAlsalehi033/AIToolFinal',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myfirstapp-c49e9.appspot.com/o/images%2FApple%20iPhone%2011%20Pro%20Max%20Presentation%20(5).png?alt=media&token=a7b9f8ae-3764-41b3-a5bf-ba4cc856c02b',
    downloadLink: 'https://drive.google.com/file/d/14wrNS_y5slj18yXO7nhyPPrTTSwZjaw0/view?usp=sharing',
  },
 
  
];
const [isVisible, setIsVisible] = useState(true);

return (
  <main className="flex min-h-screen flex-col lg:flex-row items-start justify-center p-24">

    <button
        className="bg-blue-500 text-white font-bold text-lg p-4 rounded-full fixed right-8 bottom-8 shadow-lg z-10"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? 'Hide Personal Section' : 'Show Personal Section'}
      </button>



    {isVisible && (
      <PersonalDataSection isVisible={isVisible} toggleVisibility={() => setIsVisible(!isVisible)} />
    )}



    <div className={`lg:w-full lg:overflow-y-auto ${isVisible ? 'lg:w-2/5' : 'lg:w-full'}`}>
      
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-blue-200 p-4 rounded-lg text-blue-800 mx-auto max-w-2xl text-center">
          Game Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 lg:max-w-5xl lg:text-left mx-auto">
          {gameProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-blue-200 p-4 rounded-lg text-blue-800 mx-auto max-w-2xl text-center">
          Mobile App Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 lg:max-w-5xl lg:text-left mx-auto">
          {mobileAppProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
      
      <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-blue-200 p-4 rounded-lg text-blue-800 mx-auto max-w-2xl text-center">
          Web Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 lg:max-w-5xl lg:text-left mx-auto">
          {webProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>



     

    
    </div>
  </main>
);
}
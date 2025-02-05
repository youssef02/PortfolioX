"use client";
import ExperienceSection from "@/components/sections/experience";
import Navbar from "@/components/navbar";
import * as CV from "@/components/cv";
import { fetchFromPublic } from "@/components/fetchdatahelper";
import React, { useEffect, useState } from "react";
import EducationSection from "@/components/sections/education";
import ProjectSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import HeroSection from "@/components/sections/hero";
import Footer from "@/components/sections/footer";
import ContactForm from "@/components/sections/contact";
import FeatureSection from "@/components/sections/features";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";



function Home() {
  const [cvData, setCvData] = useState<CV.CVData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [scene, setScene] = useState(null);
  const [sceneLoading, setSceneLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromPublic('PortfolioX/data.json');
        setCvData(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (cvData && sceneLoading) {
      const loadScene = async () => {
        try {
          const loadedScene : any = await new GLTFLoader().loadAsync('scene.gltf');
          setScene(loadedScene);
          setSceneLoading(false);  // Set loading to false once scene is loaded
        } catch (error: any) {
          setError(error.message);
          setSceneLoading(false);  // Set loading to false if there is an error
        }
      };

      loadScene();
    }
  }, [cvData, sceneLoading]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cvData) {
    console.log('cvData null');
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Loading...</h1>
        <p className="text-lg text-gray-600 mb-10 text-center">
          Please wait while we prepare awesome content for you.
        </p>
        <div className="border-t-4 border-gray-200 rounded-full animate-spin h-12 w-12 border-t-[#3498db]"></div>
      </div>
    );
  }

  if (sceneLoading) {
    console.log('cvData not null, scene loading');
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Loading...</h1>
        <p className="text-lg text-gray-600 mb-10 text-center">
          Please wait while we prepare the 3D scene.
        </p>
        <div className="border-t-4 border-gray-200 rounded-full animate-spin h-12 w-12 border-t-[#3498db]"></div>
      </div>
    );
  }

  return (
    <div className="App font-light">
      <Navbar />
      <div className="container mx-auto mt-10">
        <section id="Hero" className="my-10">
          <HeroSection Data={cvData.CONTACT[0]} Scene={scene} />
        </section>

        <section id="Experience" className="my-10">
          <ExperienceSection Data={cvData.EXPERIENCE} />
        </section>
        <section id="education" className="my-10">
          <EducationSection Data={cvData.EDUCATION} />
        </section>
        <section id="features" className="my-10">
          <FeatureSection Data={cvData.FEATURES} />
        </section>
        <section id="projects" className="my-10">
          <ProjectSection Data={cvData.PROJECTS} />
        </section>
        <section id="skills" className="my-10">
          <SkillsSection Data={cvData.SKILLS} />
        </section>

        <section id="contact" className="my-10">
          <h2 className="text-3xl font-bold">Contact</h2>
          <ContactForm />
        </section>
        <section id="footer" className="my-10">
          <Footer />
        </section>
      </div>
    </div>
  );
}


export default Home;
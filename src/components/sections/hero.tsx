"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { AmbientLight, AnimationMixer, Mesh,  } from "three";
import { animated, useSpring } from '@react-spring/three'
import { Text } from '@react-three/drei'


interface Props {
    Data : Contact
}

const HeroSection: React.FC<Props> = ({Data}) => {



    return (
        <section id="Hero" className="">
            <div className='flex justify-center items-center w-screen h-screen top-16 '>

                <Canvas className='w-full h-75 '>
                    <ambientLight intensity={5} />
                    <Hero />
                    
                </Canvas>
                <div className="absolute left-0 bottom-0  md:transform md:-translate-y-1/2 md:left-4 p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <a href={Data.important_links["LinkedIn"]} target="_blank" rel="" className="flex items-center border border-gray-300 bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-100">
                        <FaLinkedin size={24} className="mr-2" />
                        LinkedIn
                    </a>
                    <a href={Data.important_links["GitHub"]} target="_blank" rel="" className="flex items-center border border-gray-300 bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-100">
                        <FaGithub size={24} className="mr-2" />
                        GitHub
                    </a>
                    <a href="/youssef_arrassen_cv.pdf" target="_blank" rel="" className="flex items-center border border-gray-300 bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-100">
                        <FaDownload size={24} className="mr-2" />
                        Download
                        CV
                
                    </a>

                </div>
            </div>


        </section>
    );
};

function Hero() {
    const fileUrl = "/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);
    const mixer = new AnimationMixer(gltf.scene);

    useEffect(() => {
        //rotate 180 degrees
        gltf.scene.rotation.y = Math.PI;
        // Scale the model down 0.5 times
        gltf.scene.scale.set(0.5, 0.5, 0.5);
        //move up by 1
        gltf.scene.position.y = 1.5;

        //torate x  45 degrees
        gltf.scene.rotation.x = Math.PI / 8;
        // Ensure that the gltf file is loaded
        if (gltf && gltf.animations.length) {


            // Create an animation mixer


            // Play the first animation in the GLTF file
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();

            // Update the mixer on each frame
            const update = (delta: number) => {
                mixer.update(delta);
            };




        }
    }, [gltf]);

    useFrame((state, delta) => {
        if (mixer) {
            mixer.update(delta);
        }
    });


    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

import { Vector3 } from 'three';
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Contact } from "../cv";

const AnimatedText = animated(Text)

function BouncyHello() {
    const spring = useSpring({
        from: { scale: [0, 0, 0], rotation: [0, 0, 0], },
        //move to left by 12 step
        to: { scale: [1, 1, 1], rotation: [0, 0, 0] },


        config: {
            friction: 10,
        },
        delay: 2000,
    })
    return <AnimatedText color={
        'black'
    
    } scale={spring.scale as unknown as Vector3}  position={
        [-7, 2, -4]
    }>Welcome. Visitor</AnimatedText>
}


export default HeroSection;

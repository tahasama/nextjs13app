"use client";
import Modal from "@/app/modal";
import Link from "next/link";
import Image from "next/image";
import webdev from "../../images/webdev.png";

import React, { useRef } from "react";
import { FaInfoCircle, FaUserPlus, FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiArrowRightSLine, RiCodeBoxLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const page = () => {
  const gettingStartedRef = useRef<any>(null);
  const router = useRouter();

  const browsingTutorialsRef = useRef<any>(null);

  const scrollToGettingStarted = () => {
    gettingStartedRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToBrowsingTutorials = () => {
    browsingTutorialsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  function scrollToSignUp(event: any): void {
    throw new Error("Function not implemented.");
  }

  // <Link href={"projects/webdev/vanilla-project"}>Basic web dev</Link>
  // <Link href={"projects/webdev/react-project"}>React web dev</Link>
  return (
    <div className="bg-gray-900">
      {/* Hero section */}
      <section id="hero" className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-24 md:py-32 md:mt-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl max-w-lg font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
                <span className="block">Build amazing things with</span>
                <span className="block text-cyan-600">
                  HTML, CSS, JavaScript, and React
                </span>
              </h1>
              <div className="mt-6 text-xl text-gray-400 indent-4">
                <p>
                  With our platform, you can take your web development skills to
                  the next level by building dynamic user interfaces with ease.
                  We provide you with everything you need to get started with
                  web development, including tutorials, examples, and a
                  specialized web editor.
                </p>
              </div>
              <div className="mt-8">
                <button
                  onClick={scrollToGettingStarted}
                  className=" inline-flex items-center md:px-6 px-1 py-3 border text-slate-800 border-transparent text-base font-medium rounded-md bg-cyan-500 hover:bg-cyan-600"
                >
                  <RiCodeBoxLine className="w-5 h-5 mr-2 " />
                  Get started
                </button>
                <button
                  onClick={scrollToBrowsingTutorials}
                  className="ml-3 inline-flex items-center md:px-6 px-1 py-3 border border-transparent text-base font-medium rounded-md text-cyan-400 bg-slate-700 hover:bg-gray-600"
                >
                  <FaInfoCircle className="w-5 h-5 mr-2" />
                  Browse Tutorials
                </button>
              </div>
            </div>
            <div className="hidden md:flex ml-40 w-full justify-start bg-gray-900">
              <Image
                src={webdev}
                alt="React logo"
                className="h-auto w-[82%] -mt-44 -ml-1- "
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="getting-started"
        className="pb-20 bg-gray-900"
        ref={gettingStartedRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Get started with web development today
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Whether you're a beginner or an experienced developer, our
              platform has everything you need to start building amazing
              websites and web applications. Our tutorials and examples will
              guide you through the fundamentals of web development and teach
              you the skills you need to create responsive and interactive user
              interfaces.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => router.push("/register")}
                className="inline-flex items-center  py-3 border border-transparent text-base font-medium rounded-md text-stone-50 bg-cyan-500 hover:bg-cyan-500"
              >
                <FaUserPlus className="w-5 h-5 mr-2" />
                Sign Up Now
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center mt-16">
            <div className="w-full md:w-1/2 px-4 py-6">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                  Web Dev with HTML/CSS/JS
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Learn the basics of HTML, CSS, and JavaScript, and start
                  building your own web applications from scratch.
                </p>
                <a
                  href="/projects/webdev/vanilla-project/"
                  className=" bg-gray-900 border-cyan-400 border-2 hover:bg-cyan-500  text-cyan-600  font-bold hover:text-gray-200 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Start now
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4 py-6">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                  Web Development with React
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Learn how to build powerful, interactive web applications
                  using React, a popular JavaScript library.
                </p>
                <a
                  href="/projects/webdev/react-project/"
                  className=" bg-gray-900 border-cyan-400 border-2 hover:bg-cyan-500  text-cyan-600  font-bold hover:text-gray-200 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Start now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tutorials"
        ref={browsingTutorialsRef}
        className="bg-gray-900 "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:pb-24 ">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              <span className="block">Learn with our</span>
              <span className="block text-sky-600">Tutorials</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Our tutorials cover everything from the basics of Web developement
              to advanced topics like React.js.
            </p>
          </div>
          <div className="mt-20 flex flex-col md:flex-row gap-5 md:gap-20 flex-wrap justify-center items-center w-full">
            <div className="flex flex-col items-center md:w-80 p-4 my-4 bg-gradient-to-br rounded-md from-slate-900 via-slate-900 to-slate-800">
              <div className="w-20 h-20 rounded-full bg-sky-600 flex items-center justify-center">
                <AiFillHtml5 className="w-9 h-9 text-white" />
              </div>
              <h3 className="mt-8 text-xl font-medium text-white">HTML </h3>
              <p className="mt-6 text-base text-gray-300 text-center">
                Learn the basics of HTML and start building your own web pages.
              </p>
              <a
                href="/projects/webdev/tutorials/html"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-sky-600 hover:bg-sky-700"
              >
                <RiArrowRightSLine className="w-5 h-5 mr-2" />
                Start tutorial
              </a>
            </div>
            <div className="flex flex-col items-center md:w-80 p-4 my-4 bg-gradient-to-br rounded-md from-slate-900 via-slate-900 to-slate-800">
              <div className="w-20 h-20 rounded-full bg-sky-600 flex items-center justify-center">
                <DiCss3 className="w-9 h-9 text-white" />
              </div>
              <h3 className="mt-8 text-xl font-medium text-white">CSS</h3>
              <p className="mt-6 text-base text-gray-300 text-center">
                Learn the basics of CSS and start styling your web pages and
                websites.
              </p>
              <a
                href="/projects/webdev/tutorials/css"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-sky-600 hover:bg-sky-700"
              >
                <RiArrowRightSLine className="w-5 h-5 mr-2" />
                Start tutorial
              </a>
            </div>
            <div className="flex flex-col items-center md:w-80 p-4 my-4 bg-gradient-to-br rounded-md from-slate-900 via-slate-900 to-slate-800">
              <div className="w-20 h-20 rounded-full bg-sky-600 flex items-center justify-center">
                <IoLogoJavascript className="w-8 h-8 text-white" />
              </div>
              <h3 className="mt-8 text-xl font-medium text-white">
                Javascript
              </h3>
              <p className="mt-6 text-base text-gray-300 text-center">
                Learn the basics of JavaScript and start adding interactivity
                web pages.
              </p>
              <a
                href="/projects/webdev/tutorials/javascript"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-sky-600 hover:bg-sky-700"
              >
                <RiArrowRightSLine className="w-5 h-5 mr-2" />
                Start tutorial
              </a>
            </div>
            {/* <div className="col-span-3 sm:col-span-2 lg:col-span-3 flex justify-center items-center"> */}

            {/* </div> */}
          </div>{" "}
        </div>
      </section>
      <section
        id="examples"
        className=" flex flex-row justify-around bg-gray-900"
      >
        <div className="container mx-10 px-4 pb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-white">Examples</h2>
            <p className="mt-4 text-white">
              Explore different examples of Web developement and learn how to
              create your projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Basic web developement
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Find examples for using HTML, CSS and Javascript in general web
                developement tasks.
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                View example
              </a>
            </div>
            <div className="bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                React.js
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Find examples for using React.js for web developement, and learn
                usage of components.
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                View example
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="resources" className="bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-white">Resources</h2>
            <p className="mt-4 text-gray-400">
              Here are some helpful resources to take your web development and
              React skills to the next level:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 px-6 py-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-4">
                Official React Documentation
              </h3>
              <p className="text-gray-400 mb-4">
                The official React documentation is the go-to resource for all
                things React. It includes tutorials, reference guides, and more.
              </p>
              <a
                href="https://react.dev/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                target="_blank"
              >
                Visit Site
              </a>
            </div>
            <div className="bg-gray-800 px-6 py-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-4">
                MDN Web Docs
              </h3>
              <p className="text-gray-400 mb-4">
                MDN Web Docs is a comprehensive resource for web development. It
                includes documentation, tutorials, and reference guides for
                HTML, CSS, JavaScript, and more.
              </p>
              <a
                href="https://developer.mozilla.org/en-US/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                target="_blank"
              >
                Visit Site
              </a>
            </div>
            <div className="bg-gray-800 px-6 py-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-4">
                W3Schools
              </h3>
              <p className="text-gray-400 mb-4">
                A popular web development resource with interactive tutorials
                and examples for HTML, CSS, JavaScript, and React.
              </p>
              <a
                href="https://www.w3schools.com/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                target="_blank"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

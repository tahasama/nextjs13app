"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const JavaScriptLibrariesAndFrameworks = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
          font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        JavaScript Libraries and Frameworks{" "}
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${!ShowSection ? "hidden" : "visible"} indent-10 mb-8 mt-3`}
      >
        <h3 className="text-lg font-semibold mb-2">
          Introduction to Popular JavaScript Libraries and Frameworks
        </h3>
        <p className="mb-2">
          JavaScript has a vast ecosystem of libraries and frameworks that
          greatly simplify web and mobile app development. Let's explore some of
          the most popular ones and their key features:
        </p>
        <h4 className="text-md font-semibold mb-2">React</h4>
        <p className="mb-2">
          React is a widely-used JavaScript library for building user
          interfaces. It follows a component-based approach, making UI
          development more modular and reusable. React's virtual DOM efficiently
          updates and renders UI changes, resulting in fast and responsive
          applications. React is commonly used for single-page applications
          (SPAs) and can be combined with other libraries and frameworks to
          create full-featured web applications.
        </p>
        <h4 className="text-md font-semibold mb-2">React Native</h4>
        <p className="mb-2">
          React Native is a JavaScript framework for building native mobile
          applications. It allows you to write code once and deploy it on both
          iOS and Android platforms. React Native leverages React's
          component-based architecture and provides access to native APIs,
          resulting in a native-like performance and user experience. With React
          Native, you can develop mobile apps using familiar JavaScript and
          React concepts, saving time and effort.
        </p>
        <h4 className="text-md font-semibold mb-2">Vue.js</h4>
        <p className="mb-2">
          Vue.js is a progressive JavaScript framework that is gaining
          popularity due to its simplicity and ease of integration. It focuses
          on the view layer of an application and offers a reactive data-binding
          system. Vue.js provides comprehensive documentation, making it
          beginner-friendly and enabling developers to quickly build interactive
          and dynamic web interfaces.
        </p>
        <h4 className="text-md font-semibold mb-2">Angular</h4>
        <p className="mb-2">
          Angular is a full-featured JavaScript framework maintained by Google.
          It provides a complete solution for developing large-scale
          applications with features like dependency injection, routing, and
          state management. Angular follows the MVC (Model-View-Controller)
          architecture, making it suitable for complex projects requiring robust
          structure and maintainability.
        </p>

        <h4 className="text-md font-semibold mb-2">Node.js</h4>
        <p className="mb-2">
          Node.js is a JavaScript runtime environment that allows you to run
          JavaScript code on the server-side. It provides an event-driven,
          non-blocking I/O model, making it efficient and suitable for building
          scalable network applications. Node.js has a vast ecosystem of modules
          and frameworks, empowering developers to build backend services and
          APIs. It enables JavaScript-based full-stack development, where both
          frontend and backend use the same language.
        </p>
        <h4 className="text-md font-semibold mb-2">Next.js</h4>
        <p className="mb-2">
          Next.js is a popular React framework for building server-rendered,
          static, and hybrid web applications. It simplifies the setup and
          configuration process, offers powerful features like automatic code
          splitting and server-side rendering, and provides excellent
          performance and SEO benefits. Next.js seamlessly integrates with
          React, enabling developers to build complex applications with ease.
        </p>
        <h4 className="text-md font-semibold mb-2">Expo</h4>
        <p className="mb-2">
          Expo is a framework and platform for building universal applications
          using React Native. It provides a simplified workflow, allowing
          developers to create and deploy mobile applications without requiring
          complex native setup. Expo offers a wide range of APIs and services
          for common mobile app functionalities.
        </p>
        <h4 className="text-md font-semibold mb-2"> Express.js:</h4>
        <p className="mb-2">
          Express.js is a fast and minimalist web application framework for
          Node.js. It provides a robust set of features and tools for building
          web applications and APIs. Express.js follows the
          model-view-controller (MVC) architectural pattern, making it easy to
          organize and structure your code. With its simplicity and flexibility,
          Express.js has gained widespread popularity in the Node.js ecosystem.
        </p>
        <h4 className="text-md font-semibold mb-2">Pros and Cons</h4>
        <table className="border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">
                Library/Framework
              </th>
              <th className="border border-gray-300 px-4 py-2">Pros</th>
              <th className="border border-gray-300 px-4 py-2">Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">React</td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Component-based architecture</li>
                  <li>Efficient virtual DOM for optimal performance</li>
                  <li>Large and active community</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Steep learning curve for beginners</li>
                  <li>
                    Requires additional tools and libraries for advanced state
                    management
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Vue.js</td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Easy integration into existing projects</li>
                  <li>Simple syntax and intuitive API</li>
                  <li>Smooth learning curve</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Smaller ecosystem compared to React and Angular</li>
                  <li>Less community support for complex scenarios</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Angular</td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Comprehensive solution for large-scale applications</li>
                  <li>Strong typing and powerful tooling</li>
                  <li>Modular architecture and dependency injection</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Steep learning curve</li>
                  <li>Complexity for smaller projects</li>
                  <li>Performance overhead compared to lighter frameworks</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">React Native</td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Code once, deploy on multiple platforms</li>
                  <li>Native-like performance and user experience</li>
                  <li>Reuse of existing React knowledge and components</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Platform-specific code required for advanced features</li>
                  <li>Limited access to certain device capabilities</li>
                  <li>
                    Dependency on third-party libraries for complex scenarios
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Node.js</td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>JavaScript-based full-stack development</li>
                  <li>Efficient and scalable server-side applications</li>
                  <li>Large ecosystem of modules and frameworks</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Callback-heavy programming style</li>
                  <li>Concurrency limitations</li>
                  <li>Not suitable for CPU-intensive tasks</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Next.js</td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Server-rendering and static site generation</li>
                  <li>Automatic code splitting for optimized performance</li>
                  <li>Excellent SEO benefits</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Complexity for simple, single-page applications</li>
                  <li>Learning curve for beginners</li>
                  <li>
                    Integration with existing projects may require adjustments
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Expo</td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Simplified workflow for React Native development</li>
                  <li>Access to pre-built native components and APIs</li>
                  <li>Easy deployment and sharing of apps</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Dependency on the Expo platform</li>
                  <li>Limitations in accessing certain native functionality</li>
                  <li>
                    Less flexibility compared to custom React Native setup
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Express.js</td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>
                    Minimalistic and Lightweight that provides essential tools
                  </li>
                  <li>
                    Flexibility and Customization with middleware and plugins
                  </li>
                  <li>Active and Supportive Community</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  <li> Learning Curve</li>
                  <li>
                    Configuration Overhead,it leaves many decisions up to the
                    developer like database integration and security.
                  </li>
                  <li>Lack of Opinionation</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JavaScriptLibrariesAndFrameworks;

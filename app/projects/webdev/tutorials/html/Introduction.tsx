import Head from "next/head";
import React from "react";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});
const Introduction = () => {
  return (
    <>
      <Head>
        <title>Getting Started with HTML</title>
      </Head>
      <div className={`${lato} w-full bg-gray-900 text-white`}>
        {/* Introduction */}
        <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
          <h1 className="text-4xl font-bold mb-8 indent-0 text-center">
            Welcome to the HTML tutorial!
          </h1>
          <p className="mb-4 text-xl leading-loose tracking-normal">
            HTML is the standard markup language used to create web pages. It
            provides a means to create structured documents by denoting
            structural semantics for text such as headings, paragraphs, lists,
            links, quotes, and other items.
          </p>
          <p className="text-xl leading-loose">
            In this tutorial, we will cover the basics of HTML, including the
            basic structure of an HTML document, HTML elements, attributes, and
            more. By the end of the tutorial, you will have a solid foundation
            in HTML and be ready to create your own web pages and projects.
          </p>
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-200">
              Basic Structure of an HTML Document
            </h2>
            <p className="mt-2">
              Every HTML document must start with a document type declaration:{" "}
              <code className="bg-gray-800 px-1">{"<!DOCTYPE html>"}</code>
            </p>
            <pre className="bg-gray-800 rounded-md p-4 mt-2">
              {`<!DOCTYPE html>
   <html>
      <head>
          <title>Page Title</title>
      </head>
      <body>
          <h1>This is a Heading</h1>
          <p>This is a paragraph.</p>
      </body>
   </html>`}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;

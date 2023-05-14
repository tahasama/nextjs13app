import React from "react";

const WorkingWithLinksAndImages = () => {
  return (
    <div className={`mx-auto max-w-[68rem] p-4 w-full`}>
      <h2 className="text-xl font-bold mb-4">Working with Links and Images</h2>
      <p className="mb-2">
        Links and images are important elements in HTML. Here's how you can use
        them:
      </p>
      <h3 className="text-lg font-semibold mb-2">Links</h3>
      <p className="mb-2">
        To create a link, use the <code>&lt;a&gt;</code> tag with the{" "}
        <code>href</code> attribute:
      </p>
      <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
        {`<a href="https://www.example.com">Example Link</a>`}
      </pre>
      <p className="mb-2">
        You can also use the <code>target</code> attribute to specify where the
        link should open:
      </p>
      <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
        {`<a href="https://www.example.com" target="_blank">Open in New Tab</a>`}
      </pre>
      <h3 className="text-lg font-semibold mb-2">Images</h3>
      <p className="mb-2">
        To add an image, use the <code>&lt;img&gt;</code> tag with the{" "}
        <code>src</code> attribute:
      </p>
      <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
        {`<img src="https://www.example.com/image.jpg" alt="Example Image">`}
      </pre>
      <p className="mb-2">
        You can also use the <code>width</code> and <code>height</code>{" "}
        attributes to resize the image:
      </p>
      <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
        {`<img src="https://www.example.com/image.jpg" alt="Example Image" width="400" height="300">`}
      </pre>
    </div>
  );
};

export default WorkingWithLinksAndImages;

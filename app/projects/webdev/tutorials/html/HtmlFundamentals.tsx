import React from "react";

const HtmlFundamentals = () => {
  return (
    <div className={`mx-auto max-w-[68rem] p-4  w-full`}>
      <h1 className="text-3xl font-semibold my-3">HTML Fundamentals</h1>
      <h2 className="text-xl font-bold mb-4">Text Formatting and Styles</h2>
      <p className="mb-2">
        HTML allows you to format and style text using various tags and
        attributes. Here are some examples:
      </p>
      <ul className="list-disc list-inside mb-4 indent-3">
        <li>
          <strong>&lt;b&gt;</strong> - bold text
        </li>
        <li>
          <em>&lt;em&gt;</em> - italicized text
        </li>
        <li>
          <u>&lt;u&gt;</u> - underlined text
        </li>
        <li>
          <s>&lt;s&gt;</s> - strikethrough text
        </li>
      </ul>

      <p className="mb-2">You can also use CSS to style your HTML text:</p>
      <ul className="list-disc list-inside mb-4 indent-3">
        <li>
          <strong>font-size:</strong> to change the size of the text
        </li>
        <li>
          <strong>color:</strong> to change the color of the text
        </li>
        <li>
          <strong>text-align:</strong> to align the text
        </li>
        <li>
          <strong>text-decoration:</strong> to add or remove text decoration
          like underline or line-through
        </li>
      </ul>
      {/* <h1 className="text-3xl font-semibold my-3">Important HTML Tags</h1> */}
      <h2 className="text-xl font-bold mb-4">Important HTML Tags</h2>

      <p className="mb-4">
        HTML is the foundation of the web and it is made up of many different
        tags that help to structure and format content. Here are some of the
        most important HTML tags that you should be familiar with:
      </p>
      <h2 className="text-xl font-bold my-3">Paragraphs</h2>
      <p className="mb-4">
        The <code>&lt;p&gt;</code> tag is used to define a paragraph of text. It
        is a block-level element, which means that it creates a new line and a
        new block of content. Paragraphs are commonly used to group together
        related text content.
      </p>
      <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
        {`
        <p>This is a paragraph</p>
        `}
      </pre>
      <h2 className="text-xl font-bold my-3">Headings</h2>
      <p className="mb-4">
        Headings are used to provide structure and hierarchy to your content.
        There are six levels of headings, from <code>&lt;h1&gt;</code> to
        <code>&lt;h6&gt;</code>, with <code>&lt;h1&gt;</code> being the most
        important and <code>&lt;h6&gt;</code> being the least important.
        Headings should be used to organize your content and make it more
        readable.
      </p>

      <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
        {`
        <h1>This is h1 the biggest heading size</h1>
        `}
      </pre>
      <p>examples:</p>
      <h1 className="text-3xl">This is h1</h1>
      <h2 className="text-2xl">This is h2</h2>
      <h3 className="text-xl">This is h3</h3>
      <h2 className="text-xl font-bold my-3">Divisions</h2>
      <p className="mb-4">
        The <code>&lt;div&gt;</code> tag is used to create a section of content
        that can be styled and positioned independently from the rest of the
        document. It is a container element that is often used to group together
        related content or create layout structures.
      </p>
      <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
        {`
        <div>This is a div</div>
        `}
      </pre>
      <h2 className="text-xl font-bold my-3">Spans</h2>
      <p className="mb-4">
        The <code>&lt;span&gt;</code> tag is similar to the{" "}
        <code>&lt;div&gt;</code> tag in that it is a container element. However,
        the <code>&lt;span&gt;</code> tag is an inline-level element, which
        means that it does not create a new line or a new block of content.
        Instead, it is used to apply styles or manipulate small sections of
        content within a larger block.
      </p>
      <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
        {`
        <span>This is a span</span>
        `}
      </pre>
    </div>
  );
};

export default HtmlFundamentals;

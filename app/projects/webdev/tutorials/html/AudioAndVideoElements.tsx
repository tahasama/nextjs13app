import React from "react";

const AudioAndVideoElements = () => {
  return (
    <div className="mx-auto max-w-[68rem] p-4 w-full">
      <h2 className="text-2xl font-semibold mb-4">
        HTML5 Audio and Video Elements
      </h2>
      <p className="mb-2">
        HTML5 introduced the <strong>&lt;audio&gt;</strong> and{" "}
        <strong>&lt;video&gt;</strong> elements for embedding media in web
        pages.
      </p>
      <h3 className="text-xl font-bold my-2">Audio Element</h3>
      <p className="mb-2">
        The <strong>&lt;audio&gt;</strong> element is used to embed audio
        content in a web page. It supports various attributes such as src,
        controls, autoplay, loop, and more.
      </p>
      <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
        {`      <audio src="/path/to/audio.mp3" controls></audio>`}{" "}
      </pre>
      <audio src="/path/to/audio.mp3" controls></audio>
      <h3 className="text-xl font-bold my-2">Video Element</h3>
      <p className="mb-2">
        The <strong>&lt;video&gt;</strong> element is used to embed video
        content in a web page. It supports various attributes such as src,
        controls, autoplay, loop, width, height, and more.
      </p>
      <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
        {`      <video src="/path/to/video.mp4" controls width="640" height="360"></video>`}
      </pre>
      <video src="/path/to/video.mp4" controls width="640" height="360"></video>
    </div>
  );
};

export default AudioAndVideoElements;

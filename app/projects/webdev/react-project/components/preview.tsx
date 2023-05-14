import { useRef, useEffect } from "react";

interface PreviewProps {
  code: string;
  err: string;
  handleWidth: number;
}

const html = `
  <html>
    <head>
      <style>html { background-color: white; }</style>
    </head>
    <body>
      <div id="root"></div>
      <script>
        // Handle runtime errors by displaying a message in the iframe
       
        const handleError = (err) => {
          const root = document.querySelector('#root');
          root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
          console.error(err);
        };
        
        // Check if the window object is defined before using it
        if (typeof window !== "undefined") {
          // Listen for errors and handle them
          window.addEventListener('error', (event) => {
            event.preventDefault();
            handleError(event.error);
          });

          // Listen for messages from the parent window and evaluate the code
          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch (err) {
              handleError(err);
            }
          }, false);
        }
      </script>
    </body>
  </html>
`;

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    // Set the iframe source to the HTML string
    iframe.current.srcdoc = html;

    // Wait for the iframe to load, then post the code to it
    const timer = setTimeout(() => {
      typeof window !== "undefined" &&
        iframe.current.contentWindow.postMessage(code, "*");
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [code]);

  return (
    <div className={`preview-wrapper w-20`}>
      <iframe
        title="preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {err && <div className="preview-error">{err}</div>}
    </div>
  );
};

export default Preview;

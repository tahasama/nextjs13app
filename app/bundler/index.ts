import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { fetchPlugin } from "./plugins/fetch-plugin";

// Initialize the esbuild service
let service: esbuild.Service;

// Async function that takes in rawCode as a string parameter and returns a Promise
// The Promise resolves to an object containing code and err properties
const bundle = async (rawCode: string) => {
  // If the service is not initialized, start it with esbuild.startService()
  if (!service) {
    service = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
    });
  }

  try {
    // Call service.build() to bundle the code and apply the provided plugins and options
    const result = await service.build({
      entryPoints: ["index.js"], // entry point of the code to bundle
      bundle: true, // bundle the code and all its dependencies into a single file
      write: false, // do not write the output to a file
      plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)], // custom plugins to apply during bundling
      define: {
        "process.env.NODE_ENV": '"production"',
        global: "window",
      }, // define global constants to replace at compile-time
    });

    // Return the bundled code and no error message
    return {
      code: result.outputFiles[0].text,
      err: "",
    };
  } catch (err: any) {
    // Return an empty code and the error message if there is any error during bundling
    return {
      code: "",
      err: err.message,
    };
  }
};

// Export the bundle function as the default export
export default bundle;

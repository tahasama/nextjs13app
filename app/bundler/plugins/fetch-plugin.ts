import * as esbuild from "esbuild-wasm"; // import the esbuild-wasm library
import axios from "axios"; // import the axios library for HTTP requests
import localForage from "localforage"; // import the localforage library for client-side caching

// Create a new instance of localForage with a specific name for file caching
const fileCache = localForage.createInstance({
  name: "filecache",
});

// Define a fetchPlugin function that takes in a string of input code
export const fetchPlugin = (inputCode: string) => {
  return {
    name: "fetch-plugin", // Set the name of the plugin
    setup(build: esbuild.PluginBuild) {
      // Register a new onLoad hook with esbuild to handle loading of specific files
      build.onLoad({ filter: /(^index\.js$)/ }, () => {
        // If the file is named 'index.js', return the inputCode as the contents of the file
        return {
          loader: "jsx",
          contents: inputCode,
        };
      });

      build.onLoad({ filter: /.*/ }, async (args: any) => {
        // For all other files, first check if there is a cached version of the file
        const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
          args.path
        );

        if (cachedResult) {
          // If a cached version exists, return it
          return cachedResult;
        }
      });

      build.onLoad({ filter: /.css$/ }, async (args: any) => {
        // If the file has a .css extension, use axios to fetch the contents of the file
        const { data, request } = await axios.get(args.path);

        // Escape the contents of the CSS file to be used as a string in a JavaScript file
        const escaped = data
          .replace(/\n/g, "")
          .replace(/"/g, '\\"')
          .replace(/'/g, "\\'");

        // Create a new JavaScript file with a style tag containing the escaped CSS contents
        const contents = `
          const style = document.createElement('style');
          style.innerText = '${escaped}';
          document.head.appendChild(style);
        `;

        // Create an esbuild onLoad result object with the contents of the JavaScript file
        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents,
          resolveDir: new URL("./", request.responseURL).pathname,
        };

        // Store the result of the onLoad hook in local storage for future caching
        await fileCache.setItem(args.path, result);

        return result;
      });

      build.onLoad({ filter: /.*/ }, async (args: any) => {
        // For all other files, use axios to fetch the contents of the file
        const { data, request } = await axios.get(args.path);

        // Create an esbuild onLoad result object with the contents of the file
        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents: data,
          resolveDir: new URL("./", request.responseURL).pathname,
        };

        // Store the result of the onLoad hook in local storage for future caching
        await fileCache.setItem(args.path, result);

        return result;
      });
    },
  };
};

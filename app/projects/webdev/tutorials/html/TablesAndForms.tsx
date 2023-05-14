import React from "react";

const TablesAndForms = () => {
  return (
    <div className={`mx-auto max-w-[68rem] p-4  w-full`}>
      <h2 className="text-2xl font-bold mb-4">Tables</h2>

      <p className="mb-2">
        Tables are used to display data in rows and columns:
      </p>
      <table className="w-full table-auto mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John Smith</td>
            <td className="border px-4 py-2">35</td>
            <td className="border px-4 py-2">john@example.com</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane Doe</td>
            <td className="border px-4 py-2">28</td>
            <td className="border px-4 py-2">jane@example.com</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Bob Johnson</td>
            <td className="border px-4 py-2">42</td>
            <td className="border px-4 py-2">bob@example.com</td>
          </tr>
        </tbody>
      </table>
      <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
        {`
          <table>
           <thead>
             <tr>
               <th>Name</th>
               <th>Age</th>
               <th>Email</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>John Smith</td>
               <td>35</td>
               <td>john@example.com</td>
             </tr>
             <tr>
               <td>Jane Doe</td>
               <td>28</td>
               <td>jane@example.com</td>
             </tr>
             <tr>
               <td>Bob Johnson</td>
               <td>42</td>
               <td>bob@example.com</td>
             </tr>
           </tbody>
         </table>`}
      </pre>
      <h2 className="text-2xl font-bold mb-4">Forms</h2>

      <p className="mb-2">Forms are used to collect user input:</p>
      <form className="mb-4">
        <label htmlFor="name" className="block mb-2 font-bold">
          Name:
        </label>
        <input type="text" id="name" name="name" className="w-full p-2 mb-4" />

        <label htmlFor="email" className="block mb-2 font-bold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 mb-4"
        />

        <label htmlFor="password" className="block mb-2 font-bold">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full p-2 mb-4"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
        {`
         <form>
         <label htmlFor="name">
           Name:
         </label>
         <input type="text" id="name" name="name" />
 
         <label htmlFor="email">
           Email:
         </label>
         <input
           type="email"
           id="email"
           name="email"
         />
 
         <label htmlFor="password">
           Password:
         </label>
         <input
           type="password"
           id="password"
           name="password"
         />
 
         <button
           type="submit"
         >
           Submit
         </button>
       </form>`}
      </pre>
    </div>
  );
};

export default TablesAndForms;

"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
import image0 from "../../../../../images/matplotlib/0.png";
import image1 from "../../../../../images/matplotlib/1.png";
import image2 from "../../../../../images/matplotlib/2.png";
import image3 from "../../../../../images/matplotlib/3.png";
import image4 from "../../../../../images/matplotlib/4.png";
import image5 from "../../../../../images/matplotlib/5.png";
import image6 from "../../../../../images/matplotlib/6.png";
import image7 from "../../../../../images/matplotlib/7.png";
import image8 from "../../../../../images/matplotlib/8.png";

const Matplotlib = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10  w-full">
      <Head>
        <title>Matplotlib Tutorial | My Website</title>
        <meta
          name="description"
          content="Learn how to use Matplotlib for data visualization in Python with this tutorial."
        />
      </Head>
      <button
        className={`${
          ShowSection ? "sticky top-20 bg-slate-500" : ""
        } flex flex-row items-start justify-between md:text-2xl text-xl md:min-w-[33.3rem] min-w-full
          font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Matplotlib
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${
          !ShowSection ? "hidden" : "visible"
        } indent-10 mb-8  mt-3`}
      >
        <p className="text-write mb-5">
          Matplotlib is a powerful library for creating visualizations in
          Python. It provides a wide range of options for customizing the
          appearance of your plots and charts. In this tutorial, we'll cover the
          basics of using Matplotlib for data visualization.
        </p>
        <h2 className="text-2xl font-bold mb-5">Introduction to Matplotlib</h2>
        <p className="text-write mb-5">
          Matplotlib is a 2D plotting library that allows you to create a wide
          range of charts and plots. It was created by John Hunter in 2003 as a
          way to replicate the plotting capabilities of MATLAB in Python. Since
          then, it has become one of the most popular data visualization
          libraries in the Python ecosystem.
        </p>
        <h2 className="text-2xl font-bold mb-5">Basic plots and charts</h2>
        <p className="text-write mb-5">
          Let's start by creating a simple line chart using Matplotlib. Here's
          the code:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 flex flex-col md:flex-row justify-between  overflow-auto">
          <code>
            {`
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 5, 20, 8]

plt.plot(x, y)
plt.show()
        `}
          </code>
          <Image
            src={image0}
            width={450}
            height={450}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>
        <p className="text-write mb-5">
          In this example, we're using the <code>plot</code> function to create
          a line chart. The first argument is the x-axis values, and the second
          argument is the y-axis values. When we call <code>plt.show()</code>, a
          window will appear with our chart displayed.
        </p>
        <p className="text-write mb-5">
          We can customize our chart by adding a title, axis labels, and
          changing the style of the line. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 flex md:flex-row flex-col justify-between overflow-auto">
          <code>
            {`
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 5, 20, 8]

plt.plot(x, y, color="red", linestyle="--")
plt.title("My Line Chart")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.show()
        `}
          </code>
          <Image
            src={image1}
            width={450}
            height={450}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>
        <p className="text-write mb-5">
          In this example, we've added a title to our chart with the{" "}
          <code>title</code> function, and axis labels with the{" "}
          <code>xlabel</code> and <code>ylabel</code> functions. We've also
          changed the color of the line to red using the <code>color</code>{" "}
          parameter, and set the size of the plot to 8 inches by 5 inches using
          the <code>figure</code> function.
        </p>
        <p className="text-write mb-5">
          In this example, we've added a title to our chart with the{" "}
          <code>title</code> function, and axis labels with the{" "}
          <code>xlabel</code> and <code>ylabel</code> functions. We've also
          changed the font size of the title and axis labels using the{" "}
          <code>fontsize</code> parameter, and adjusted the axis limits using
          the <code>xlim</code> and <code>ylim</code>
          functions.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 flex md:flex-row flex-col justify-between overflow-auto">
          <code>
            {`
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 5, 20, 8]

plt.figure(figsize=(8, 5))
plt.plot(x, y, color="red")
plt.title("My Line Chart", fontsize=18)
plt.xlabel("X-axis", fontsize=14)
plt.ylabel("Y-axis", fontsize=14)
plt.xlim(0, 5)
plt.ylim(0, 25)
plt.show()
          `}
          </code>
          <Image
            src={image2}
            width={450}
            height={450}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>
        <p className="text-write mb-5">
          Scatter Plots: Scatter plots are used to display the relationship
          between two variables. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 flex md:flex-row flex-col justify-between overflow-auto">
          <code>
            {`
import matplotlib.pyplot as plt
import numpy as np

x = np.random.normal(0, 1, 100)
y = 2*x + np.random.normal(0, 1, 100)

# Create a scatter plot of the data
plt.scatter(x, y)

# Add a title and axis labels
plt.title("Scatter Plot of Data")
plt.xlabel("X")
plt.ylabel("Y")

# Display the plot
plt.show()

          `}
          </code>
          <Image
            src={image3}
            width={450}
            height={450}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>
        <p className="text-write mb-5">
          Bar Charts: Bar charts are used to compare values across different
          categories. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 flex md:flex-row flex-col justify-between overflow-auto">
          <code>
            {`
import matplotlib.pyplot as plt

# Data
labels = ['A', 'B', 'C', 'D', 'E']
values = [10, 24, 36, 54, 29]

# Create bar chart
plt.bar(labels, values)
plt.title('Bar Chart')
plt.xlabel('Categories')
plt.ylabel('Values')
plt.show()


          `}
          </code>
          <Image
            src={image4}
            width={450}
            height={450}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>
        <p className="text-write mb-5">
          Pie Charts: Pie charts are used to show the proportion of different
          categories in a dataset. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 flex md:flex-row flex-col justify-between overflow-auto">
          <code>
            {`
import matplotlib.pyplot as plt

# Data
labels = ['A', 'B', 'C', 'D']
sizes = [15, 30, 45, 10]

# Create pie chart
plt.pie(sizes, labels=labels, autopct='%1.1f%%')
plt.title('Pie Chart')
plt.show()
          `}
          </code>
          <Image
            src={image5}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>

        <p className="text-write mb-5">
          Heatmaps: Heatmaps are used to show the distribution of data across a
          2D grid. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 flex md:flex-row flex-col justify-between overflow-auto">
          <code>
            {`
import matplotlib.pyplot as plt
import numpy as np

# Generate random data
data = np.random.randn(10, 10)

# Create heatmap
plt.imshow(data, cmap='viridis')
plt.colorbar()
plt.title('Heatmap')
plt.show()
          `}
          </code>
          <Image
            src={image6}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>

        <p className="text-write mb-5">
          Histograms: Histograms are used to visualize the distribution of a
          dataset. You can create a histogram using the hist() function in
          Matplotlib. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 flex md:flex-row flex-col justify-between overflow-auto">
          <code>
            {`
import matplotlib.pyplot as plt
import numpy as np

# Create some data
data = np.random.normal(0, 1, 1000)

# Create a histogram of the data
plt.hist(data, bins=30)

# Add a title and axis labels
plt.title("Histogram of Data")
plt.xlabel("Value")
plt.ylabel("Frequency")

# Display the plot
plt.show()

          `}
          </code>
          <Image
            src={image7}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>

        <p className="text-write mb-5">
          Box plots: Box plots are used to visualize the distribution of a
          dataset and identify outliers. You can create a box plot using the
          boxplot() function in Matplotlib. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 overflow-auto flex md:flex-row flex-col justify-between">
          <code>
            {`
import matplotlib.pyplot as plt
import numpy as np

# Create some data
data = [np.random.normal(0, 1, 100), np.random.normal(2, 1, 100),
       np.random.normal(5, 1, 100)]

# Create a box plot of the data
plt.boxplot(data)

# Add a title and axis labels
plt.title("Box Plot of Data")
plt.xticks([1, 2, 3], ["Group 1", "Group 2", "Group 3"])
plt.ylabel("Value")

# Display the plot
plt.show()


          `}
          </code>
          <Image
            src={image8}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>
      </div>
    </div>
  );
};

export default Matplotlib;

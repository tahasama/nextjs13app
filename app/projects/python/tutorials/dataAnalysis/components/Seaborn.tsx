"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
import image0 from "../../../../../images/matplotlib/00.png";
import image1 from "../../../../../images/matplotlib/11.png";
import image2 from "../../../../../images/matplotlib/22.png";
import image3 from "../../../../../images/matplotlib/33.png";
import image4 from "../../../../../images/matplotlib/44.png";
import image5 from "../../../../../images/matplotlib/55.png";
import image6 from "../../../../../images/matplotlib/66.png";
import image7 from "../../../../../images/matplotlib/77.png";
import image8 from "../../../../../images/matplotlib/88.png";
import image9 from "../../../../../images/matplotlib/99.png";

const Seaborn = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10  w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
        font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Seaborn
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
        <p className=" my-4">
          Seaborn is a Python data visualization library based on Matplotlib. It
          provides a high-level interface for creating informative and
          attractive statistical graphics. In this section, we'll explore some
          of the basic visualization techniques that Seaborn has to offer.
        </p>
        <h2 className="text-2xl font-bold my-4">Introduction to Seaborn</h2>
        <p className=" my-4">
          Seaborn is built on top of Matplotlib and integrates closely with the
          data structures from Pandas. It provides several built-in themes and
          color palettes to make it easy to create aesthetically pleasing
          visualizations.
        </p>
        <h2 className="text-2xl font-bold my-4">Statistical Visualization</h2>
        <p className=" my-4">
          Seaborn provides several types of plots for visualizing statistical
          data. These include:
        </p>
        <ul className="list-disc list-inside my-4">
          <li>Histograms</li>
          <li>Density plots</li>
          <li>Box plots</li>
          <li>Violin plots</li>
          <li>Bar plots</li>
          <li>Count plots</li>
        </ul>
        <h3 className="text-xl font-bold my-4">Histograms</h3>
        <p className=" my-4">
          A histogram is a graphical representation of the distribution of a
          numerical dataset. Here's an example using Seaborn's built-in "tips"
          dataset:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 overflow-auto flex md:flex-row flex-col justify-between">
          <code>
            {`import seaborn as sns

# load sample data
tips_data = sns.load_dataset('tips')

# create a histogram
sns.histplot(data=tips_data, x='total_bill', bins=10)

# show the plot
plt.show()
`}{" "}
          </code>
          <Image
            src={image1}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>
        {/* <Image
        src="/seaborn-histogram.png"
        alt="Seaborn Histogram Example"
        width={600}
        height={400}
        className="my-4"
      /> */}
        <p className=" my-4">
          In this example, we've used the <code>distplot</code> function to plot
          the distribution of the "total_bill" column in the tips dataset. The{" "}
          <code>kde</code> parameter controls whether to show the kernel density
          estimate plot or not.
        </p>
        <h3 className="text-xl font-bold my-4">Density plots</h3>
        <p className=" my-4">
          A density plot is a type of data visualization that shows the
          distribution of a set of continuous data by estimating the probability
          density function of the underlying variable. It is a smoothed version
          of a histogram, and is useful for identifying the shape of the
          distribution, detecting outliers, and comparing different
          distributions.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 overflow-auto flex md:flex-row flex-col justify-between">
          <code>
            {`import matplotlib.pyplot as plt
import numpy as np

plt.close('all')

import seaborn as sns

# load sample data
tips_data = sns.load_dataset('tips')

# create a density plot
sns.kdeplot(data=tips_data, x='total_bill')

# display the plot
plt.show()

`}{" "}
          </code>{" "}
          <Image
            src={image2}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>
        {/* <Image
        src="/seaborn-density.png"
        alt="Seaborn Density Plot Example"
        width={600}
        height={400}
        className="my-4"
      /> */}
        <p className=" my-4">
          In this example, we've used the <code>kdeplot</code> function to plot
          the kernel density estimate of the "total_bill" column in the tips
          dataset.
        </p>
        <h3 className="text-xl font-bold my-4">Box plots</h3>
        <p className=" my-4">
          A box plot is a type of data visualization that displays the
          distribution of a set of continuous data through their quartiles. It
          is useful for identifying outliers, comparing distributions, and
          detecting skewness.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 overflow-auto flex md:flex-row flex-col justify-between">
          <code>
            {`
        import seaborn as sns
        # load sample data
        tips_data = sns.load_dataset('tips')
        
        # create a box plot
        sns.boxplot(data=tips_data, x='day', y='total_bill')
        `}
          </code>{" "}
          <Image
            src={image3}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>
        <h3 className="text-xl font-bold my-4">violin plot</h3>
        <p className=" my-4">
          A violin plot is a type of data visualization that combines aspects of
          a box plot and a kernel density plot to show the distribution of a set
          of continuous data. It is useful for identifying the shape and spread
          of the distribution, comparing multiple distributions, and detecting
          outliers.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 overflow-auto flex md:flex-row flex-col justify-between">
          <code>
            {`
import matplotlib.pyplot as plt
import seaborn as sns

# load sample data
tips_data = sns.load_dataset('tips')

# create a violin plot
sns.violinplot(data=tips_data, x='day', y='total_bill')

# display the plot
plt.show()


        `}
          </code>{" "}
          <Image
            src={image4}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>
        <h3 className="text-xl font-bold my-4">bar plot</h3>
        <p className=" my-4">
          A bar plot is a type of data visualization that displays the values of
          a categorical variable as bars. It is useful for comparing the
          frequencies or values of different categories.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 overflow-auto flex md:flex-row flex-col justify-between">
          <code>
            {`
import seaborn as sns
import matplotlib.pyplot as plt

# Load example dataset
tips = sns.load_dataset("tips")

# Create bar plot
sns.barplot(x="day", y="total_bill", data=tips)

# Set plot title and axis labels
plt.title("Total Bill by Day")
plt.xlabel("Day of the Week")
plt.ylabel("Total Bill ($)")


        `}
          </code>{" "}
          <Image
            src={image5}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>
        <h3 className="text-xl font-bold my-4">count plot</h3>
        <p className=" my-4">
          A count plot is a type of bar plot that shows the frequency of
          observations in each category of a categorical variable. It is similar
          to a histogram, but for categorical rather than continuous data.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 overflow-auto flex md:flex-row flex-col justify-between">
          <code>
            {`

import seaborn as sns
import matplotlib.pyplot as plt

# Load the dataset
tips = sns.load_dataset("tips")

# Create the count plot
sns.countplot(x="day", data=tips)

# Add a title and labels
plt.title("Count of Tips by Day")
plt.xlabel("Day of the Week")
plt.ylabel("Count of Tips")

# Display the plot
plt.show()

        `}
          </code>{" "}
          <Image
            src={image6}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>
        <h3 className="text-xl font-bold my-4">Line plot</h3>
        <p className=" my-4">
          A type of data visualization that displays data as a series of data
          points connected by straight lines. It helps to identify trends,
          patterns, and relationships between variables over time. Seaborn
          provides the lineplot() function to plot line plots.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 overflow-auto flex md:flex-row flex-col justify-between">
          <code>
            {`
import seaborn as sns
import matplotlib.pyplot as plt

# create sample data
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# create line plot
sns.lineplot(x=x, y=y)

# set plot title and labels
plt.title('Line Plot Example')
plt.xlabel('X-axis label')
plt.ylabel('Y-axis label')

# show plot
plt.show()


  `}
          </code>{" "}
          <Image
            src={image7}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>
        <h3 className="text-xl font-bold my-4">Scatter plot</h3>
        <p className=" my-4">
          A graphical representation of the relationship between two variables
          in a dataset. It helps to identify patterns in the data, relationships
          between variables, and outliers. Seaborn provides the scatterplot()
          function to plot scatter plots.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 overflow-auto flex md:flex-row flex-col justify-between">
          <code>
            {`
import seaborn as sns
import matplotlib.pyplot as plt
# load data
tips = sns.load_dataset("tips")

# create scatter plot using seaborn
sns.scatterplot(data=tips, x="total_bill", y="tip")

# set plot title and axis labels
plt.title("Total Bill vs. Tip")
plt.xlabel("Total Bill")
plt.ylabel("Tip")

# display the plot
plt.show()


`}
          </code>{" "}
          <Image
            src={image8}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>{" "}
        <h3 className="text-xl font-bold my-4">Pair plot</h3>
        <p className=" my-4">
          A type of data visualization that shows the pairwise relationships
          between variables in a dataset. It helps to identify patterns and
          relationships between variables in a dataset. Seaborn provides the
          pairplot() function to plot pair plots.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 overflow-auto flex md:flex-row flex-col justify-between">
          <code>
            {`
import seaborn as sns
import pandas as pd

# Load dataset
iris = sns.load_dataset("iris")

# Create pair plot
sns.pairplot(iris, hue="species")


`}
          </code>{" "}
          <Image
            src={image9}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>{" "}
        <h3 className="text-xl font-bold my-4">Heatmaps</h3>
        <p className=" my-4">
          A type of data visualization that displays the correlation between
          variables in a dataset as a color-encoded matrix. It is useful for
          identifying patterns and relationships between variables in a dataset.
          Seaborn provides the heatmap() function to plot heatmaps.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 overflow-auto flex md:flex-row flex-col justify-between">
          <code>
            {`

import seaborn as sns
import pandas as pd

df = sns.load_dataset('tips')
mapping = {'No':1,'Yes':2}
mapping1 = {'Female':1,'Male':2}
mapping2 = {'Sun':1,'Mon':2}
mapping3 = {'Dinner':1,'Lunch':2}

df['smoker']= df['smoker'].map(mapping)
df['day']= df['day'].map(mapping2)
df['time']= df['time'].map(mapping3)
df['sex']= df['sex'].map(mapping1)

sns.heatmap(df.corr(), annot=True, cmap='coolwarm')

`}
          </code>{" "}
          <Image
            src={image0}
            width={450}
            height={400}
            alt="Picture of the author"
            className="brightness-90"
          />
        </pre>{" "}
      </div>
    </div>
  );
};

export default Seaborn;

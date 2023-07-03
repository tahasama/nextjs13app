"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const Pandas = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <>
      <Head>
        <title>Data Manipulation with Pandas</title>
      </Head>
      <div className="mx-auto max-w-[68rem] p-8 indent-10  w-full">
        <button
          className={`${
            ShowSection ? "sticky top-20 bg-slate-500" : ""
          } flex flex-row items-start justify-between md:text-2xl text-xl md:min-w-[33.3rem] min-w-full
          font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
          onClick={() => setShowSection(!ShowSection)}
        >
          Pandas{" "}
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
          <h1 className="text-4xl font-bold mb-8 indent-0 text-center"></h1>

          {/* Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Introduction to Pandas</h2>
            <p className="mb-4 text-xl leading-loose">
              Pandas is a Python library used for data manipulation and
              analysis. It provides data structures and functions needed to work
              on structured data seamlessly. Pandas is built on top of the NumPy
              library and is used for tasks such as data cleaning, data
              transformation, data analysis, and data visualization.
            </p>
          </div>

          {/* Loading data into Pandas */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Loading data into Pandas
            </h2>
            <p className="mb-4 text-xl leading-loose">
              To work with data using Pandas, you first need to load it into a
              Pandas DataFrame. Here's an example of how to load a CSV file into
              a DataFrame:
            </p>
            <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0  overflow-auto">
              <code>
                {`
        import pandas as pd
        
        df = pd.read_csv('data.csv')
        # It is possible to use a dowloaded dataset (.svc) like "df = pd.read_csv('Users/Some_folder/data.csv')"
        # it is also possible to get it from url directly :
        df = pd.read_csv('https://archive.ics.uci.edu/ml/machine-learning-databases/car/car.data')

        # load data from an Excel file
df = pd.read_excel('data.xlsx')

# load data from a JSON file
df = pd.read_json('data.json')

# display the first 5 rows
print(df.head())

# display the last 5 rows
print(df.tail())

# display information about the DataFrame
print(df.info())

        `}
              </code>
            </pre>
          </div>

          {/* Data cleaning and preparation */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Data cleaning and preparation
            </h2>
            <p className="mb-4 text-xl leading-loose">
              Before starting any data analysis, it's important to clean and
              prepare the data. Here are some common data cleaning and
              preparation tasks you can perform using Pandas:
            </p>
            <ul className="list-disc pl-6 text-xl mb-6">
              <li>Removing missing or duplicate values</li>
              <li>Renaming columns</li>
              <li>Changing data types</li>
              <li>Dealing with outliers</li>
            </ul>
            <p className="mb-4 text-xl leading-loose">Here's some examples :</p>
            <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0  overflow-auto">
              <code>
                {`     
      # remove rows with missing values
      df = df.dropna() `}
              </code>
            </pre>
            <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0  overflow-auto">
              <code>
                {`  # remove duplicate rows
      df = df.drop_duplicates() `}
              </code>
            </pre>
            <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0  overflow-auto">
              <code>
                {`  # rename columns
      df = df.rename(columns={'old_col_name_1': 'new_col_name_1', 'old_col_name_2': 'new_col_name_2'}) `}
              </code>
            </pre>
            <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0  overflow-auto">
              <code>
                {`  # change data type of a column
      df['some_col_name'] = df['some_col_name'].astype(float) `}
              </code>
            </pre>
            <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0  overflow-auto">
              <code>
                {` # deal with outliers by removing any rows that fall outside of a certain range
      q1 = df['some_col_name'].quantile(0.25)
      q3 = df['some_col_name'].quantile(0.75)
      iqr = q3 - q1
      lower_bound = q1 - (1.5 * iqr)
      upper_bound = q3 + (1.5 * iqr)
      df = df[(df['some_col_name'] > lower_bound) & (df['some_col_name'] < upper_bound)]
        `}
              </code>
            </pre>
          </div>

          {/* Data indexing and selection */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Data indexing and selection
            </h2>
            <p className="mb-4 text-xl leading-loose">
              Once the data is loaded and cleaned, you can start analyzing it.
              Here's some examples of how to select from a DataFrame:
            </p>
            <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0  overflow-auto">
              <code>
                {`
# select a single column
col1 = df['buying_price']

# select multiple columns
cols = df[['buying_price', 'maint_price']]

# select rows based on a condition
subset = df[df['safety'] == 'high']

# select rows based on multiple conditions
subset = df[(df['buying_price'] == 'high') & (df['doors'] == 2)]

# select rows and columns using the loc method
subset = df.loc[df['lug_boot'] == 'big', ['buying_price', 'maint_price']]

# select rows and columns using the iloc method
subset = df.iloc[1:5, 0:2]

# set a value in a specific cell
df.loc[0, 'buying_price'] = 'low'

# set values in a specific column based on a condition
df.loc[df['buying_price'] == 'high', 'maint_price'] = 'low'

# create a new column based on existing columns
df['new_col'] = df['buying_price'] + "_" + df['maint_price']

      
        `}
              </code>
            </pre>
          </div>

          {/* Data aggregation and grouping */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Data aggregation and grouping
            </h2>
            <p className="mb-4 text-xl leading-loose">
              You can also perform data aggregation and grouping using Pandas.
              Here's an example of how to group data by a specific column and
              compute the mean of another column:
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Grouping by a column</h3>
              <p className="mb-4 text-lg leading-loose">
                Let's group the data by the 'buying' column and compute the mean
                of the 'safety' column:
              </p>
              <pre className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto ">
                {`import pandas as pd

# Load the car evaluation dataset
url = 'https://archive.ics.uci.edu/ml/machine-learning-databases/car/car.data'
names = ['buying', 'maint', 'doors', 'persons', 'lug_boot', 'safety', 'class']
df = pd.read_csv(url, names=names)

# Define a mapping dictionary
mapping = {'low': 1, 'med': 2, 'high': 3}

# Map the values to numbers using the mapping dictionary
df['buying'] = df['buying'].map(mapping)
df['safety'] = df['safety'].map(mapping)


# Group the data by the 'buying' column and compute the mean of the 'safety' column
grouped = df.groupby(['buying'])['safety'].mean()
print(grouped)`}
              </pre>
              <p className="my-4 text-lg leading-loose">
                The output will be a Pandas Series object with the mean safety
                ratings for each buying category:
              </p>
              <pre className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto">
                {`buying
high     2.366336
low      2.413924
med      2.360986
vhigh    2.375271
Name: safety, dtype: float64`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pandas;

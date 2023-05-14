export const example1 = `
const App = () => {
const [clicked, setClicked] = useState(false);
return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => setClicked(!clicked)}>Click!</button>
      {clicked && <p>Lets start Coding!!</p>}
    </div>
  );
};

export default App;
                        `;
export const example2 = `
// This cell must be the last one to execute code / cumulated code
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
<React.StrictMode>
  <App />
</React.StrictMode>,
document.getElementById('root')
);`;

export const htmlExample = `
<div>
  <h1>Hello world</h1>
  <button onclick="myFunction()">Click me</button>
  <p id="demo" class="hello"></p>
</div>
                   `;
export const cssExample = `.hello {
                    background-color: aquamarine;
                    font-size: 20px;
                  }`;
export const javaScriptExample = `function myFunction() {
                         document.getElementById("demo").innerHTML = "let's start coding";
                        }
                        `;
export const pythonExample = `
# Load libraries
from pandas import read_csv
from pandas.plotting import scatter_matrix
from matplotlib import pyplot

# Load dataset
url = "https://raw.githubusercontent.com/jbrownlee/Datasets/master/iris.csv"
names = ['sepal-length', 'sepal-width', 'petal-length', 'petal-width', 'class']
dataset = read_csv(url, names=names)

# shape
print(dataset.shape)

# head
print(dataset.head(20))

# histograms
dataset.hist()
plt.show()
`;

export const pythonExample2 = `
import requests

def get_pokemon_data(pokemon):
    # Fetch information about Pikachu from the PokéAPI
    url = f"https://pokeapi.co/api/v2/pokemon/{pokemon}"
    response = requests.get(url)
    if response.status_code == 200:
        pokemon_data = response.json()
        return pokemon_data
    else:
        raise ValueError(f"Failed to fetch information for {pokemon}. Response status code: {response.status_code}")


def list_abilities(pokemon):
    pokemon_data = get_pokemon_data(pokemon)
    # Retrieve the abilities of pokemon with comprehension list
    abilities = [ability["ability"]["name"] for ability in pokemon_data["abilities"]]
    return abilities


# Call the list_abilities function with 'pidgeot' as the argument and print the result
ordered_abilities = list_abilities('pidgeot')

print(f"pidgeot's abilities: {ordered_abilities}")

`;

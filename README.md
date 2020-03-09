# Reacty & Morty

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Development Resources

### `API Examples`

#### Create API instance

```javascript
import { API } from '~Api';
const charactersProvider = new API('character');
```

### Generic available methods

```javascript
const getAllCharacters = async () => {
  try {
    const allCharacters = await charactersProvider.getAll();
    console.log(allCharacters);
  } catch (error) {
    console.log(error);
  }
};

const getAllCharactersFiltered = async () => {
  try {
    const allCharacters = await charactersProvider.getAll({ name: 'rick' });
    console.log(allCharacters);
  } catch (error) {
    console.log(error);
  }
};

const getSingleCharacter = async (id: number) => {
  try {
    const singleCharacter = await charactersProvider.getSingle(id);
    console.log(singleCharacter);
  } catch (error) {
    console.log(error);
  }
};

const getMultipleCharacters = async (ids: number[]) => {
  try {
    const multipleCharacters = await charactersProvider.getMultiple(ids);
    console.log(multipleCharacters);
  } catch (error) {
    console.log(error);
  }
};
```

import axios from 'axios';

export const getRandomIDs = async (limit: number) => {
  let characterIDs: number[] = [];
  const result = await axios.get('https://rickandmortyapi.com/api/character/');
  while (characterIDs.length < limit) {
    let number = Math.floor(Math.random() * result.data.info.count) + 1;
    if (!characterIDs.includes(number)) {
      characterIDs.push(number);
    }
  }
  return characterIDs;
};

export const getCharacter = (characterID: number) => {
  const characterInfo = axios.get(
    `https://rickandmortyapi.com/api/character/${characterID}`
  );
  return characterInfo;
};

export const getCharacterInfos = async (characterIDs: number[]) => {
  let results = await Promise.all(
    characterIDs.map(async (item, index) => {
      const char = getCharacter(item);
      return char;
    })
  );
  return results;
};

export const generateCharactersData = async () => {
  const characterIDs = await getRandomIDs(10);
  const characterInfos = await getCharacterInfos(characterIDs);
  return characterInfos;
};

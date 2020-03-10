import * as React from 'react';
import { DebounceInput } from 'react-debounce-input';
import styled from 'styled-components';
import { API } from '~Api';
import Loader from 'react-loader-spinner';

const CharacterSearcher = () => {
  const [searchText, setSearchText] = React.useState('');
  const [results, setResults] = React.useState<Array<Record<string, any>>>([]);
  const provider = new API('character');

  React.useEffect(() => {
    if (searchText.length > 1) {
      const getChars = async () => {
        const res = await provider.getAll({ name: searchText });
        setResults(res.results);
      };
      getChars();
    } else {
      setResults([]);
    }
  }, [searchText]);

  const renderResults = () => {
    const names = results.map(item => {
      return (
        <CustomImg alt={item['name']} src={item['image']} key={item['id']} />
      );
    });
    return names;
  };

  return (
    <>
      <CustomInput
        minLength={2}
        debounceTimeout={800}
        placeholder="Buscar..."
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchText(event.target.value);
        }}
      />
      {results.length > 0 && <CustomDiv>{renderResults()}</CustomDiv>}
    </>
  );
};

const CustomInput = styled(DebounceInput)`
  background: #add4e8;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px;
  width: 25%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const CustomImg = styled.img`
  width: 10%;
`;

const CustomDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default CharacterSearcher;

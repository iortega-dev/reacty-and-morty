import * as React from 'react';
import { Input } from '@material-ui/core';
import styled from 'styled-components';
import axios from 'axios';

const CustomSearch = props => {
  const [searchText, setSearchText] = React.useState('');
  const [results, setResults] = React.useState<any>([]);
  const { type } = props;

  React.useEffect(() => {
    if (searchText.length > 0) {
      axios
        .get(`https://rickandmortyapi.com/api/${type}/?name=${searchText}`)
        .then(res => {
          setResults(res.data.results);
        });
    } else {
      setResults([]);
    }
  }, [searchText]);

  const filter_char = (event: any) => {
    setSearchText(event.target.value);
  };

  const renderResults = () => {
    const names = results.map(item => {
      return (
        <a href={`https://rickandmortyapi.com/api/${type}/${item.id}`}>
          <img alt={item.name} src={item.image} key={item.id} width={50} />
        </a>
      );
    });
    return names;
  };

  return (
    <>
      <CustomInput
        placeholder="Buscar..."
        // inputProps={{ 'aria-label': 'description' }}
        onChange={filter_char}
      />
      {results.length > 0 && renderResults()}
    </>
  );
};

const CustomInput = styled.input`
  background: #add4e8;
`;

export default CustomSearch;

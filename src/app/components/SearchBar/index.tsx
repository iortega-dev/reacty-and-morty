import * as React from 'react';
import styled from 'styled-components';
import { API } from '~Api';

const CustomSearch = props => {
  const [searchText, setSearchText] = React.useState('');
  const [results, setResults] = React.useState<any>([]);
  const { type } = props;
  const provider = new API(type);

  React.useEffect(() => {
    if (searchText.length > 0) {
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
      return <CustomImg alt={item.name} src={item.image} key={item.id} />;
    });
    return names;
  };

  return (
    <>
      <CustomInput
        placeholder="Buscar..."
        onChange={(event: any) => {
          setSearchText(event.target.value);
        }}
      />
      {results.length > 0 && <CustomDiv>{renderResults()}</CustomDiv>}
    </>
  );
};

const CustomInput = styled.input`
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

export default CustomSearch;

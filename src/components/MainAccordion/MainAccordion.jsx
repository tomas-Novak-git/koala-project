import React from 'react';
import HeadBar from '../HeadBar/HeadBar.jsx'
import {menuOne} from '../utils/menu-cards'
import data from '../../assets/example-data_(4).json';
import CharacterPanel from '../CharacterPanel/CharacterPanel.jsx';

export const DataContext = React.createContext();

const MainAccordion = () => {
  const jsonData = data;
  return (
    <>
      <HeadBar menu={menuOne} />
    <DataContext.Provider value={jsonData}>
      <CharacterPanel />
    </DataContext.Provider>
    </>
  )
}

export default MainAccordion
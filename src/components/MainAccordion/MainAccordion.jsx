import HeadBar from '../HeadBar/HeadBar.jsx'
import {menuOne} from '../utils/menu-cards'
import data from '../../assets/example-data_(4).json';
import CharacterPanel from '../CharacterPanel/CharacterPanel.jsx';


const MainAccordion = () => {
  const jsonData = data;
  return (
    <>
    <HeadBar menu={menuOne} />
      <CharacterPanel jsonData={jsonData}/>
    </>
  )
}

export default MainAccordion
import HeadBar from '../HeadBar/HeadBar.jsx'
import {menuOne} from '../utils/menu-cards'
import jsonData from '../../assets/example-data_(4).json';
import CharacterPanel from '../CharacterPanel/CharacterPanel.jsx';



const MainAccordion = () => {
  return (
    <>
    <HeadBar menu={menuOne} />
    <CharacterPanel jsonData={jsonData} />
    </>
  )
}

export default MainAccordion
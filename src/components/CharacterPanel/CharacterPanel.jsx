import React from 'react'
import styles from './CharacterPanel.module.css'
import { FaArrowRight } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import NemesisPanel from '../NemesisPanel/NemesisPanel';

import { DataContext } from '../MainAccordion/MainAccordion';

const CharacterPanel = () => {
  const jsonData = React.useContext(DataContext)
  const [data, setData] = React.useState(jsonData);
  const [isOpen, setIsOpen] = React.useState(null);
  
   const handleDeleteData = (id) => {
    const index = data.findIndex(item => item.data.ID === id);
    if (index !== -1) {
      const newData = [...data];
      newData.splice(index, 1);
      setData(newData);
    }
  };

const handleOpen = (i) => {
  if (isOpen == i) {
    return setIsOpen(null)
  } 
  setIsOpen(i)
}

  return (
      <div>
          {data.map((item, index) => (
            <><ul key={index + item.data.ID} className={`${styles.characterCard}`} onClick={() => handleOpen(index)}>
               {item.children && item.children.has_nemesis && item.children.has_nemesis.records.length > 0 ? (
                    <FaArrowRight /> ) : <li>{''}</li>}
               <li>{item.data.ID}</li>
               <li>{item.data.Name}</li>
               <li>{item.data.Gender}</li>
               <li>{item.data.Ability}</li>
               <li>{item.data["Minimal distance"]}</li>
               <li>{item.data.Weight}</li>
               <li>{item.data.Born}</li>
               <li>{item.data["In space since"]}</li>
               <li>{item.data["Beer consumption (l/y)"]}</li>
               <li>{item.data["Knows the answer?"]}</li>
               <ImCross size={24} fill='red'onClick={() => handleDeleteData(item.data.ID)}/>
            </ul>
            {item.children && item.children.has_nemesis && <NemesisPanel nemesis={item} key={index}/>}
            </>
            ))}
      </div>
  )
}

export default CharacterPanel
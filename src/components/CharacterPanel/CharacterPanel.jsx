import React from 'react'
import styles from './CharacterPanel.module.css'
import { FaArrowRight } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import NemesisPanel from '../NemesisPanel/NemesisPanel';


const CharacterPanel = ({jsonData}) => {
  const [data, setData] = React.useState(jsonData);
  const [isOpen, setIsOpen] = React.useState(null);

  const handleDeleteData = (id) => {
  const index = data.findIndex(item => item.data.ID === id);
  if (index !== -1) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }};

  const handleOpen = (i) => {
    setIsOpen((prevIndex) => (prevIndex === i ? null : i));
  };

  return (
      <div>
          {data.map((item, index) => (
            <div key={index + item.data.ID}><ul className={`${styles.characterCard}`} onClick={() => handleOpen(index)}>
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
            {isOpen === index && item.children && item.children.has_nemesis && <NemesisPanel nemesis={item.children.has_nemesis.records} key={'sub-item' + item.data.ID}/>}
            </div>
            ))}
      </div>
  )
}

export default CharacterPanel
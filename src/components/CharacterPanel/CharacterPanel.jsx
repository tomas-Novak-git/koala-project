import React from 'react'
import styles from './CharacterPanel.module.css'
import { FaArrowRight } from "react-icons/fa6";
import { ImCross } from "react-icons/im";




const CharacterPanel = ({ jsonData }) => {
    const [data, setData] = React.useState(jsonData)
  return (
      <div>
          {data.map((item, index) => (
            <ul key={index + item.data.ID} className={`${styles.characterCard}`}>
               {item.children === 'undefined' ? '' :  <FaArrowRight />}
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
               <ImCross size={24} fill='red'/>
            </ul>
            ))}
      </div>
  )
}

export default CharacterPanel
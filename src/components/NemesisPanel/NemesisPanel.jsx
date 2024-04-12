import React from 'react';
import HeadBar from '../HeadBar/HeadBar';
import { menuTwo } from '../utils/menu-cards';
import styles from '../NemesisPanel/NemesisPanel.module.css';
import { ImCross } from 'react-icons/im';

const NemesisPanel = ({ nemesis }) => {
  const [nemesisData, setNemesisData] = React.useState(nemesis.children.has_nemesis)

    const handleDeleteData = (id) => {
    const index = nemesisData.findIndex(item => item.data.ID === id);
    if (index !== -1) {
      const newData = [...nemesisData];
      newData.splice(index, 1);
      setNemesisData(newData);
    }
  };

    console.log(nemesisData)
  return (
    <>
      <HeadBar menu={menuTwo} />
      {nemesisData.map((nemesisData, index) => (
        <ul key={index + nemesisData.ID} className={`${styles.nemesisCard}`}>
          <li>{nemesisData.ID}</li>
          <li>{nemesisData['Character ID']}</li>
          <li>{nemesisData['Is alive?']}</li>
          <li>{nemesisData.Years}</li>
          <ImCross size={24} fill='red'onClick={() => handleDeleteData(nemesisData.data.ID)}/>
        </ul>
      ))}
    </>
  );
};

export default NemesisPanel;
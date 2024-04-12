import React from 'react';
import HeadBar from '../HeadBar/HeadBar';
import { menuTwo } from '../utils/menu-cards';
import styles from '../NemesisPanel/NemesisPanel.module.css';
import { ImCross } from 'react-icons/im';

const NemesisPanel = ({ nemesis }) => {
  const [nemesisData, setNemesisData] = React.useState(nemesis.children.has_nemesis.records)

    const handleDeleteData = (id) => {
    const index = nemesisData.findIndex(item => item.data.ID === id);
    if (index !== -1) {
      const newData = [...nemesisData];
      newData.splice(index, 1);
      setNemesisData(newData);
    }
  };

  return (
    <>
      {nemesisData.map((nemesisData, index) => (
      <><HeadBar menu={menuTwo} /><ul key={index} className={`${styles.nemesisCard}`}>
              <li>{''}</li>
              <li>{nemesisData.data.ID}</li>
              <li>{nemesisData.data['Character ID']}</li>
              <li>{nemesisData.data['Is alive?']}</li>
              <li>{nemesisData.data.Years}</li>
              <ImCross size={24} fill='red' onClick={() => handleDeleteData(nemesisData.data.ID)} />
          </ul></>
      ))}
    </>
  );
};

export default NemesisPanel;
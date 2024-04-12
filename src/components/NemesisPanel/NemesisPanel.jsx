import React from 'react';
import HeadBar from '../HeadBar/HeadBar';
import { menuTwo } from '../utils/menu-cards';
import styles from '../NemesisPanel/NemesisPanel.module.css';
import { ImCross } from 'react-icons/im';
import SecretPanel from '../SecretPanel/SecretPanel';

const NemesisPanel = ({ nemesis }) => {
  const [nemesisData, setNemesisData] = React.useState(nemesis.children.has_nemesis.records)
  const [isOpen, setIsOpen] = React.useState(null);

  const handleOpen = (i) => {
    setIsOpen((prevIndex) => (prevIndex === i ? null : i));
  };

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
      {nemesisData.length > 0 && <HeadBar menu={menuTwo} />}
      {nemesisData.map((nemesisData, index) => (

            <div key={nemesisData.data.ID}>
              <ul  className={`${styles.nemesisCard}`} onClick={() => handleOpen(index)}>
                <li>{''}</li>
                <li>{nemesisData.data.ID}</li>
                <li>{nemesisData.data['Character ID']}</li>
                <li>{nemesisData.data['Is alive?']}</li>
                <li>{nemesisData.data.Years}</li>
                <ImCross size={24} fill='red' onClick={() => handleDeleteData(nemesisData.data.ID)} />
              </ul>
                {isOpen === index && nemesisData.children && nemesisData.children.has_secrete && <SecretPanel secret={nemesisData.children.has_secrete}/>}
            </div>
          
      ))}
    </>
  );
};

export default NemesisPanel;
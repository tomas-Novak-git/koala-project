import React from 'react'
import { menuThree } from '../utils/menu-cards'
import HeadBar from '../HeadBar/HeadBar'
import { ImCross } from 'react-icons/im';
import styles from './SecretPanel.module.css'

const SecretPanel = ({secret}) => {
    const [secretData, setSecretData] = React.useState(secret.children.has_nemesis.records.children.has_secrete.records)

    const handleDeleteData = (id) => {
    const index = secret.findIndex(item => item.data.ID === id);
    if (index !== -1) {
      const newData = [...secret];
      newData.splice(index, 1);
      setSecretData(newData);
    }
  };

  return (
    <>
      {secretData.length > 0 && <HeadBar menu={menuThree} />}
      {secretData.map((secretData) => (
        <>
            <ul key={secretData.data.ID} className={`${styles.secretCard}`}>
              <li>{''}</li>
              <li>{secretData.data.ID}</li>
              <li>{secretData.data['Character ID']}</li>
              <li>{secretData.data['Is alive?']}</li>
              <li>{secretData.data.Years}</li>
              <ImCross size={24} fill='red' onClick={() => handleDeleteData(secretData.data.ID)} />
            </ul>
          </>
      ))}
    </>
  )
}

export default SecretPanel
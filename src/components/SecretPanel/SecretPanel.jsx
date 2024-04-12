import React from 'react'
import { menuThree } from '../utils/menu-cards'
import HeadBar from '../HeadBar/HeadBar'
import { ImCross } from 'react-icons/im';
import styles from './SecretPanel.module.css'

const SecretPanel = ({secret}) => {
  const [secretData, setSecretData] = React.useState(secret.records);

    const handleDeleteData = (id) => {
    const index = secretData.findIndex(item => item.data.ID === id);
    if (index !== -1) {
      const newData = [...secretData];
      newData.splice(index, 1);
      setSecretData(newData);
    }
  };

  return (
    <div>
      {secretData.length > 0 && <HeadBar menu={menuThree} />}
      {secretData.map((secretData) => (
        <div key={secretData.data.ID}>
            <ul  className={`${styles.secretCard}`}>
              <li>{''}</li>
              <li>{secretData.data.ID}</li>
              <li>{secretData.data['Nemesis ID']}</li>
              <li>{secretData.data['Secrete Code']}</li>
              <ImCross size={24} fill='red' onClick={() => handleDeleteData(secretData.data.ID)} />
            </ul>
          </div>
      ))}
    </div>
  )
}

export default SecretPanel
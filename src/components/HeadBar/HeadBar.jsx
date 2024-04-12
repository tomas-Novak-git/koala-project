import styles from './HeadBar.module.css'

const HeadBar = ({menu}) => {
  return (
    <ul className={styles.headBar}>
    {menu.map((item, index) => (
        <li key={index}>{item}</li>
    ))}
    </ul>
  );
}

export default HeadBar;
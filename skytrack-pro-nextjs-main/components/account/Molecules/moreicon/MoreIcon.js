import styles from './moreicon.module.css';
import { useState } from 'react';

const MoreIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles['menu-container']} onClick={toggleMenu}>
      <div className={styles['menu-icon']}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <div className={styles['menu-dropdown']}>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoreIcon;

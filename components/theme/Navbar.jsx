import React, { useState, useEffect, useRef } from 'react'
import { FaBars, IconContext } from 'react-icons/fa';

import styles from './Navbar.module.scss'

const menuSection = [
    {id: 0, context: 'Trang chủ'},
    {id: 1, context: 'Đầu truyện'},
    {id: 2, context: 'Vũ trụ'}
];

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  function handleClick(e) {
    setClicked(!clicked);
  }

  let dropdown = useRef();

  // Close navBar if click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (!dropdown.current?.contains(e.target)) setClicked(false);
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  })

  return (
    <div className={styles.header}>
        {/* Navbar on phone */}
        {
          clicked && 
          <div className={styles.navBarPhone} ref={dropdown}>
            <h3 className={styles.title}>Vườn Hoa Sứ</h3>
            {menuSection.map(section => <h5 className={styles.item} key={section.id}>{section.context}</h5>)}
          </div>
        }
        {/* Left section aka logo (Page's name, does it count as logo?)*/}
        <h3 className={styles.left}>
          Vườn Hoa Sứ
        </h3>
        {/* Right section */}
        <div className={styles.right}>
            {menuSection.map(section => <h5 key={section.id} className={styles.rightItem}>{section.context}</h5>)}
            <button type='button' className={styles.rightItemPhone} onClick={e => handleClick(e)}>
              <FaBars size='32px' color='#fbc846'/>
            </button>
        </div>
        {/* {clicked ? 'true' : 'false'} */}
    </div>
  )
}
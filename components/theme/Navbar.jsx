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
            <div className={styles.title}>
              <div className='sub-header-2'>Vườn Hoa Sứ</div>
            </div>
            {menuSection.map(section => 
            <div className={styles.item} key={section.id}>
              <div className='sub-header-4'>{section.context}</div>
            </div>)}
          </div>
        }
        {/* Left section aka logo (Page's name, does it count as logo?)*/}
        <div className={styles.left}>
          <div className='sub-header-2'>Vườn Hoa Sứ</div>
        </div>
        {/* Right section */}
        <div className={styles.right}>
            {menuSection.map(section => 
            <div className={styles.rightItem} key={section.id}>
              <div className='sub-header-4'>{section.context}</div>
            </div>)}
            <button type='button' className={styles.rightItemPhone} onClick={e => handleClick(e)}>
              <FaBars size='32px' color='#fbc846'/>
            </button>
        </div>
    </div>
  )
}
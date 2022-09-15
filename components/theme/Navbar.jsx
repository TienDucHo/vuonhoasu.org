import React from 'react'

import styles from './Navbar.module.scss'

const menuSection = [
    {id: 0, context: 'Trang chủ'},
    {id: 1, context: 'Đầu truyện'},
    {id: 2, context: 'Vũ trụ'}
];

export default function Navbar() {
  return (
    <div className={styles.header}>
        {/* Left section aka logo (Page's name, does it count as logo?)*/}
        <h3 className={styles.left}>
            Vườn hoa sứ
        </h3>
        {/* Right section */}
        <h5 className={styles.right}>
            {menuSection.map(section => <div key={section.id} className={styles.rightItem}>{section.context}</div>)}
        </h5>
    </div>
  )
}
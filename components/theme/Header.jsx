import React from 'react'

import styles from './Header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
        {/* Left section aka logo (Page's name, does it count as logo?)*/}
        <h3 className={styles.left}>
            Vườn hoa sứ
        </h3>
        {/* Right section */}
        <div>

        </div>
    </div>
  )
}
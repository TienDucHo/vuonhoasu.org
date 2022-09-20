import React from 'react'

import { FaFacebook, FaYoutube } from 'react-icons/fa';

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      {/* Title */}
      <div className={styles.title}> 
        <div className='subHeader4'>Vườn Hoa Sứ</div>
      </div>
      
      {/* Icon */}
      <div className={styles.iconContainer}>
        <FaFacebook className={styles.icon}/>
        <FaYoutube className={styles.icon}/>
      </div>

      {/* Long text */}
      <div className={styles.mainText}>
        <div className='details'>
          Dự án Vườn Hoa Sứ là sản phẩm của đội ngũ MEO Studio. Mọi nhân vật, sự kiện, địa điểm được tác phẩm nhắc đến đều là giả tưởng.<br/>
          Vui lòng tôn trọng bản quyền.
        </div>
      </div>

      {/* Short text */}
      <div className={styles.subText}>
        <div className='details'>
          Trở thành thế hệ tiên phong với MEO Studio - Initiate
        </div>
      </div>
    </div>
  )
}

import React from 'react'

import { FaFacebook, FaYoutube } from 'react-icons/fa';

import styles from './footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      {/* Title */}
      <h5 className={styles.title}> 
        Vườn Hoa Sứ
      </h5>
      
      {/* Icon */}
      <div className={styles.iconContainer}>
        <FaFacebook className={styles.icon}/>
        <FaYoutube className={styles.icon}/>
        {/* <div className={styles.icon}><Image src='/icons/facebook.svg' alt='facebook' layout='fill' objectFit='contain'/></div>
        <div className={styles.icon}><Image src='/icons/youtube.svg' alt='facebook' layout='fill' objectFit='contain'/></div> */}
      </div>

      {/* Long text */}
      <small className={styles.mainText}>
        Dự án Vườn Hoa Sứ là sản phẩm của đội ngũ MEO Studio. Mọi nhân vật, sự kiện, địa điểm được tác phẩm nhắc đến đều là giả tưởng.<br/>
        Vui lòng tôn trọng bản quyền.
      </small>

      {/* Short text */}
      <small className={styles.subText}>
        Trở thành thế hệ tiên phong với MEO Studio - Initiate
      </small>
    </div>
  )
}
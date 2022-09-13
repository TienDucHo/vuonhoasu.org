import React from 'react'

import styles from './footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      {/* Title */}
      <h5 className={styles.title}> 
        Vườn hoa sứ
      </h5>
      
      {/* Icon */}
      <div>
        
      </div>

      {/* Long text */}
      <div>
        Dự án Vườn Hoa Sứ là sản phẩm của đội ngũ MEO Studio. Mọi nhân vật, sự kiện, địa điểm được tác phẩm nhắc đến đều là giả tưởng.<br/>
        Vui lòng tôn trọng bản quyền.
      </div>

      {/* Short text */}
      <div>
        Trở thành thế hệ tiên phong với MEO Studio - Initiate
      </div>
    </div>
  )
}
import React from 'react'


import Image from 'next/image'
import pic from '../../assets/img/pic.png'
import styles from  '../Kater/kater.module.scss'
import { ClosePopUp } from '../../assets/svg/svg'
import Link from 'next/link'

const HelmDescribe = ({active, setActive}) => {
  return (
    <div className={active ? 'model_trans active' : 'model_trans'} onClick={()=> setActive(false)}>
        <div className={active ? 'model_content_kater active' : 'model_content_kater'}>
                <div className={styles.model_kater_title}>
                    About This Quiz
                    <ClosePopUp/>
                </div>
                <div className={styles.model_kater_image}>
                    <Image src={pic} alt="" />
                </div>
                <div className={styles.model__kater__titledescribe}>
                Transducer
                </div>

                <div className={styles.model__kater__describe}>
                Wolves supposedly howl at it, a fairy tale claims a cow once jumped over it and legends say if you look hard enough, there's a man in it. Yes, the moon has a prominent place in popular culture, but there's a lot you might not know about Earth's little orbiting friend. Why doesn't it have soil? Why is its gravity so important? And are we really thinking of going back soon?
                </div>
                <div className={styles.model__kater__btn}>
                    <Link href='/Catalog'>
                    <button>Каталог</button>
                    </Link>
                </div>

        </div>
      
    </div>
  )
}

export default HelmDescribe
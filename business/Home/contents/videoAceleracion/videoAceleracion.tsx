import styles from './videoAceleracion.module.css';
import {useEffect, useState} from "react";
const VideoAceleracion = () => {





    return(
      <>
          <video  className={styles.video} autoPlay loop muted>
              <source   id="video" src="/video/Aceleracion.mp4" type="video/mp4"/>
          </video>
      </>
  )
}
export default VideoAceleracion;
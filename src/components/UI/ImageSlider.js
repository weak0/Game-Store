import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAngleLeft = () => {
    setCurrentIndex((prevState) => {

      if(prevState === 0){
        return 3;
      }
      return prevState - 1; 

    } )


  }
  const handleAngleRight = () => {
    setCurrentIndex((prevState) => {
          if(prevState === 3){
      return 0;
    } 
    return prevState + 1;
    })

  }

  const slides = [
    "https://res.cloudinary.com/gianlucajahn/image/upload/v1658188604/cyberpunk_n6jitl.jpg",
    "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_1920/v1658235373/cyberpunk_1_s00vwf.jpg",
    "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_1920/v1658235372/cyberpunk_2_mq46xm.jpg",
    "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_1920/v1658235378/cyberpunk_3_fajdmi.jpg",
  ];
  const slidesStyle = {
    backgroundImage: `url(${slides[currentIndex]})`,
    width: `100%`,
    height: `${window.innerHeight * 0.6}px`,
    position: "relative",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "20px",
    transition: "background-image 0.3s ease",
  };

  return (
    <div className={styles.slider}>
      <div style={slidesStyle}>
      <FontAwesomeIcon icon="fa-solid fa-chevron-left"  className={styles.angleLeft} onClick={handleAngleLeft}/>
      <FontAwesomeIcon icon="fa-solid fa-chevron-right" className={styles.angleRight}
      onClick={handleAngleRight}/>
      <div className={styles.dotsbar}>
        {slides.map((el, slideIndex) => {
          return <div key={slideIndex} className={currentIndex === slideIndex ? styles.dot + " " + styles.active :  styles.dot} onClick={() => setCurrentIndex(slideIndex)}></div>
        })}
      </div>
      </div>
    </div>
  );
};

export default ImageSlider;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavComponent from "../Nav/NavComponent";
import styles from "./404page.module.css";

const ErorrPage = () => {

     const navigate = useNavigate()

  useEffect(() => {
      setTimeout(() => navigate('/'), 3000)
  })

  return (
    <>
    <NavComponent/>
     <div className={styles.errorPage}>
      <div>
        <img
          src="https://gianlucajahn.github.io/react-ecommerce-store/static/media/404.29eae4380b4fa2d12efb.png"
          alt="404Page"
        />
        <article>
          <h1>Eror 404</h1>
          <p>Ups, this page is not available </p>
          <p>You will be redirected to home page</p>
        </article>
      </div>
    </div>
    </>
   
  );
};
export default ErorrPage;

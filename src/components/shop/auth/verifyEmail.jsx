import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
// import success from "../../images/success.png";
import styles from "./styles.module.css";
// import { Fragment } from "react/cjs/react.production.min";

const VerifyEmail = () => {
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:8000/api/${param.id}/verify/${param.token}`;
        const url_F = `https://cute-cyan-tuna-slip.cyclic.app/api/${param.id}/verify/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    // <Fragment>
    <>
      {validUrl ? (
        <div className={styles.container}>
          <img src="success" alt="success_img" className={styles.success_img} />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button className={styles.green_btn}>Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
      {/* </Fragment> */}
    </>
  );
};

export default VerifyEmail;

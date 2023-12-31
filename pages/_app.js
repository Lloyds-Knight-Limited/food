import "../styles/globals.css";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Layout>
    <Component {...pageProps} />
    
  </Layout>
  );
}

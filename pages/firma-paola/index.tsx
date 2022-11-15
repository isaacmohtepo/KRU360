import type { NextPage } from 'next'
import Layout from "../../business/general/Layout";
import InfoFormularioPaola from "../../business/firmas/paola/firmaCorreo/content/formulario/contents/InfoFormularioPaola";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
      <div className={styles.firma}>
          <Layout>
              <InfoFormularioPaola  />
          </Layout>
      </div>
  )
}

export default Home

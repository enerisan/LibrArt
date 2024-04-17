import styles from "./LicencePage.module.css";

function LicencePage() {
  return (
    <div className={styles.main}>
      <h1>Licence</h1>
      <p className={styles.p}>
        Toutes les images téléchargeables sur le site proviennent de l'API du
        Metropolitan Museum of Art (New York) ayant adopté une politique d'accès
        ouvert aux images du domaine public de leurs collections, les rendant
        disponibles pour être utilisées librement à des fins commerciales ou
        autres.
      </p>
      <p className={styles.p}>
        Par conséquent, les utilisateurs du site sont autorisés à télécharger,
        partager et réutiliser ces images sans aucune restriction.
      </p>
    </div>
  );
}

export default LicencePage;

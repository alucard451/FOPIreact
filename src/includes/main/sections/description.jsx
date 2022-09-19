import styles from "../../../css/main/description.module.css";
import stats from "../../../data/sitestats.json";
import collaborator from '../../../data/collaborators.json';
import members from '../../../data/members.json'
export function Description() {
  let now = new Date();
  let year = now.getFullYear();
  
  var miembros = Object.keys(members).length;
  var collaborators = Object.keys(collaborator).length;
  return (
    <div className={styles.siteDescription}>
      <div className={styles.siteStats}>
        <div className={styles.siteStatsDescription}>
          Venimos trabajando por más de años por la educación del Perú.{year}
        </div>
        <div className={styles.siteStatsStats}>
          
          <div className={styles.statsItem}>
            <div className={styles.statsNumber}>{miembros}</div>
            <div class={styles.statsName}>Miembros principales</div>
          </div>
          <div className={styles.statsItem}>
            <div className={styles.statsNumber}>{collaborators}</div>
            <div className={styles.statsName}>Miembros asociados</div>
          </div>
          {stats.map((stats) => (
          <div className={styles.statsItem}>
            <div className={styles.statsNumber}>{stats.number}</div>
            <p className={styles.statsName}>{stats.name}</p>
          </div>))}
        </div>
      </div>
    </div>
  );
}

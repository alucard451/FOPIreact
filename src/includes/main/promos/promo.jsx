import collect from '../../../data/colect.json';
import { Button } from "../elements/button";
import { ProgressBar } from "../elements/progressbar";
import styles from "../../../css/main/promos.module.css";
//EGOI2022
export function Promo() {
  const goal = collect['goal'];
  const current = collect['current'];
  const currentpercentage = 100 * current / goal  ;
  //const goal = collect['goal'];
  return (
    <div className={styles.promo}>
      <div className={styles.promoContent}>
        <div className={styles.promoDate}>16 de Octubre</div>
        <div className={styles.promoSubtext}>
          Llevemos al Perú a la Olimpiada Europea Femenina de Informática en
          Turquía
        </div>
        <div className="">
          <div>
            Hasta el momento ya hemos recaudado <strong>${current}</strong>
          </div>
          <ProgressBar />
          <div>
            <strong>{currentpercentage}%</strong> de <strong>${goal}</strong>
          </div>
        </div>
        <div className={styles.promoBtn}>
          <Button texto="Quiero apoyar" />
        </div>
      </div>
    </div>
  );
}

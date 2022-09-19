import styles from '../../../css/main/partners.module.css';
import site from '../../../data/site.json';
import { Button } from '../elements/button';
export function Partners() {
  const email = "mailto:"+site['email']+"?subject=Quiero ayudar a la FOPI!";
  return (
    <div className={styles.partners}>
      <div className={styles.partnersLogo}>
        <div className={styles.partnerItem}>
          <a href=" ">
            <img src="" alt="" />
          </a>
        </div>
      </div>
      <div>
        <Button texto='Sé nuestro partner' link={email}/>
      </div>
    </div>
  );
}

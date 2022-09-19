import styles from '../../../css/elements/buton.module.css';
export function Button(props) {
  return (
    
      <a className={styles.btn} href={props.link}>
        <span>
          {props.texto} <img src={props.image} alt={props.alt} />
        </span>
      </a>
    
  );
}

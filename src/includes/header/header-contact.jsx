import site from '../../data/site.json';
import style from "../../css/header/header-contact.module.css";

export function Contact() {
  const url = "https://wa.me/"+site['phone'].replaceAll(" ","").replaceAll("-","")+"?text=Quiero conocer más sobre la FOPI";
  const email = "mailto:"+site['email'];
  return (
    <div class={style.headerContact}>
      
      <a
        class="social"
        href={url}
        
      >
        <i class="fa fa-2x fa-whatsapp"></i>
      </a>
      <a class="social" href={email}>
        <i class="fa fa-2x fa-envelope"></i>
      </a>
    </div>
  );
}

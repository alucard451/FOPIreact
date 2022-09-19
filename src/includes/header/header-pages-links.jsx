import nav from "../../data/navigation.json";
//import { Link } from './header-link';
//import styles from "../../css/header/header-pageslink.module.css";
import "../../css/header/menubar-link.css";
export function PagesLink() {
  return (
    <div class="headerPagesLinks" id="PagesLink">
      {nav.map((nav) => (
        <a key={nav.name} href={nav.link}>
          <div className="headerPageItem">{nav.name}</div>
        </a>
      ))}
    </div>
  );
}

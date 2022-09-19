//import style from "../../css/header/header-menubar.module.css";
import "../../css/header/menubar-link.css";
export function MenuBar() {
  return (
    
      <><label htmlFor="toggleHidden" className="menuBar">
      <i className="fa fa-bars"></i>
    </label><input type="checkbox" id="toggleHidden" className="hidden" /></>
    
  );
}

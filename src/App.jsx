import { Header } from "./includes/header.jsx";
import { Main } from "./includes/header.jsx";
import { Partners } from "./includes/main/sections/partners.jsx";
import { Footer } from "./includes/header.jsx";
import "./css/header/header-site.css";
import "./css/footer/footer-site.css";
export function App() {
  return (
    <>
      <header className="siteHeader">
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <Partners/>
      <footer className="siteFooter">
      <Footer/>
      </footer>
    </>
  );
}

import "./App.css";
import Nav from "./components/header/nav/Nav";
import LanguageSwitcher from "./components/header/LanguageSwitcher";
import Logo from "./components/Logo";
import Main from "./components/main/Hero";
import { Advantages } from "./components/main/advantages/Advantages";
import { Reviews } from "./components/main/reviews/Reviews";
import Order from "./components/main/orders/Order";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <header className="header">
        <div className="header__container container">
          <Logo width={"100px"} height={"60px"}></Logo>
          <Nav></Nav>
          <LanguageSwitcher></LanguageSwitcher>
        </div>
      </header>

      <main className="main">
        <Main></Main>
        <section className="advantages">
          <div className="advantages__container container">
            <Advantages></Advantages>
          </div>
        </section>

        <section className="reviews">
          <div className="reviews__container container">
            <Reviews></Reviews>
          </div>
        </section>

        <section className="order">
          <div className="order__container container">
            <Order></Order>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__container container">
          <Footer></Footer>
        </div>
      </footer>
    </>
  );
}

export default App;

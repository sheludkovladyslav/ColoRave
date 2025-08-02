import "./App.css";
import Nav from "./components/header/nav/Nav";
import LanguageSwitcher from "./components/header/LanguageSwitcher";
import Logo from "./components/Logo";
import Main from "./components/main/Hero";
import { Advantages } from "./components/advantages/Advantages";

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
      </main>
    </>
  );
}

export default App;

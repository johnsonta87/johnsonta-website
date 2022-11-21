import Avatar from "../components/avatar/Avatar";
import Container from "../components/container/Container";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import About from "../components/section/About";
import Skills from "../components/section/Skills";
import Title from '../components/title/Title'
import avatar from '../images/avatar.jpg'

function App() {
  return (
    <Container>
        <Header center>
          <Avatar img={avatar} />
          <Title content="Johnson Ta" bold />

          <p className="sub-title">
            Frontend & Jamstack Developer
            <br />
            <span className="say-hello"><a href="mailto:johnsonta87@gmail.com">Say hello!</a></span>
          </p>
        </Header>

      <Main>
        <About />
        <Skills />
      </Main>

        <Footer />
    </Container>
  );
}

export default App;

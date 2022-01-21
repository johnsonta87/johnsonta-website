import Avatar from "../components/avatar/Avatar";
import Container from "../components/container/Container";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Title from '../components/title/Title'
import avatar from '../images/avatar.jpg'

function App() {
  return (
    <Container>
      <Main>
        <Header center>
          <Avatar img={avatar} />
          <Title content="Johnson Ta" bold />

          <p className="sub-title">Frontend & Jamstack Developer<br />
            <a href="mail:jnsnta@gmail.com">Say hello!</a></p>
        </Header>

        <Footer />
      </Main>
    </Container>
  );
}

export default App;

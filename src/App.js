import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Container from "./components/Container";
import Text from "./components/Text";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <div>
          <Container>
              <div>
                  <Text element={"div"} disable>
                      ТЕКСТ 1
                  </Text>
                  <Text element={"p"} italic strong>
                      ТЕКСТ 2
                  </Text>
                  <Text element={"span"} strong>
                      ТЕКСТ 3
                  </Text>
              </div>
          </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;

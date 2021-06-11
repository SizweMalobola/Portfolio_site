import Container from "./components/Container";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Home />
      </Container>
    </div>
  );
}

export default App;

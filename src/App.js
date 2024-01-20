import  Header  from './Components/Header'
import  Footer  from './Components/Footer'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <div>
        <Header />
        <main className="py-3">
        <h1>Whats up world</h1>
        </main>
        <Footer />
      </div>
    </Container>   
    
  );
}

export default App;
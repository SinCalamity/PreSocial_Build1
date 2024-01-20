import  Header  from './Components/Header'
import  Footer  from './Components/Footer'
import { Container } from 'react-bootstrap';
import HomeScreens from './Screens/HomeScreens';

function App() {
  return (
    <Container>
      <div>
        <Header />
        <main className="py-3">
          <Container>
            <HomeScreens />
          </Container>
        </main>
        <Footer />
      </div>
    </Container>   
    
  );
}

export default App;
import { Container } from 'react-bootstrap'


import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Container fluid>
            <Header />
            <Main />
            <Footer />
        </Container>
    );
}

export default App;

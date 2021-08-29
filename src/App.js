import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AllRooms from './components/Room/AllRooms';
import Gallery from './components/Gallery/Gallery';
import Contacts from './components/Contacts/Contacts';
import MyBookings from './components/MyBookings/MyBookings';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { auth } from './utils/firebase';

import UserContext from './context/UserContext';

import { useState, useEffect } from 'react';


function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
        });
    }, [])

    return (
        <UserContext.Provider value={user}>
            <Container fluid className="pageContainer">
                <Header />

                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/rooms" component={AllRooms} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/my-bookings" component={MyBookings} />
                    <Route path="/booking" component={Booking} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" render={props => {
                        auth.signOut();

                        return <Redirect to="/" />
                    }} />
                </Switch>

                <Footer />
            </Container>
        </UserContext.Provider>
    );
}

export default App;

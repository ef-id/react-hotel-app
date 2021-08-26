import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import style from './MyBookings.module.css';

import Swal from 'sweetalert2';

import UserContext from '../../context/UserContext';

const MyBookings = () => {
    const user = useContext(UserContext);
    const history = useHistory();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5001/bookings?creator=${user?.uid}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
            })
    }, []);


    const onCancelHandler = (e) => {
        e.preventDefault();
        let idWe = e.target.parentElement.parentElement.dataset.id;

        Swal.fire({
            title: 'Are you sure to cancel this booking?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel booking!',
            cancelButtonText: 'Exit'
        }).then((result) => {
            if (result.value) {
                console.log('yes')
                return fetch(`http://localhost:5001/bookings/${idWe}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(response => {
                        Swal.fire({
                            title: "Your booking was cancelled",
                            type: "success",
                            confirmButtonText: "Ok"
                        }).then(() => {
                            history.push('/');
                        })
                    })
            }
        })
    }


    return (
        <Container fluid className={style.container}>
            <Row className={`justify-content-md-center ${style.header}`}>
                <Col>
                    <h3 className={style.title}>My Bookings</h3>
                </Col>
            </Row>

            <Table hover className={style.table}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Room</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Overnights</th>
                        <th>Guests</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(x => (
                        <tr data-id={x.id}>
                            <td>{x.firstName}</td>
                            <td>{x.lastName}</td>
                            <td>{x.email}</td>
                            <td>{x.phone}</td>
                            <td>{x.room}</td>
                            <td>{x.startDate}</td>
                            <td>{x.endDate}</td>
                            <td>{x.overnights}</td>
                            <td>{x.adultCount}</td>
                            <td>€{x.totalPrice}</td>
                            <td><Button variant="danger" onClick={onCancelHandler}>Cancel Booking</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>

    );
}

MyBookings.contextType = UserContext;

export default MyBookings;

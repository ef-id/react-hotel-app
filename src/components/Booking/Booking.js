import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import style from './Booking.module.css';

import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

import UserContext from '../../context/UserContext';

import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import * as requestService from '../../service/request';

import Swal from 'sweetalert2';

const Booking = () => {

    const user = useContext(UserContext);

    const history = useHistory();

    let guestNumberOptions = [1, 2, 3, 4, 5];
    let roomsOptions = [
        'Side Sea View Room',
        'Premium Side Sea View Room',
        'Family Room with Sea View',
        'Family Room with Side Sea View',
        'Maisonette With Sea View',
        'Lagoon Swim-Up Room'
    ];

    let [emailValue, setEmail] = useState(user?.email);
    let [guestsCount, setGuestsCount] = useState(1);
    let [room, setRoom] = useState('Side Sea View Room');

    let [startDate, setStartDate] = useState();
    let [endDate, setEndDate] = useState();
    let [focusedInput, setFocusedInput] = useState();

    let [nights, setNights] = useState(0);

    let [totalPrice, setTotalPrice] = useState();


    let overnights = (d1, d2) => {
        let nightsCount = dateCompare(d1, d2);
        setNights(nightsCount)
        onInfoChangeHandler(room, nightsCount, guestsCount);
    }

    const onChangeEmailHandler = (e) => {
        let email = e.target.value;
        setEmail(email);
    }

    const onChangeGuestsHandler = (e) => {
        let selectedGuestsCount = e.target.value
        setGuestsCount(selectedGuestsCount);
        onInfoChangeHandler(room, nights, selectedGuestsCount);
    }

    const onChangeRoomHandler = (e) => {
        let selectedRoom = e.target.value;
        setRoom(selectedRoom);
        onInfoChangeHandler(selectedRoom, nights, guestsCount);
    }

    function onInfoChangeHandler(roomSelected = 'Side Sea View Room', nightsCount, guestsSelectedCount = 1) {
        switch (roomSelected) {
            case 'Side Sea View Room':
                setTotalPrice(150 * nightsCount * guestsSelectedCount);
                break;
            case 'Premium Side Sea View Room':
                setTotalPrice(180 * nightsCount * guestsSelectedCount);
                break;
            case 'Family Room with Sea View':
                setTotalPrice(180 * nightsCount * guestsSelectedCount);
                break;
            case 'Family Room with Side Sea View':
                setTotalPrice(200 * nightsCount * guestsSelectedCount);
                break;
            case 'Maisonette With Sea View':
                setTotalPrice(250 * nightsCount * guestsSelectedCount);
                break;
            case 'Lagoon Swim-Up Room':
                setTotalPrice(250 * nightsCount * guestsSelectedCount);
                break;
                default:
                    break;
        }
    }


    function convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [day, mnth, date.getFullYear()].join("-");
    }

    function dateCompare(date1, date2) {

        let d1 = new Date(date1);
        let d2 = new Date(date2);

        let difference = d2.getTime() - d1.getTime();
        difference = difference / (1000 * 3600 * 24);

        return difference;

    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmitConfirmHandler = (data, e) => {

        e.preventDefault();
        const creator = user.uid;
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = emailValue;
        const phone = e.target.phone.value;
        const guestsCountValue = guestsCount;
        const roomValue = room;
        const convertedStartDate = convert(startDate);
        const convertedEndDate = convert(endDate);
        const nig = nights;
        const price = totalPrice;




        requestService.createBooking(creator, firstName, lastName, email, phone, roomValue, convertedStartDate, convertedEndDate, nig, guestsCountValue, price)
            .then((data) => {
                Swal.fire({
                    title: 'Congrats',
                    text: 'You save your stay successfully',
                    type: 'success',
                    confirmButtonText: 'Ok'
                })
                    .then(() => {
                        history.push('/my-bookings');
                    })
            })

    }

    return (
        <Container fluid className={style.container}>
            <Row className={`justify-content-md-center ${style.modalHeader}`}>
                <Col>
                    <h3 className={style.modalTitle}>Book your stay</h3>
                </Col>
            </Row>

            <Form onSubmit={handleSubmit(onSubmitConfirmHandler)}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstName" placeholder="Enter first name" {...register("firstName", { required: true, minLength: 2 })} />
                        {errors.firstName && errors.firstName.type === "required" && <span className={style.errors} >First name is required</span>}
                        {errors.firstName && errors.firstName.type === "minLength" && <span className={style.errors} >The field must be at least 2 characters</span>}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastName" placeholder="Enter last name" {...register("lastName", { required: true, minLength: 2 })} />
                        {errors.lastName && errors.lastName.type === "required" && <span className={style.errors}>Last name is required</span>}
                        {errors.lastName && errors.lastName.type === "minLength" && <span className={style.errors}>The field must be at least 2 characters</span>}
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail" onChange={onChangeEmailHandler}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" placeholder="Enter email" value={emailValue} {...register("email", {
                            required: true, pattern: {
                                value: /\S+@\S+\.\S{2,}/,
                                message: "Entered value does not match email format"
                            }
                        })}/>
                        {errors.email && errors.email.type === "required" && <span className={style.errors}>Email is required</span>}
                        {errors.email && <span className={style.errors}>{errors.email.message}</span>}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" name="phone" placeholder="Enter phone" {...register("phone", {
                            required: true, pattern: {
                                value: /\d{9,}$/,
                                message: "The phone number must be at least with 9 digits and must contains only digits"
                            }
                        })} />
                        {errors.phone && errors.phone.type === "required" && <span className={style.errors}>Phone is required</span>}
                        {errors.phone && <span className={style.errors}>{errors.phone.message}</span>}
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Number of Guests</Form.Label>
                        <Form.Control as="select" defaultValue="Select Number of Guests" onChange={onChangeGuestsHandler}>
                            {guestNumberOptions.map((x, index) => <option key={index}>{x}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Select Dates</Form.Label>
                        <div>
                            <DateRangePicker
                                startDate={startDate}
                                startDateId="start-date"
                                endDate={endDate}
                                endDateId="end-date"
                                onDatesChange={({ startDate, endDate }) => {
                                    setStartDate(startDate);
                                    setEndDate(endDate);
                                }}
                                focusedInput={focusedInput}
                                onFocusChange={(focusedInput) => {
                                    setFocusedInput(focusedInput)
                                }}
                                startDatePlaceholderText="Arrival"
                                endDatePlaceholderText="Departure"
                                noBorder
                                showDefaultInputIcon
                                withPortal
                                onClose={({ startDate, endDate }) => {
                                    overnights(startDate, endDate);
                                }}
                                required={true}
                            />

                            <span className={style.overnights}>Overnights: {nights}</span>
                        </div>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Rooms</Form.Label>
                        <Form.Control as="select" defaultValue="Select room" onChange={onChangeRoomHandler}>
                            {roomsOptions.map((room, index) => <option key={index}>{room}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Total Price</Form.Label>
                        <InputGroup size="md" >
                            <InputGroup.Text id="inputGroup-sizing-sm">€</InputGroup.Text>
                            <Form.Control type="text" name="totalPrice" disabled value={totalPrice} />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Confirm your booking
                </Button>
            </Form>

        </Container>
    );
}


export default Booking;
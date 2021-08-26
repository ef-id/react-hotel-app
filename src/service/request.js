const url = 'http://localhost:5001/bookings';

export const createBooking = (creator, firstName, lastName, email, phone, room, startDate, endDate, overnights, adultCount, totalPrice) => {

    let book = {
        creator,
        firstName,
        lastName,
        email,
        phone,
        room,
        startDate,
        endDate,
        overnights,
        adultCount,
        totalPrice,
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book)
    })
}

export const getData = () => {
    return fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
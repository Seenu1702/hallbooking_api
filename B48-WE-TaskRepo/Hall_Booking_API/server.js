const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();


// creating  a middleware

app.use(express.json());
app.use(cors());

// create a endpoint to '/' path 

app.get('/',(request,response)=>{
    response.send(`<h1>Hall Booking API</h1>  
        <h3>endpoint &nbsp : &nbsp / </h3><p>HomePage For Hall Booking API</p>
        <h3>endpoint &nbsp : &nbsp /rooms/all</h3><p> to view all the rooms with booking history </p>
        <h3>endpoint &nbsp : &nbsp /rooms/:id </h3><p>to view a single room to book with booking history </p>
        <h3>endpoint &nbsp : &nbsp /rooms/create</h3><p>to create a new room for booking with room essentials</p>
        <h3>endpoint &nbsp : &nbsp /rooms/book/:id </h3><p>to book a room only when it's available and the entered room_id is valid</p>
        <h3>endpoint &nbsp : &nbsp /rooms/all/customers</h3><p>list all the customers at which are booked a room previously</p>
    `)
});

// create a local variable rooms which stores the room data 

const rooms = [
    {
        "room_id" : 1 ,
        "roomNumber" : 100,
        "noOfSeatsAvailable" : 2,
        "amenities" : ["internet","waterHeater","television","roomService"],
        "pricePerHour" : 200 ,
        "status" : "available",
        "bookingCustomer" : [ ]
    },
    {
        "room_id" : 2 ,
        "roomNumber" : 101,
        "noOfSeatsAvailable" : 2,
        "amenities" : ["internet","television","roomService"],
        "pricePerHour" : 150 ,
        "status" : "booked",
        "bookingCustomer" : [ ]
    }, {
        "room_id" : 3 ,
        "roomNumber" : 102,
        "noOfSeatsAvailable" : 4,
        "amenities" : ["internet","waterHeater","television","roomService","meals"],
        "pricePerHour" : 500 ,
        "status" : "available",
        "bookingCustomer" : [ ]
    },{
        "room_id" : 4 ,
        "roomNumber" : 103,
        "noOfSeatsAvailable" : 4,
        "amenities" : ["internet","waterHeater","television","roomService","meals"],
        "pricePerHour" : 500 ,
        "status" : "booked",
        "bookingCustomer" : [ ]
    },{
        "room_id" : 5 ,
        "roomNumber" : 104,
        "noOfSeatsAvailable" : 4,
        "amenities" : ["internet","waterHeater","television","roomService","meals"],
        "pricePerHour" : 500 ,
        "status" : "available",
        "bookingCustomer" : [ ]
    }
]

const customers = [
    
        {
            "customerName" : "darvin",
            "bookDate" : "2023-12-20",
            "startTime" : "10.30 am",
            "endTime" : "5.30pm"
        },
        {
            "customerName" : "balan",
            "bookDate" : "2023-12-20",
            "startTime" : "10.30 am",
            "endTime" : "5.30pm"
        }
    
]
// endpoint to view all rooms
app.get('/rooms/all',(request,response)=>{
    response.status(200).json(rooms);
})

// endpoint to view a single room 
app.get('/rooms/:id',(request,response)=>{
    const id = request.params.id ;
    const roomToShow = rooms.find(room => room.room_id == id );
   if (!roomToShow) {
    response.status(404).json({message : 'entered id does not exist'}); 
   }else {
    response.status(200).json(roomToShow);
   }
})


// endpoint to create a new room 

app.post('/rooms/create',(request,response)=>{
    let newRoom = request.body;
    rooms.concat(newRoom) ;
    if (newRoom){
        response.status(200).send(newRoom);
        console.log('new Room created successfully');
    }else {
        response.status(404).send({message : 'does not creating a Room'})
    }
    
})

// endpoint to book a room
app.post('/rooms/book/:id',(request,response)=>{
    const room_id = request.params.id ;
    const room = rooms.find(room => room.room_id == room_id );
    const customerDetails = request.body ;
    if (room){
        if (room.status == 'available'){
            room.bookingCustomer.push(customerDetails);
            customers.push(customerDetails);
            room.status=='available' ? 'booked' : 'available' 
            response.status(200).json({message:'Room Booked Successfully'});
        }else{
            response.status(404).json({message : 'entered room_id already booked '})
        }
    }else {
        response.status(404).json({message : 'entered id does not exist'});
    }
   
})

// list all customers at which peoples are booked a room previously

app.get('/rooms/all/customers',(request,response)=>{
    response.status(200).json(customers);
});

// to start a server

const PORT = 3001 ;
app.listen(PORT,()=>{
    console.log('Server running on a port 3001');
})
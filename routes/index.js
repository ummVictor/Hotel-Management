const express = require('express');
const router = express.Router();

const rooms = [];

router.get('/', (req, res) => {
  const occupiedRooms = rooms.filter(room => room.status === 'occupied');
  res.render('index', { occupiedRooms });
});

router.get('/home', (req, res) => {
  res.render('home');
});

router.get('/checkout', (req, res) => {
  res.render('checkout', { rooms });
});

router.post('/checkout', (req, res) => {
  const { room_number } = req.body;
  const roomIndex = rooms.findIndex(room => room.room_number === room_number);
  if (roomIndex !== -1) {
    rooms.splice(roomIndex, 1);
  }
  res.redirect('/');
});

router.get('/checkin', (req, res) => {
  const occupiedRooms = rooms.filter(room => room.status === 'occupied');
  res.render('checkin', { errorMessage: '', occupiedRooms });
});

router.post('/checkin', (req, res) => {
  const { room_number, guest_name } = req.body;

  // Check if the room is already occupied
  const isRoomOccupied = rooms.some(room => room.room_number === room_number);
  if (isRoomOccupied) {
    const occupiedRooms = rooms.filter(room => room.status === 'occupied');
    const errorMessage = 'This room is already occupied. Please choose another room.';
    res.render('checkin', { errorMessage, occupiedRooms, room_number, guest_name });
  } else {
    const room = {
      room_number,
      guest_name,
      status: 'occupied'
    };
    rooms.push(room);
    res.redirect('/');
  }
});

router.get('/support', (req, res) => {
  res.render('support');
});

module.exports = router;

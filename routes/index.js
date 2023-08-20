const express = require('express');
const router = express.Router();

let rooms = [];

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

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/create-profile', (req, res) => {
  // Handle user registration here (e.g., store user data in a database)

  // Redirect to the main page after processing the registration
  res.redirect('/home');
});


// Route to render the manager login form
router.get('/manager-login', (req, res) => {
  // Check if there's an error query parameter (indicating a failed login attempt)
  const error = req.query.error;
  res.render('manager-login', { error });
});

// Route to handle manager login form submission
router.post('/manager-dashboard', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if the provided username and password match the manager's credentials
  if (username === 'VCB380' && password === 'Csun123456') {
      // Redirect to the manager dashboard (where rooms can be removed)
      res.redirect('/manager-dashboard');
  } else {
      // Redirect back to the login page with an error message
      res.redirect('/manager-login?error=true');
  }
});

function getOccupiedRooms() {
  const occupiedRooms = rooms.filter(room => room.status === 'occupied');
  return occupiedRooms;
}

// ...

router.get('/manager-dashboard', (req, res) => {
  // Fetch the list of occupied rooms using the getOccupiedRooms function
  const occupiedRooms = getOccupiedRooms(); // Replace with your data fetching logic
  
  // Render the manager-dashboard EJS template with the occupiedRooms data
  res.render('manager-dashboard', { occupiedRooms });
});

router.post('/clear-rooms', (req, res) => {
  // Assuming rooms is an array where you store room data
  rooms = rooms.filter(room => room.status !== 'occupied');
  
  // Redirect back to the manager dashboard
  res.redirect('/manager-dashboard');
});


module.exports = router;

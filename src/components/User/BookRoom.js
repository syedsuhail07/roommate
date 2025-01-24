import React, { useState } from "react";
import "../styles/bookRoom.css";

const BookRoom = () => {
  const initialRooms = {
    1: Array(20).fill(2),
    2: Array(20).fill(2),
    3: Array(20).fill(2),
    4: Array(20).fill(2),
    5: Array(20).fill(2),
  };

  // Simulated profile data for the logged-in user
  const userProfile = {
    name: "Syed Mohammed",
    email: "syed@mail.com",
    phone: "1234567890",
    year: "4th Year",
    branch: "Computer Science",
    block: "Block A",
  };

  const [rooms, setRooms] = useState(initialRooms);
  const [activeFloor, setActiveFloor] = useState(null);
  const [recentBooking, setRecentBooking] = useState(null);

  const handleBooking = (floor, roomIndex) => {
    if (rooms[floor][roomIndex] > 0) {
      setRooms((prev) => {
        const updatedFloor = [...prev[floor]];
        updatedFloor[roomIndex] -= 1;
        return { ...prev, [floor]: updatedFloor };
      });

      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString();
      const formattedTime = currentDate.toLocaleTimeString();

      const bookingDetails = {
        ...userProfile,
        floor,
        roomNumber: roomIndex + 1,
        date: formattedDate,
        time: formattedTime,
      };

      setRecentBooking(bookingDetails);

      alert(`Room ${roomIndex + 1} booked successfully on Floor ${floor}!`);
    } else {
      alert(`Room ${roomIndex + 1} on Floor ${floor} is already full.`);
    }
  };

  const handleFloorClick = (floor) => {
    setActiveFloor((prevFloor) => (prevFloor === floor ? null : floor));
  };

  const renderRooms = (floor) => (
    <div className="floor">
      <h4>Floor {floor}</h4>
      <div className="rooms">
        {rooms[floor].map((availability, index) => (
          <div className="room" key={index}>
            <p>Room {index + 1}</p>
            <button
              className={`btn ${
                availability > 0 ? "btn-success" : "btn-danger"
              }`}
              onClick={() => handleBooking(floor, index)}
              disabled={availability === 0}
            >
              {availability === 2
                ? "2 Available"
                : availability === 1
                ? "1 Available"
                : "Full"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container book-room mt-5">
      <h2 className="text-center mb-4">Book Room for Hostlers</h2>

      {/* Display User Profile */}
      <div className="user-profile mb-4">
        <h4>User Profile</h4>
        <p><strong>Name:</strong> {userProfile.name}</p>
        <p><strong>Email:</strong> {userProfile.email}</p>
        <p><strong>Phone:</strong> {userProfile.phone}</p>
        <p><strong>Year of Study:</strong> {userProfile.year}</p>
        <p><strong>Branch:</strong> {userProfile.branch}</p>
        <p><strong>Hostel Block:</strong> {userProfile.block}</p>
      </div>

      {/* Floor Selection */}
      <div className="floors">
        <div className="floor-buttons">
          {Object.keys(rooms).map((floor) => (
            <button
              key={floor}
              className="btn btn-primary mx-2"
              onClick={() => handleFloorClick(Number(floor))}
            >
              {`Floor ${floor}`}
            </button>
          ))}
        </div>
        {activeFloor && renderRooms(activeFloor)}
      </div>

      {/* Recent Booking Details */}
      {recentBooking && (
        <div className="recent-booking mt-5">
          <h4 className="text-center">Recent Booking Receipt</h4>
          <p><strong>Date:</strong> {recentBooking.date}</p>
          <p><strong>Time:</strong> {recentBooking.time}</p>
          <p><strong>Name:</strong> {recentBooking.name}</p>
          <p><strong>Email:</strong> {recentBooking.email}</p>
          <p><strong>Phone:</strong> {recentBooking.phone}</p>
          <p><strong>Year:</strong> {recentBooking.year}</p>
          <p><strong>Branch:</strong> {recentBooking.branch}</p>
          <p><strong>Hostel Block:</strong> {recentBooking.block}</p>
          <p><strong>Floor:</strong> {recentBooking.floor}</p>
          <p><strong>Room Number:</strong> {recentBooking.roomNumber}</p>
        </div>
      )}
    </div>
  );
};

export default BookRoom;
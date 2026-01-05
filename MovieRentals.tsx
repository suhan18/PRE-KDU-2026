import React, { useState } from "react";
let timeLeft = 10;
let timerInterval: number | null | undefined = null;
const timerDisplay = document.getElementById("timer");

function startTimer() {
  if (timerInterval !== null) return; 
  timerInterval = setInterval(() => {
    timeLeft--;
    updateDisplay();
    if (timeLeft === 0) {
      alert("Session Complete!");
      updateDisplay();
    }
  }, 1000);
}
function updateDisplay() {
  const seconds = timeLeft;
  timerDisplay.textContent =String(seconds).padStart(2, "0");
}
const MovieRentals = () => {
    const rental = ["A", "B", "C"];
    const [showTimer, setShowTimer] = useState(false);
    const handleClick = () => {
    setShowTimer(true); // Show paragraph when button is clicked
  };
    
    const [time,setTime]=useState(10);
    // Event handler for button click
    
    return (
        <ul>
            {rental.map((rental, index) => (
                <div>
                    <h1>{rental}</h1>
                    <button key={index} onClick={() => handleClick()}>
                    Start Countdown
                    </button>
                    {showTimer && <p id='timer' onClick={()=>startTimer}>10</p>}
                </div>
                
            ))}
        </ul>
    );
};

export default MovieRentals;

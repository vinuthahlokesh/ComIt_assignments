import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [clickCount, setClickCount] = useState(0)
  const [timeLeft, setTimeLeft] = useState<number>(0)
  const [isClickDisabled, setClickButtonDisabled] = useState<boolean>(false)
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);


 
 // Handle click button
  const onClickButton = () => {
    if (!isClickDisabled && isTimerRunning) {
      setClickCount((prev) => prev + 1);
    }
  };

  const onstartTestBTnClick = () => {
    setClickButtonDisabled(false)
    setClickCount(0)
    setTimeLeft(5)
    setIsTimerRunning(true)

     // Clear any existing timer
    if (timerRef.current) 
      clearInterval(timerRef.current);
    console.log("⛔ Timer cleared!");
    
timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current!);
          setClickButtonDisabled(true);         // Disable "Click Me" button
          setIsTimerRunning(false);  // Stop timer
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  }

   // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
  <h1>Click Speed Test Game</h1>

  <button 
  onClick={onstartTestBTnClick}
  >Start Test</button>

  <button 
   style={{margin: '10px'}}
   disabled = {isClickDisabled}
   onClick={onClickButton}
  >Click Me!</button>

  <h2>Countdown Timer: {timeLeft}</h2>
  <h2>Click counter: {clickCount}</h2>
   {!isTimerRunning && timeLeft === 0 && (
        <h2>Final Score: {clickCount} clicks</h2>
      )}
  </div>
  )
}

export default App

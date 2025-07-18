import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [guestName, setGuestName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const addGuest = () => {
    if (guestName.trim() == '') {
      alert("Please enter the guest name")
    }
    else {
      const sortedGuestList = [...guests, guestName].sort((a, b) => a.localeCompare(b))
      setGuests(sortedGuestList)
      setGuestName('')
    }
  }

  return (
    <>
      <div>
        <h1>Guest List</h1>
        <input type="text"
          placeholder="Enter the guest name"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          style={{ marginRight: `8px` }} />
        <button onClick={addGuest}>Add Guest</button>
        <ul>
          {guests.map((guest, idx) => (
            <li key={idx}>{guest}
              <button
                style={{ marginLeft: `12px`, marginBottom: `12px` }}
                onClick={() => setGuests(guests.filter((_, i) => i != idx))}>
                Delete</button>
            </li>
          ))}
          <button
            onClick={() => setGuests([])}
          >Clear All</button>
        </ul>

      </div>
    </>
  )
}

export default App

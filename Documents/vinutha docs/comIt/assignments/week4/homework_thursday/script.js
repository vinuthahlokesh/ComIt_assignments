const input = document.getElementById('guestNameInput');
const addBtn = document.getElementById('addGuestBtn');
const guestList = document.getElementById('guestList');
const confirmedCountDisplay = document.getElementById('confirmedCount');
const clearAllBtn = document.getElementById('clearAllBtn');

let guests = [];

function updateConfirmedCount() {
  const confirmed = guests.filter(guest => guest.confirmed).length;
  confirmedCountDisplay.textContent = `Confirmed Guests: ${confirmed}`;
}

function saveToLocalStorage() {
  localStorage.setItem('guestList', JSON.stringify(guests));
}

function loadFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('guestList')) || [];
  data.forEach(guest => addGuestToDOM(guest.name, guest.confirmed, false));
  guests = data;
  updateConfirmedCount();
}

function addGuestToDOM(name, isConfirmed = false, save = true) {
  const li = document.createElement('li');
  if (isConfirmed) li.classList.add('confirmed');

  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;
  li.appendChild(nameSpan);

  const confirmBtn = document.createElement('button');
  confirmBtn.textContent = 'Confirm';
  confirmBtn.addEventListener('click', () => {
    li.classList.toggle('confirmed');
    const guest = guests.find(g => g.name === name);
    guest.confirmed = !guest.confirmed;
    updateConfirmedCount();
    saveToLocalStorage();
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    guestList.removeChild(li);
    guests = guests.filter(g => g.name !== name);
    updateConfirmedCount();
    saveToLocalStorage();
  });

  li.appendChild(confirmBtn);
  li.appendChild(removeBtn);
  guestList.appendChild(li);

  if (save) {
    guests.push({ name, confirmed: isConfirmed });
    updateConfirmedCount();
    saveToLocalStorage();
  }
}

addBtn.addEventListener('click', () => {
  const name = input.value.trim();
  if (name === '') return;

  // Sort existing + new guest alphabetically
  addGuestToDOM(name);
  input.value = '';
  input.focus();
});

clearAllBtn.addEventListener('click', () => {
  guestList.innerHTML = '';
  guests = [];
  updateConfirmedCount();
  saveToLocalStorage();
});

window.addEventListener('DOMContentLoaded', loadFromLocalStorage);

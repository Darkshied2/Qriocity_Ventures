// script.js

// Dummy data for counselors and available time slots
const counselors = [
    { id: 1, name: 'Dr. Smith' },
    { id: 2, name: 'Dr. Johnson' },
    { id: 3, name: 'Dr. Williams' }
];

const availableSlots = {
    '2024-06-15': ['09:00 AM', '10:00 AM', '11:00 AM'],
    '2024-06-16': ['01:00 PM', '02:00 PM'],
    '2024-06-17': ['10:00 AM', '11:00 AM', '03:00 PM']
};

// Function to initialize the calendar
function initCalendar() {
    const calendarDiv = document.getElementById('calendar');
    calendarDiv.innerHTML = '';

    // Generate calendar days
    for (let i = 15; i <= 21; i++) { // example week
        const dayDiv = document.createElement('div');
        const date = `2024-06-${String(i).padStart(2, '0')}`;
        dayDiv.classList.add('day');
        dayDiv.textContent = `June ${i}`;
        
        if (availableSlots[date]) {
            dayDiv.classList.add('available');
            dayDiv.onclick = () => selectDate(date);
        } else {
            dayDiv.classList.add('unavailable');
        }

        calendarDiv.appendChild(dayDiv);
    }
}

// Function to populate counselor dropdown
function populateCounselors() {
    const counselorSelect = document.getElementById('counselor');
    counselorSelect.innerHTML = '';

    counselors.forEach(counselor => {
        const option = document.createElement('option');
        option.value = counselor.id;
        option.textContent = counselor.name;
        counselorSelect.appendChild(option);
    });
}

// Function to populate available time slots
function populateTimeSlots(date) {
    const timeSelect = document.getElementById('time');
    timeSelect.innerHTML = '';

    if (availableSlots[date]) {
        availableSlots[date].forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    }
}

// Function to handle date selection
function selectDate(date) {
    document.getElementById('date').value = date;
    populateTimeSlots(date);
}

// Function to handle appointment booking
function bookAppointment(event) {
    event.preventDefault();

    const counselorId = document.getElementById('counselor').value;
    const counselorName = counselors.find(c => c.id == counselorId).name;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (counselorId && date && time) {
        const appointment = {
            counselor: counselorName,
            date,
            time
        };

        saveAppointment(appointment);
        alert(`Appointment booked with ${counselorName} on ${date} at ${time}`);
        
        // Clear form and refresh appointments
        document.getElementById('appointmentForm').reset();
        displayAppointments();
    } else {
        alert('Please select a counselor, date, and time.');
    }
}

// Function to save appointment to local storage
function saveAppointment(appointment) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
}

// Function to remove an appointment from local storage
function removeAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    displayAppointments(); // Refresh the displayed list
}

// Function to display previous appointments with a remove button
function displayAppointments() {
    const appointmentsList = document.getElementById('appointmentsList');
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    appointmentsList.innerHTML = '';

    if (appointments.length > 0) {
        appointments.forEach((appointment, index) => {
            const li = document.createElement('li');
            li.classList.add('appointment-item');
            li.style.animationDelay = `${index * 0.1}s`; // Stagger the animations
            
            // Appointment details
            const details = document.createElement('span');
            details.textContent = `Counselor: ${appointment.counselor}, Date: ${appointment.date}, Time: ${appointment.time}`;
            li.appendChild(details);
            
            // Remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');
            removeBtn.onclick = () => removeAppointment(index);
            li.appendChild(removeBtn);

            appointmentsList.appendChild(li);
        });
    } else {
        appointmentsList.textContent = 'No previous appointments.';
    }
}

// Initialize the interface
document.addEventListener('DOMContentLoaded', () => {
    initCalendar();
    populateCounselors();
    displayAppointments();
    document.getElementById('appointmentForm').addEventListener('submit', bookAppointment);
});

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import 'react-calendar/dist/Calendar.css';

const events = [
  { 
    date: '2024-11-13', 
    title: 'Tsitsing Itireleng Sustainable Farming Programme 2024', 
    description: `Kgosana Koketso Rakhudu is launching the Tsitsing Itireleng Sustainable Farming Programme 2024.
    Join us for the launch of an initiative aimed at promoting sustainable farming practices and supporting our community. 
    As part of this program, we will be distributing 500 food hampers to identified families in Tsitsing.
    Venue: Tsitsing
    Date: Wednesday, 13 November 2024
    Time: 8:30 AM
    For more information, please contact Ms. Tsholo Nape at +27 (82) 972-5629`
  },
  { 
    date: '2024-11-17', 
    title: 'Recognising Excellence in Tsitsing with Keesana Koketso Rakhudu', 
    description: `Venue: Tsitsing Primary School
    Date: Sunday, 17 November 2024
    Time: 8:00 AM - 10:30 AM
    Dress Code: Traditional attire
    Key Area Focus:
    • 2025 Kgotla Calendar Launch
    • Tsitsing Excellence Awards Launch
    • Investment & Sustainability Development Trust Launch
    • Tsitsing Sim Cards Launch
    • Tsitsing Clinic Launch
    • Online Radio Station Launch
    • Tsitsing Graduate Programme
    • Strategic Partnerships MOUs Signing
    • Hakem Energies LPG Programme
    • Tsitsing Family Literacy Programme
    Contact Details: Ms. Tsholo Nape, +27 (82) 972-5629`
  },
  { 
    date: '2024-11-29', 
    title: 'Celebrating 9 Years of Kgosana Koketso Rakhudu', 
    description: `Kgosana Koketso Rakhudu's 9th Year of Community Leadership Excellence Graduation Ceremony & Historical Inauguration of Dr. Koketso Rakhudu as the Chancellor of KRF CET.
    Special Guests:
    Prof. Keo Motaung, Trailblazing Biomedical Scientist, Full Professor, and Founder and CEO of Global Health Biotech (PTY) Ltd
    Dr. Koketso Rakhudu, Incoming Chancellor of KRF CET
    Prof. Kgomo Mathabe, Head of the Department of Urology at the University of Pretoria and Steve Biko Academic Hospital
    Venue: Maile Kopman
    Date: Friday, 29 November 2024
    Time: 8:00 AM
    Dress Code: Formal`
  }
];

Modal.setAppElement('#root');

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const formatDateToUTC = (date) => {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
      .toISOString()
      .split('T')[0];
  };

  const getTileClass = ({ date }) => {
    const formattedDate = formatDateToUTC(date);
    const event = events.find(event => event.date === formattedDate);
    return event ? 'bg-green-600 text-yellow font-bold rounded-lg shadow-lg' : '';
  };

  const handleDayClick = (date) => {
    const formattedDate = formatDateToUTC(date);
    const event = events.find(event => event.date === formattedDate);

    if (event) {
      setSelectedEvent(event);
      setSelectedDate(date);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 via-white to-gray-200">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-center text-3xl font-serif font-bold text-green-700 mb-4">Community Event Calendar</h2>
        <Calendar
          onClickDay={handleDayClick}
          tileClassName={getTileClass}
          className="rounded-lg shadow-md p-4"
        />
      </div>

      {/* Event Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Event Details"
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-2xl mx-auto text-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl font-bold text-green-700">{selectedEvent?.title}</h2>
        <p className="text-gray-700 mt-4"><strong>Date:</strong> {selectedDate?.toDateString()}</p>
        <p className="text-gray-700 mt-2"><strong>Description:</strong> {selectedEvent?.description}</p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
        >
          Close
        </button>
      </Modal>


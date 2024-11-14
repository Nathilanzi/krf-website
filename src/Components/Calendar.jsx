import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Calendar as CalendarIcon, Phone } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';
import './styles/Calendar.css'
import { Helmet } from 'react-helmet';

const events = [
  {
    date: '2024-11-13',
    title: 'Tsitsing Itireleng Sustainable Farming Programme 2024',
    details: {
      description: 'Join us as Kgosana Koketso Rakhudu launches the 2024 Sustainable Farming Programme, a pivotal event focused on food security and community empowerment.',
      venue: 'Tsitsing Village Hall',
      time: '8:30 AM',
      contact: {
        name: 'Ms. Tsholo Nape',
        phone: '+27 (82) 972-5629'
      },
      highlights: [
        'Learning sustainable farming practices',
        'Distributing 500 food hampers to families in need'
      ]
    }
  },
  {
    date: '2024-11-17',
    title: 'Celebrating Excellence in Tsitsing',
    details: {
      venue: 'Tsitsing Primary School',
      time: '8:00 AM - 10:30 AM',
      dressCode: 'Traditional Attire',
      contact: {
        name: 'Ms. Tsholo Nape',
        phone: '+27 (82) 972-5629'
      },
      keyFocus: [
        '2025 Kgotla Calendar Launch',
        'Tsitsing Excellence Awards',
        'Launch of Tsitsing Family Literacy Program'
      ]
    }
  },
  {
    date: '2024-11-29',
    title: '9th Year Leadership Celebration',
    details: {
      description: "Celebrate Kgosana Koketso Rakhudu's 9 years of dedication and leadership with a special graduation ceremony and inauguration of Dr. Koketso Rakhudu as Chancellor of KRF CET.",
      venue: 'Maile Kopman',
      time: '8:00 AM',
      dressCode: 'Formal Attire',
      specialGuests: [
        'Prof. Keo Motaung - Biomedical Scientist & CEO of Global Health Biotech',
        'Dr. Koketso Rakhudu - Incoming Chancellor of KRF CET',
        'Prof. Kgomo Mathabe - Head of Urology, University of Pretoria'
      ]
    }
  }
];

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const formatDateToUTC = (date) => {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
      .toISOString()
      .split('T')[0];
  };

  const getTileContent = ({ date }) => {
    const formattedDate = formatDateToUTC(date);
    const event = events.find(event => event.date === formattedDate);

    if (event) {
      return (
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="absolute w-3 h-3 bg-green-700 rounded-full opacity-80 shadow-md"></div>
        </div>
      );
    }
    return null;
  };

  const getTileClassName = ({ date, view }) => {
    const formattedDate = formatDateToUTC(date);
    const hasEvent = events.some(event => event.date === formattedDate);
    const isCurrentDate = date.toDateString() === new Date().toDateString();
    
    return `
      ${hasEvent ? 'event-tile' : ''} 
      ${isCurrentDate ? 'current-date' : ''} 
      hover:bg-green-100 rounded-lg transition-colors duration-200
    `;
  };

  const handleDayClick = (date) => {
    const formattedDate = formatDateToUTC(date);
    const event = events.find(event => event.date === formattedDate);
    setSelectedDate(date);
    setSelectedEvent(event);
  };

  const EventDetails = ({ event }) => {
    if (!event) return null;

    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4">{event.title}</h2>
        <p className="text-gray-600 mb-4 italic">{event.details.description}</p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <CalendarIcon className="w-5 h-5 text-green-700" />
            <p>{new Date(event.date).toLocaleDateString('en-US', { 
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            })}</p>
          </div>
          
          <div className="text-sm grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-green-700">Venue</h3>
              <p>{event.details.venue}</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-700">Time</h3>
              <p>{event.details.time}</p>
            </div>
          </div>

          {event.details.dressCode && (
            <div className="mt-4">
              <h3 className="font-semibold text-green-700">Dress Code</h3>
              <p className="text-gray-700">{event.details.dressCode}</p>
            </div>
          )}

          {event.details.contact && (
            <div className="mt-4">
              <h3 className="font-semibold text-green-700">Contact</h3>
              <p>{event.details.contact.name}</p>
              <p><Phone className="inline w-4 h-4 text-green-700 mr-1" />{event.details.contact.phone}</p>
            </div>
          )}

          {event.details.highlights && (
            <div className="mt-4">
              <h3 className="font-semibold text-green-700">Highlights</h3>
              <ul className="list-disc list-inside space-y-1">
                {event.details.highlights.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {event.details.specialGuests && (
            <div className="mt-4">
              <h3 className="font-semibold text-green-700">Special Guests</h3>
              <ul className="list-disc list-inside space-y-1">
                {event.details.specialGuests.map((guest, index) => (
                  <li key={index} className="text-gray-700">{guest}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 p-6">
        <Helmet>
        <title>Community Event Calendar | Tsitsing</title>
        <meta name="description" content="Stay updated on community events organized by the Office of Kgosana Koketso Rakhudu, including sustainable farming programs and community awards." />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-serif font-bold text-green-800 mb-8">
          Community Event Calendar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <Calendar
              onClickDay={handleDayClick}
              tileClassName={getTileClassName}
              tileContent={getTileContent}
              className="rounded-lg shadow-md p-4"
              value={selectedDate}
            />
          </div>
          
          <div className="h-full">
            {selectedEvent ? (
              <EventDetails event={selectedEvent} />
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-lg h-full flex items-center justify-center">
                <div className="text-center">
                  <CalendarIcon className="w-12 h-12 text-green-600 mb-4" />
                  <p className="text-gray-700 font-semibold">
                    Select a date to view event details
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;

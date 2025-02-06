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
        phone: '+27 (82) 972-5629',
      },
      highlights: [
        'Learning sustainable farming practices',
        'Distributing 500 food hampers to families in need',
      ],
    },
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
        phone: '+27 (82) 972-5629',
      },
      keyFocus: [
        '2025 Kgotla Calendar Launch',
        'Tsitsing Excellence Awards',
        'Launch of Tsitsing Family Literacy Program',
      ],
    },
  },
  {
    date: '2024-11-29',
    title: '9th Year Leadership Celebration',
    details: {
      description:
        "Celebrate Kgosana Koketso Rakhudu's 9 years of dedication and leadership with a special graduation ceremony and inauguration of Dr. Koketso Rakhudu as Chancellor of KRF CET.",
      venue: 'Maile Kopman',
      time: '8:00 AM',
      dressCode: 'Formal Attire',
      specialGuests: [
        'Prof. Keo Motaung - Biomedical Scientist & CEO of Global Health Biotech',
        'Dr. Koketso Rakhudu - Incoming Chancellor of KRF CET',
        'Prof. Kgomo Mathabe - Head of Urology, University of Pretoria',
      ],
    },
    image: 'images/9thYear.jpg',
    alt: 'Leadership Celebration Event',
    loading: 'lazy',
  },
  {
    date: '2024-11-29',
    title: 'KRF Graduation ceremony',
    details: {
      description:
        "The Koketso Rakhudu Foundation (KRF) Graduation Ceremony is a celebration of achievement, empowerment, and growth. Scheduled for 29 November 2024, this prestigious event marks the culmination of the hard work and dedication of individuals who have completed various skills development, entrepreneurship, and leadership training programs offered by KRF.",
      venue: 'Maile Kopman',
      time: '8:00 AM',
      dressCode: 'Smart Casual',
    },
    image: 'images/KRFGraduation.jpeg',
    alt: 'Leadership Celebration Event',
    loading: 'lazy',
  },
  {
    date: '2024-12-02',
    title: 'Ha Kutama Traditional Authority',
    details: {
      description:
        "Key Area Focus: Ha Kutama Traditional Authority Investment & Sustainability Development Trust, Economic Development, Skills Development Programme & Community Public-Private Partnership, The Village Economy Indaba, Limpopo Province",
      venue: 'Limpopo Province, Venda, Tshikwarani Tribal Office',
      time: '9:00AM',
      dressCode: 'Traditional Attire',
      
    },
    image: 'images/HaKutama.jpeg',
    alt: 'Cape Town Business Breakfast with Dr Koketso Rakhudu',
    loading: 'lazy',
  },
  {
    date: '2024-12-04',
    title: 'Cape Town Business Breakfast',
    details: {
      description:
        "Launching various initiatives by Dr Koketso Rakhudu",
      venue: 'Cape Town (Invite only)',
      time: '9:00 - 11:30 AM',
      
    },
    image: 'images/CapeTown04.jpeg',
    alt: 'Cape Town Business Breakfast with Dr Koketso Rakhudu',
    loading: 'lazy',
  },
  {
    date: '2024-12-05',
    title: 'Cape Town 5th Annual Africa ESG',
    details: {
      description:
        "Impact Investing & Sustainable Finance Summit 2024",
      venue: 'Cape Town (Invite only)',
           
    },
    image: 'images/CapeTown05.jpeg',
    alt: 'Cape Town Business Breakfast with Dr Koketso Rakhudu',
    loading: 'lazy',
  },
  {
    date: '2024-12-06',
    title: 'Cape Town 5th Annual Africa ESG',
    details: {
      description:
        "Impact Investing & Sustainable Finance Summit 2024",
      venue: 'Cape Town (Invite only)',
           
    },
    image: 'images/CapeTown05.jpeg',
    alt: 'Cape Town Business Breakfast with Dr Koketso Rakhudu',
    loading: 'lazy',
  },
  {
    date: '2024-12-24',
    title: '100 Family Christmas Giveaway',
    details: {
      description:
        "Donating Christmas hampers to 100 families",
      venue: 'Tsitsing/Tlaseng',
      time: '9:00 - 11:30 AM',
           
    },
    image: 'images/ChristmasDrive.jpg',
    alt: 'Christmas Giveaway with Dr Kgosana Koketso Rakhudu',
    loading: 'lazy',
  },
  {
    date: '2025-01-16',
    title: 'Executive Committee Lekgotla',
    details: {
      description:
        "Finding out where do we Improve",
      time: '5:30 PM',
           
    },
    image: 'images/LekgotlaWithKgosanaKoketso.jpeg',
    alt: 'Lekgitla with Dr Koketso Rakhudu',
    loading: 'lazy',
  },
  {
    date: '2025-01-21',
    title: 'Community Forums Lekgotla',
    details: {
      description:
        "Answering what is our role?",
      time: '5:30 PM',
           
    },
    image: 'images/LekgotlaWithKgosanaKoketso.jpeg',
    alt: 'Lekgitla with Dr Koketso Rakhudu',
    loading: 'lazy',
  },
  {
    date: '2025-01-23',
    title: 'Faithbased Leaders Lekgotla',
    details: {
      description:
        "Answering where is the Church? ",
      time: '5:30 PM',
           
    },
    image: 'images/LekgotlaWithKgosanaKoketso.jpeg',
    alt: 'Lekgitla with Dr Koketso Rakhudu',
    loading: 'lazy',
  },
  {
    date: '2025-01-28',
    title: 'Tuckshops, Tavern Owners & Landlords Lekgotla',
    details: {
      description:
        "Ensuring that they comply",
      time: '5:30 PM',
           
    },
    image: 'images/LekgotlaWithKgosanaKoketso.jpeg',
    alt: 'Lekgitla with Dr Koketso Rakhudu',
    loading: 'lazy',
  },
  {
    date: '2025-01-30',
    title: 'All Makgotla Exco Lekgotla',
    details: {
      description:
        "Finding what is our collective Responsibility",
      time: '5:30 PM',
           
    },
    image: 'images/LekgotlaWithKgosanaKoketso.jpeg',
    alt: 'Lekgitla with Dr Koketso Rakhudu',
    loading: 'lazy',
  },
  {
    date: '2025-02-21',
    title: '10th Year Leadership Vision Impact Of Dr Koketso Rakhudu',
    details: {
      description:
        "Chronicles Night of Stakeholder Engagements 2025",
      venue: 'Invite Only!',
      time: '6:30 PM',
      DressCode: 'All Black' ,
           
    },
    image: 'images/DrKoketsoRakhuduChroniclesNight.jpeg',
    alt: 'Chronicles Night of Stakeholders Engagement 2025 ',
    loading: 'lazy',
  },
  {
    date: '2025-02-23',
    title: 'Dr Koketso Rakhudu Goodwill SOKA 2025',
    details: {
      description:
        "State of Kgotla Address (SOKA) is an annual Lekgotla in which Kgosana of the community Reports on the status of the community and outlines the development plans for the upcoming year.  ",
      venue: 'Tsitsing, Manape Secondary School',
      time: '8:00 AM',
      dressCode: 'Kgaka/Traditional Wear'
           
    },
    image: 'images/SOKA2025Poster.jpeg',
    alt: 'State of Kgotla Address with Dr Koketso Rakhudu',
    loading: 'lazy',
  },
  {
    date: '2025-02-01',
    title: 'Cape Town Investment Summit',
    details: {
      description:
        "Dr Kgosana Koketso Rakhudu will be taking part in the Cape Town Investment Summit",
      venue: 'Cape Town',
      time: '8:00 AM',
      dressCode: 'Semi-Formal'
           
    },
    image: 'images/CommunityLeadershipExcellence.jpeg',
    alt: 'Cape Town Investment Summit',
    loading: 'lazy',
  },
  {
    date: '2025-02-02',
    title: 'Cape Town Investment Summit',
    details: {
      description:
        "Dr Kgosana Koketso Rakhudu will be taking part in the Cape Town Investment Summit",
      venue: 'Cape Town',
      time: '8:00 AM',
      dressCode: 'Semi-Formal'
           
    },
    image: 'images/CommunityLeadershipExcellence.jpeg',
    alt: 'Cape Town Investment Summit',
    loading: 'lazy',
  },
  {
    date: '2025-02-03',
    title: 'Cape Town Business Breakfast',
    details: {
      description:
        "Dr Kgosana Koketso Rakhudu will be taking part in the Cape Town Business Breakfast",
      venue: 'Cape Town',
      time: '8:00 AM',
      dressCode: 'Semi-Formal'
           
    },
    image: 'images/CommunityLeadershipExcellence.jpeg',
    alt: 'Cape Town Investment Summit',
    loading: 'lazy',
  },
  {
    date: '2025-02-03',
    title: 'Cape Town Mining Indaba',
    details: {
      description:
        "Dr Kgosana Koketso Rakhudu will be taking part in the Cape Town Mining Indaba",
      venue: 'Cape Town',
      time: '8:00 AM',
      dressCode: 'Semi-Formal'
           
    },
    image: 'images/CommunityLeadershipExcellence.jpeg',
    alt: 'Cape Town Investment Summit',
    loading: 'lazy',
  },
  {
    date: '2025-02-04',
    title: 'Cape Town Mining Indaba',
    details: {
      description:
        "Dr Kgosana Koketso Rakhudu will be taking part in the Cape Town Mining Indaba",
      venue: 'Cape Town',
      time: '8:00 AM',
      dressCode: 'Semi-Formal'
           
    },
    image: 'images/CommunityLeadershipExcellence.jpeg',
    alt: 'Cape Town Investment Summit',
    loading: 'lazy',
  },
  {
    date: '2025-02-05',
    title: 'Cape Town Mining Indaba',
    details: {
      description:
        "Dr Kgosana Koketso Rakhudu will be taking part in the Cape Town Mining Indaba",
      venue: 'Cape Town',
      time: '8:00 AM',
      dressCode: 'Semi-Formal'
           
    },
    image: 'images/CommunityLeadershipExcellence.jpeg',
    alt: 'Cape Town Investment Summit',
    loading: 'lazy',
  },
  {
    date: '2025-02-06',
    title: 'Cape Town Mining Indaba',
    details: {
      description:
        "Dr Kgosana Koketso Rakhudu will be taking part in the Cape Town Mining Indaba",
      venue: 'Cape Town',
      time: '8:00 AM',
      dressCode: 'Semi-Formal'
           
    },
    image: 'images/CommunityLeadershipExcellence.jpeg',
    alt: 'Cape Town Investment Summit',
    loading: 'lazy',
  },
  {
    date: '2025-02-04',
    title: 'Cape Town Fetola Partner summit',
    details: {
      description:
        "Dr Kgosana Koketso Rakhudu will be taking part in the Cape Town Fetola Partner Summit",
      venue: 'Cape Town',
      time: '8:00 AM',
      dressCode: 'Semi-Formal'
           
    },
    image: 'images/CommunityLeadershipExcellence.jpeg',
    alt: 'Cape Town Investment Summit',
    loading: 'lazy',
  },
  {
    date: '2025-02-04',
    title: 'State of the Nation Address',
    details: {
      description:
        "Dr Kgosana Koketso Rakhudu has been invited to be a part of the State of the Nation Address",
      venue: 'Cape Town',
      dressCode: 'Formal'
           
    },
    image: 'images/CommunityLeadershipExcellence.jpeg',
    alt: 'Cape Town Investment Summit',
    loading: 'lazy',
  },
  {
    date: '2025-02-05',
    title: 'University of Cape town & Stellenbosch University Key Note',
    details: {
      description:
        "Dr Kgosana Koketso Rakhudu will be speaking as a keynote at the University of Cape Town and Stellenbosch University.",
      venue: 'Cape Town',
      time: '8:00 AM',
      dressCode: 'Semi-Formal'
           
    },
    image: 'images/CommunityLeadershipExcellence.jpeg',
    alt: 'Cape Town Investment Summit',
    loading: 'lazy',
  },
  {
    date: '2025-02-03',
    title: 'Investment Stakeholder Summit',
    details: {
      description:
        "Dr Kgosana Koketso Rakhudu will be taking part in the Investment Stakeholder Summit",
      venue: 'Cape Town',
      time: '8:00 AM',
      dressCode: 'Semi-Formal'
           
    },
    image: 'images/CommunityLeadershipExcellence.jpeg',
    alt: 'Cape Town Investment Summit',
    loading: 'lazy',
  },
  {
    date: '2025-02-27',
    title: '5th Annual Africa ESG ',
    details: {
      description:
        "Dr Kgosana Koketso Rakhudu will be taking part in the 5th Annual Africa ESG impact investing & sustainable finance summit",
      venue: 'Cape Town',
      time: '8:00 AM',
      dressCode: 'Semi-Formal'
           
    },
    image: 'images/AnnualAfricaESG.jpeg',
    alt: 'Annual Africa ESG',
    loading: 'lazy',
  },
  {
    date: '2025-02-28',
    title: '5th Annual Africa ESG ',
    details: {
      description:
        "Dr Kgosana Koketso Rakhudu will be taking part in the 5th Annual Africa ESG impact investing & sustainable finance summit",
      venue: 'Cape Town',
      time: '8:00 AM',
      dressCode: 'Semi-Formal'
           
    },
    image: 'images/AnnualAfricaESG.jpeg',
    alt: 'Annual Africa ESG',
    loading: 'lazy',
  },
];

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  const formatDateToUTC = (date) => {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
      .toISOString()
      .split('T')[0];
  };

  const getTileContent = ({ date }) => {
    const formattedDate = formatDateToUTC(date);
    const eventsOnDate = events.filter((event) => event.date === formattedDate);

    if (eventsOnDate.length > 0) {
      return (
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="absolute w-3 h-3 bg-green-700 rounded-full opacity-80 shadow-md"></div>
          {eventsOnDate.length > 1 && (
            <span className="absolute bottom-0 right-0 text-xs text-white bg-green-600 rounded-full px-1">
              {eventsOnDate.length}
            </span>
          )}
        </div>
      );
    }
    return null;
  };

  const getTileClassName = ({ date }) => {
    const formattedDate = formatDateToUTC(date);
    const hasEvent = events.some((event) => event.date === formattedDate);
    const isCurrentDate = date.toDateString() === new Date().toDateString();

    return `
      ${hasEvent ? 'event-tile' : ''} 
      ${isCurrentDate ? 'current-date' : ''} 
      hover:bg-green-100 rounded-lg transition-colors duration-200
    `;
  };

  const handleDayClick = (date) => {
    const formattedDate = formatDateToUTC(date);
    const eventsOnDate = events.filter((event) => event.date === formattedDate);
    setSelectedDate(date);
    setSelectedEvents(eventsOnDate);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const EventDetails = ({ events }) => {
    if (!events || events.length === 0) return null;

    return (
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-8">
        {events.map((event, index) => (
          <div key={index}>
            {event.image && (
              <img
                src={event.image}
                alt={event.alt || 'Event image'}
                className="w-full h-64 object-contain rounded-lg shadow-md mb-4 cursor-pointer"
                loading={event.loading || 'lazy'}
                onClick={() => openModal(event.image)}
              />
            )}
            <h2 className="text-2xl font-bold text-green-800 mb-4">{event.title}</h2>
            {event.details.description && (
              <p className="text-gray-600 mb-4 italic">{event.details.description}</p>
            )}

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <CalendarIcon className="w-5 h-5 text-green-700" />
                <p>
                  {new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
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
                <div>
                  <h3 className="font-semibold text-green-700">Dress Code</h3>
                  <p className="text-gray-700">{event.details.dressCode}</p>
                </div>
              )}

              {event.details.specialGuests && (
                <div>
                  <h3 className="font-semibold text-green-700">Special Guests</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {event.details.specialGuests.map((guest, idx) => (
                      <li key={idx} className="text-gray-700">
                        {guest}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 p-6">
      <Helmet>
        <title>Community Event Calendar | Tsitsing</title>
        <meta
          name="description"
          content="Stay updated on community events organized by the Office of Kgosana Koketso Rakhudu, including sustainable farming programs and community awards."
        />
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
            {selectedEvents.length > 0 ? (
              <EventDetails events={selectedEvents} />
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

      {/* Modal for Image */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-full max-h-screen">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-4xl font-bold focus:outline-none"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Enlarged event"
              className="w-auto max-w-full max-h-screen rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;

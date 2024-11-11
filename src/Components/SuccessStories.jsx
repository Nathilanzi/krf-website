import React, { useState } from 'react';

const SuccessStory = ({ story }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
            <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 text-2xl font-semibold text-green-800">{story.title}</h3>
            <p className="mt-2 text-gray-700">{story.description}</p>
            {story.video && (
                <button onClick={toggleModal} className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                    Watch Video
                </button>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <button onClick={toggleModal} className="text-gray-500 hover:text-gray-800 text-xl mb-2">
                            Close
                        </button>
                        <video src={story.video} controls className="w-full h-auto rounded-md" />
                    </div>
                </div>
            )}
        </div>
    );
};

const SuccessStories = () => {
    const stories = [
        {
            title: "Empowering Rural Women",
            description: "This initiative helped women in rural areas build sustainable businesses and contribute to their local economy.",
            image: "/images/women-empowerment.jpg",
            video: "/videos/women-empowerment.mp4"
        },
        {
            title: "Youth Entrepreneurship",
            description: "Young entrepreneurs were able to launch their own startups, creating jobs and fostering innovation in their communities.",
            image: "/images/youth-entrepreneurship.jpg",
        },
        {
            title: "Agricultural Advancements",
            description: "Modern farming techniques were introduced, boosting productivity and creating a steady income stream for farmers.",
            image: "/images/agriculture.jpg",
            video: "/videos/agriculture.mp4"
        }
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto text-center mb-8">
                <h2 className="text-3xl font-semibold text-green-700">Success Stories</h2>
                <p className="text-gray-600 mt-2">Discover inspiring stories from our community members who have achieved remarkable milestones.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {stories.map((story, index) => (
                    <SuccessStory key={index} story={story} />
                ))}
            </div>
        </section>
    );
};

export default SuccessStories;

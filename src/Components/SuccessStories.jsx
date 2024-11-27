import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const SuccessStory = ({ story }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const openModalWithVideo = (videoSrc) => {
        setCurrentVideo(videoSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
    };

    return (
        <div className="p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
            {story.media ? (
                <Swiper
                    modules={[Navigation]}
                    navigation
                    className="w-full h-48 rounded-md"
                >
                    {story.media.map((item, index) =>
                        item.type === 'image' ? (
                            <SwiperSlide key={index}>
                                <img
                                    src={item.src}
                                    alt={story.title}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                            </SwiperSlide>
                        ) : (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-48">
                                    <img
                                        src="/images/video-thumbnail.jpg" // Replace with a static thumbnail or generate dynamically
                                        alt="Video Thumbnail"
                                        className="w-full h-48 object-cover rounded-md"
                                    />
                                    <button
                                        onClick={() => openModalWithVideo(item.src)}
                                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md text-white"
                                    >
                                        ▶ Play Video
                                    </button>
                                </div>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            ) : (
                <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover rounded-md"
                />
            )}
            <h3 className="mt-4 text-2xl font-semibold text-green-800">{story.title}</h3>
            <p className="mt-2 text-gray-700">{story.description}</p>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <button
                            onClick={closeModal}
                            className="text-gray-500 hover:text-gray-800 text-xl mb-4"
                        >
                            ✕ Close
                        </button>
                        <video src={currentVideo} controls autoPlay className="w-full h-auto rounded-md" />
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
            image: "/images/constructionlearners.jpeg",
        },
        {
            title: "Youth Entrepreneurship",
            description: "Young entrepreneurs were able to launch their own startups, creating jobs and fostering innovation in their communities.",
            image: "/images/KgosanaYouthStakeholders.jpeg",
        },
        {
            title: "Agricultural Advancements",
            description: "Modern farming techniques were introduced, boosting productivity and creating a steady income stream for farmers.",
            media: [
           { type: "image", src: "/images/Communityengagement.jpeg",}
            ],
        },
        {
            title: "Final Kgotla of 2024",
            description: "The final kgotla of 2024 was held on the 17th of November where Kgosana Koketso Rakhudu celebrated 9 years of Leadership excellence and appreciated those who have played a pivotal role in his leadership term.",
            media: [
                { type: "image", src: "/images/DancingKgotla.jpeg" },
                { type: "image", src: "/images/DancingKgotla1.jpeg" },
                { type: "image", src: "/images/KgotlaStakeholder.jpeg" },
                { type: "video", src: "/videos/FinalKgotla2024.mp4", 
                    thumbnail: "/images/KgotlhaDesign.jpg" },
            ],
        },
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

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SuccessStory = ({ story }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const modalRef = useRef(null); // Correctly define modalRef here

    // Log the story object and media array
    console.log("SuccessStory Loaded:", story);

    const openModalWithVideo = (videoSrc) => {
        console.log("Opening Modal with Video Src:", videoSrc); // Log the video src
        setCurrentVideo(videoSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        console.log("Closing Modal"); // Log when the modal is closed
        setIsModalOpen(false);
        setCurrentVideo(null);
    };

    // Close the modal when clicking outside the modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        // Add event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col justify-between p-6 rounded-lg shadow-lg bg-white max-w-md w-full h-[450px]">
            {story.media ? (
                <Swiper
                    modules={[Navigation]}
                    navigation
                    className="w-full h-48 object-contain rounded-md"
                >
                    {story.media.map((item, index) =>
                        item.type === "image" ? (
                            <SwiperSlide key={index}>
                                <img
                                    src={item.src}
                                    alt={story.title}
                                    className="w-full h-48 object-contain rounded-md"
                                />
                            </SwiperSlide>
                        ) : (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-48">
                                    <img
                                        src={item.thumbnail || "/images/defaultThumbnail.png"} // Custom thumbnail or fallback
                                        alt="Video Thumbnail"
                                        className="w-full h-48 object-contain rounded-md"
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
                    <div
                    ref={modalRef}
                    className="bg-white rounded-lg shadow-lg max-w-3xl w-full"
                    style={{ maxHeight: '80vh' }} // Limit max height
                    >
                        <button
                            onClick={closeModal}
                            className="text-gray-500 hover:text-gray-800 text-xl mb-4"
                        >
                            ✕ Close
                        </button>
                        <video
                            src={currentVideo}
                            controls
                            autoPlay
                            className="w-full h-80 rounded-md max-h-[80vh] object-contain"
                        />
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
            description:
                "This initiative helped women in rural areas build sustainable businesses and contribute to their local economy.",
            image: "/images/constructionlearners.jpeg",
        },
        {
            title: "Youth Entrepreneurship",
            description:
                "Young entrepreneurs were able to launch their own startups, creating jobs and fostering innovation in their communities.",
            image: "/images/KgosanaYouthStakeholders.jpeg",
        },
        {
            title: "Agricultural Advancements",
            description:
                "Modern farming techniques were introduced, boosting productivity and creating a steady income stream for farmers.",
            media: [{ type: "image", src: "/images/Communityengagement.jpeg" }],
        },
        {
            title: "The Village Economy Indaba Launch 01 November 2024",
            description:
                "The Village Economy Indaba marked a significant milestone in fostering collaboration, celebrating Kgosana Koketso Rakhudu's leadership, and driving sustainable development across the community.",
            media: [
                { type: "image", src: "/images/TVEIRTB.jpg" },
                {
                    type: "video",
                    src: "https://drive.google.com/uc?export=download&id=1zVxBsaVYQH-pSe8naFzqryoF-7IZktOh",
                    thumbnail: "/images/TVEILogo.png",
                },
            ],
        },
        {
            title: "Final Kgotla of 2024",
            description:
                "The final kgotla of 2024 was held on the 17th of November where Kgosana Koketso Rakhudu celebrated 9 years of leadership excellence and appreciated those who have played a pivotal role in his leadership term.",
            media: [
                { type: "image", src: "/images/DancingKgotla.jpeg" },
                { type: "image", src: "/images/DancingKgotla1.jpeg" },
                { type: "image", src: "/images/KgotlaStakeholder.jpeg" },
                { type: "video", src: "/videos/FinalKgotla2024.mp4", thumbnail: "/images/KgotlhaLogo.png" },
            ],
        },
        {
            title: "9th Year of Leadership Celebration",
            description:
                "Celebrate Kgosana Koketso Rakhudu's 9 years of dedication and leadership with a special graduation ceremony and inauguration of Dr. Koketso Rakhudu as Chancellor of KRF CET.",
            media: [
                { type: "image", src: "/images/KgosanaChancellor.jpeg" },
                { type: "image", src: "/images/KgosanaChancellor2.jpeg" },
                { type: "image", src: "/images/KgosanaChancellor1.jpeg" },
            ],
        },
        {
            title: "KRF Graduation ceremony",
            description:
                "The Koketso Rakhudu Foundation (KRF) Graduation Ceremony is a celebration of achievement, empowerment, and growth. Scheduled for 29 November 2024, this prestigious event marks the culmination of the hard work and dedication of individuals who have completed various skills development, entrepreneurship, and leadership training programs offered by KRF.",
            media: [
                { type: "image", src: "/images/KRFKgosanaGraduation.jpg" },
                { type: "image", src: "/images/KRFGraduationStill2.jpg" },
                { type: "image", src: "/images/KRFGraduationCrowd.jpg" },
                { type: "video", src: "/videos/KRFGraduations.mp4", thumbnail: "/images/KRFLogo.png" },
            ],
        },
        {
            title: "The Village Economy Indaba Launch in Limpopo 02 December 2024",
            description:
                "The Village Economy Indaba marked a significant milestone in fostering collaboration, and driving sustainable development across the community.",
            media: [
                { type: "image", src: "/images/TVEILimpopoKgosana.jpeg" },
                { type: "image", src: "/images/TVEILimpopoStakeholders.jpeg" },
                { type: "image", src: "/images/TVEILimpopo1.jpeg" },
                { type: "image", src: "/images/TVEILimpopoStakeholder1.jpeg" },
                { type: "image", src: "/images/TVEILimpopoStakeholder.jpeg" },
                { type: "image", src: "/images/TVEILimpopoSB.jpg" },
            ],
        },
        {
            title: "The Village Economy Indaba Launch in Cape Town 05 December 2024",
            description:
                "The Village Economy Indaba marked a significant milestone in fostering collaboration, and driving sustainable development across the community.",
            media: [
                { type: "image", src: "/images/TVEICptStakeholders.jpeg" },
                { type: "image", src: "/images/TVEICPTTeam.jpeg" },
                { type: "image", src: "/images/TVEICPT1.jpeg" },
                { type: "video", src: "/videos/TVEICptReel.mp4", thumbnail: "/images/TVEILogo.png" },
                { type: "image", src: "/images/TVEICptSB.jpg" },
            ],
        },
        {
            title: "100 Families Christmas Donation",
            description:
                "Hakem Energies Community Christmas Party with Kgosana Koketso Rakhudu & Mrs Refilwe Sebothoma, CEO of Hakem Energies were celebrating the spirit of togetherness with the Christmas Party! To remind people that the true sense of the season lies in unity, kindness and giving back.",
            media: [
                { type: "image", src: "/images/KgosanaHelping.jpeg" },
                { type: "image", src: "/images/RefilweSebothomaHelping.jpeg" },
                { type: "image", src: "/images/ChristmasGiveaway.jpeg" },
                { type: "image", src: "/images/StakeholderGiveaways.jpeg" },
                { type: "image", src: "/images/DancingParty.jpeg" },
                { type: "video", src: "/videos/KgosanaRakhuduXmas.mp4", thumbnail: "/images/KRFDesign.jpg" },
                { type: "video", src: "/videos/RefilweHakemXmas.mp4", thumbnail: "/images/KRFDesign.jpg" },
                { type: "video", src: "/videos/HakemEnergiesTumeloPhalane.mp4", thumbnail: "/images/KRFDesign.jpg" },
                { type: "video", src: "/videos/HakemEnergiesInterview1.mp4", thumbnail: "/images/KRFDesign.jpg" },
                { type: "video", src: "/videos/HakemEnergiesInterview2.mp4", thumbnail: "/images/KRFDesign.jpg" },
                { type: "video", src: "/videos/HakemEnergiesHowToConnectGas.mp4", thumbnail: "/images/KRFDesign.jpg" },
            ],
        },
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto text-center mb-8">
                <h2 className="text-3xl font-semibold text-green-700">Success Stories</h2>
                <p className="text-gray-600 mt-2">
                    Discover inspiring stories from our community members who have achieved remarkable milestones.
                </p>
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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const settings = {
        dots: true,                // จุดบอกตำแหน่งของการ์ด
        infinite: true,            // ทำให้เลื่อนแบบวนลูป
        speed: 500,                // ความเร็วในการเลื่อน
        slidesToShow: 3,           // จำนวนการ์ดที่แสดง
        slidesToScroll: 1,         // จำนวนการ์ดที่เลื่อนต่อครั้ง
        autoplay: true,            // เลื่อนอัตโนมัติ
        autoplaySpeed: 2000,       // ความเร็วในการเลื่อนอัตโนมัติ (มิลลิวินาที)
        arrows: false,             // ปิดการแสดงผลลูกศร
        responsive: [
            {
                breakpoint: 960,   // กำหนดขนาดจอที่น้อยกว่า 960px (md)
                settings: {
                    slidesToShow: 1,  // แสดงแค่ 1 การ์ดเมื่อขนาดจอเล็กกว่า md
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const settingss = {
        dots: true,                // จุดบอกตำแหน่งของการ์ด
        infinite: true,            // ทำให้เลื่อนแบบวนลูป
        speed: 500,                // ความเร็วในการเลื่อน
        slidesToShow: 1,           // จำนวนการ์ดที่แสดง
        slidesToScroll: 1,         // จำนวนการ์ดที่เลื่อนต่อครั้ง
        autoplay: true,            // เลื่อนอัตโนมัติ
        autoplaySpeed: 2000,       // ความเร็วในการเลื่อนอัตโนมัติ (มิลลิวินาที)
        arrows: false,             // ปิดการแสดงผลลูกศร
        responsive: [
            {
                breakpoint: 960,   // กำหนดขนาดจอที่น้อยกว่า 960px (md)
                settings: {
                    slidesToShow: 1,  // แสดงแค่ 1 การ์ดเมื่อขนาดจอเล็กกว่า md
                    slidesToScroll: 1,
                }
            }
        ]
    };
    

    const cards = [
        { title: "fade", image: 'imageorvideo/fade.png' },
        { title: "harbor", image: 'imageorvideo/harbor.png' },
        { title: "phoenix", image: 'imageorvideo/phoenix.png' },
        { title: "reyna", image: 'imageorvideo/reyna.png' },
        { title: "sage", image: 'imageorvideo/sage.png' },
    ];
    const videos = [
        { title: "map1", src: 'videos/map1.mp4', poster: 'imageorvideo/map1.jpg' },
        { title: "map2", src: 'videos/map2.mp4', poster: 'imageorvideo/map2.jpg' },
        { title: "map3", src: 'videos/map3.mp4', poster: 'imageorvideo/map3.jpg' },
        { title: "map4", src: 'videos/map4.mp4', poster: 'imageorvideo/map4.jpg' },
        { title: "map5", src: 'videos/map5.mp4', poster: 'imageorvideo/map5.jpg' },
    ];
    
   
    


    const navigate = useNavigate();
    const [openDialog, setOpenDialog] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token'); // ลบ token ออกจาก localStorage
        navigate('/login'); // เปลี่ยนเส้นทางไปที่หน้า Login
    };

    const handleOpenDialog = () => {
        setOpenDialog(true); // เปิด Dialog
    };

    const handleCloseDialog = () => {
        setOpenDialog(false); // ปิด Dialog
    };

    const confirmLogout = () => {
        handleLogout(); // เรียกใช้ฟังก์ชันล็อกเอาท์
        handleCloseDialog(); // ปิด Dialog
    };

    // ดึงอีเมลล์ผู้ใช้จาก localStorage
    const userEmail = localStorage.getItem('userEmail');

    const newsArticles = [
        {
            id: 1,
            title: "ปรับปรุง Server 3/11/2567",
            description: "เกิดจากปัญหาคนเล่นโปรเยอะระบบจะต้องรีบทำการเร่งเเก้ไข",
            image: '/imageorvideo/new4.jpeg', // แทนที่ด้วย URL ของภาพจริง
        },
        {
            id: 2,
            title: "กิจกรรมพิเศษ",
            description: "กิจกรรมในเกมที่ให้ผู้เล่นมีโอกาสได้รับไอเท็มพิเศษ และรางวัลที่น่าสนใจทุกสัปดาห์!",
            image: '/imageorvideo/new2.png', // แทนที่ด้วย URL ของภาพจริง
        },
        {
            id: 3,
            title: "อัปเดตแพทช์",
            description: "แพทช์ล่าสุดที่ปรับปรุงและเพิ่มคุณสมบัติใหม่เพื่อประสบการณ์การเล่นเกมที่ดียิ่งขึ้น",
            image: '/imageorvideo/new3.png', // แทนที่ด้วย URL ของภาพจริง
        },
    ];
    const newsArticles2 = [
        {
            id: 4,
            title: "ปรับปรุง Server 3/11/2567",
            description: "เกิดจากปัญหาคนเล่นโปรเยอะระบบจะต้องรีบทำการเร่งเเก้ไข",
            image: '/imageorvideo/new5.png', // แทนที่ด้วย URL ของภาพจริง
        },
        {
            id: 5,
            title: "กิจกรรมพิเศษ",
            description: "กิจกรรมในเกมที่ให้ผู้เล่นมีโอกาสได้รับไอเท็มพิเศษ และรางวัลที่น่าสนใจทุกสัปดาห์!",
            image: '/imageorvideo/valo1.jpg', // แทนที่ด้วย URL ของภาพจริง
        },
        {
            id: 6,
            title: "อัปเดตแพทช์",
            description: "แพทช์ล่าสุดที่ปรับปรุงและเพิ่มคุณสมบัติใหม่เพื่อประสบการณ์การเล่นเกมที่ดียิ่งขึ้น",
            image: '/imageorvideo/valo 3.jpg', // แทนที่ด้วย URL ของภาพจริง
        },
    ];


    return (
        <div className=' flex flex-col'>
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/imageorvideo/valorant.mp4" // เปลี่ยนเป็นที่อยู่ของวิดีโอของคุณ
                    autoPlay
                    loop
                    muted
                />
                <div className="relative z-10 flex flex-col text-center mx-0 md:mx-5 gap-9 items-center justify-center h-full">
                    {/* หัวข้อที่มีเงา */}
                    <h1 className="text-2xl md:text-4xl  text-white font-extrabold tracking-wide font-roboto-mono  animate-colorChange shadow-lg">
                        เกมยิงปืนในรูปแบบ 5v5 <br /> ที่ขับเคลื่อนโดยเหล่าเอเจนท์ผู้มากความสามารถ
                    </h1>
                    <h1 className="text-8xl font-extrabold animate-bounce text-white drop-shadow-2xl font-roboto-mono">
                        Valorant
                    </h1>
                    <button className="px-6 py-2 font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg border border-b-2 border-black transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:animate-pulse">
                        เล่นฟรี
                    </button>
                </div>
            </div>
            {/* //ข่าวสาร */}
            <div className="p-6 bg-gray-900 min-h-screen text-white relative overflow-hidden">
                {/* รูปภาพพื้นหลังเต็มหน้าจอ */}
                <img className="w-full h-full object-cover absolute inset-0 filter brightness-110 contrast-125" src='/imageorvideo/new5.png' alt="Background Image" />

                {/* เนื้อหาภายใน */}
                <div className="relative z-10">
                    {/* หัวข้อข่าวสาร */}
                    <div className="flex items-center justify-center mb-8">
                        {/* เส้นขีดซ้าย */}
                        <div className="flex-grow border-b-2 border-white h-1 transition-transform duration-300 transform hover:scale-y-150 mr-4"></div>

                        {/* หัวข้อข่าวสาร */}
                        <h1 className="text-3xl md:text-5xl text-white text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-fadeIn mx-4 relative">
                            ข่าวสารล่าสุด
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></span>
                        </h1>
                        {/* เส้นขีดขวา */}
                        <div className="flex-grow border-b-2 border-white h-1 transition-transform duration-300 transform hover:scale-y-150 ml-4"></div>
                    </div>

                    {/* คอนเทนเนอร์การ์ดข่าวสาร */}
                    <div className='flex flex-col gap-5'>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {newsArticles.map((article) => (
                                <div key={article.id} className="bg-gray-800 bg-opacity-90 rounded-lg p-5 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:rotate-y-5 transition-transform duration-300 animate-fadeIn perspective">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-32 object-cover rounded-t-lg mb-4"
                                    />
                                    <h2 className="text-2xl font-bold text-blue-400 mb-4">{article.title}</h2>
                                    <p className="text-gray-300">{article.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {newsArticles2.map((newsArticles2) => (
                                <div key={newsArticles2.id} className="bg-gray-800 bg-opacity-90 rounded-lg p-5 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:rotate-y-5 transition-transform duration-300 animate-fadeIn perspective">
                                    <img
                                        src={newsArticles2.image}
                                        alt={newsArticles2.title}
                                        className="w-full h-32 object-cover rounded-t-lg mb-4"
                                    />
                                    <h2 className="text-2xl font-bold text-blue-400 mb-4">{newsArticles2.title}</h2>
                                    <p className="text-gray-300">{newsArticles2.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className="p-6 bg-gray-900 min-h-screen text-white relative overflow-hidden">
                {/* รูปภาพพื้นหลังเต็มหน้าจอ */}
                <img className="w-full h-full object-cover absolute inset-0 filter brightness-110 contrast-125" src='/imageorvideo/new2.png' alt="Background Image" />

                {/* เนื้อหาภายใน */}
                <div className="relative z-10">
                    {/* หัวข้อข่าวสาร */}
                    <div className="flex items-center justify-center mb-8">
                        {/* เส้นขีดซ้าย */}
                        <div className="flex-grow border-b-2 border-white h-1 transition-transform duration-300 transform hover:scale-y-150 mr-4"></div>

                        {/* หัวข้อข่าวสาร */}
                        <h1 className="text-3xl md:text-5xl text-black text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-fadeIn mx-4 relative">
                            บรรจบ
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></span>
                        </h1>
                        {/* เส้นขีดขวา */}
                        <div className="flex-grow border-b-2 border-white h-1 transition-transform duration-300 transform hover:scale-y-150 ml-4"></div>
                    </div>

                    {/* คอนเทนเนอร์การ์ดข่าวสาร */}
                    <div className="p-6 min-h-40 gap-7   text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
                        {/* วิดีโออยู่ทางขวา */}
                        <div className="perspective md:order-last mb-0 ">
                            <div className="video-container w-full">
                                <video
                                    src="/imageorvideo/valorant.mp4"
                                    className="h-auto object-cover" // ปรับขนาดคลิปให้เล็กลง
                                    controls
                                />
                            </div>
                        </div>
                        {/* ส่วนที่เพิ่ม h1 */}
                        <h1 className="text-4xl md:text-6xl  font-extrabold tracking-wide font-roboto-mono max-w-lg mt-4 md:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-white via-lime-400 to-blue-400 animate-bounce">
                            Valorant เกมส์สนุกที่เรารัก เเพ้ทุกตา เเรงค์ก็ตก ปืนก็เเพง
                        </h1>
                    </div>
                </div>
            </div>
            <div className="relative">
                {/* รูปภาพพื้นหลัง */}
                <img
                    className="w-full h-full object-cover absolute inset-0 filter brightness-110 contrast-125 z-0"
                    src='/imageorvideo/new5.png'
                    alt="Background Image"
                />
                <div className="relative z-10 p-6">
                    {/* หัวข้อหลัก */}
                    <div className="flex items-center mb-6">
                        <hr className="flex-1 border-t border-white" />
                        <h1 className="text-4xl font-extrabold text-white mx-4 text-center">
                            เอเจนของคุณ
                        </h1>
                        <hr className="flex-1 border-t border-white" />
                    </div>

                    <Slider {...settings}>
                        {cards.map((card, index) => (
                            <div key={index} className="p-4 mx-5 overflow-hidden">
                                <div className="text-white p-6 rounded-lg flex flex-col items-center">
                                    {/* รูปภาพการ์ด */}
                                    <div className="w-full h-full overflow-hidden rounded-md mb-4">
                                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-xl text-white font-bold mb-2">{card.title}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    {/* เพิ่มแท็ก p และ button ที่นี่ */}
                    <div className="mt-4 text-center">
                        <p className="text-white mb-4">ความคิดสร้างสรรค์คืออาวุธที่แข็งแกร่งที่สุดของคุณ <br />
                            กมนี้ไม่ได้มีเพียงแค่ปืนหรือกระสุน คุณจะได้เลือกเอเจนท์ที่มาพร้อมอาวุธและความสามารถที่ยืดหยุ่น รวดเร็ว และรุนแรง ซึ่งความสามารถเหล่านี้จะช่วยฉายแสงให้ทักษะการยิงปืนของคุณเปล่งประกายยิ่งขึ้น ไม่มีเอเจนท์ไหนที่มีสไตล์การเล่นที่เหมือนกัน เช่นเดียวกับการที่ไม่มีไฮไลท์ใดที่เหมือนกัน</p>
                        <button className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-blue-700 transition duration-300">
                            เรียนรู้เพิ่มเติม
                        </button>
                    </div>
                </div>
                <div className="relative z-10 p-6">
                <img
                    className="w-full h-full object-cover absolute inset-0 filter brightness-110 contrast-125 z-0"
                    src='/imageorvideo/map2.jpg'
                    alt="Background Image"
                />
                    {/* หัวข้อหลัก */}
                    <div className="flex items-center mb-6">
                        <hr className="flex-1 border-t border-white" />
                        <h1 className="text-4xl font-extrabold text-white mx-4 text-center">
                            Map in valorant
                        </h1>
                        <hr className="flex-1 border-t border-white" />
                    </div>

                    <Slider {...settingss}>
    {videos.map((videos, index) => (
        <div key={index} className=" overflow-hidden">
            <div className="text-white p-6 rounded-lg flex flex-col items-center">
                {/* วิดีโอการ์ด */}
                <div className="w-full h-full overflow-hidden rounded-md mb-4">
                    <video 
                        src={videos.src} 
                        controls 
                        poster={videos.poster}
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-xl text-white font-bold mb-2">{videos.title}</h3>
            </div>
        </div>
    ))}
</Slider>
                </div>
            </div>
        </div>
    );
};


export default Home;

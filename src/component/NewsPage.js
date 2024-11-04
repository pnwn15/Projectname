// NewsPage.jsx
import React from 'react';

const NewsPage = () => {
  const newsData = [
    {
      id: 1,
      title: 'Valorant game good',
      date: '1 พฤศจิกายน 2024',
      summary: 'กิจกรรมในเกมที่ให้ผู้เล่นมีโอกาสได้รับไอเท็มพิเศษ และรางวัลที่น่าสนใจทุกสัปดาห์!',
      image: '/imageorvideo/valo 3.jpg',
    },
    {
      id: 2,
      title: 'problem in system',
      date: '2 พฤศจิกายน 2024',
      summary: 'กิจกรรมในเกมที่ให้ผู้เล่นมีโอกาสได้รับไอเท็มพิเศษ และรางวัลที่น่าสนใจทุกสัปดาห์!',
      image: '/imageorvideo/valo1.jpg',
    },
    {
      id: 3,
      title: 'Open server',
      date: '3 พฤศจิกายน 2024',
      summary: 'กิจกรรมในเกมที่ให้ผู้เล่นมีโอกาสได้รับไอเท็มพิเศษ และรางวัลที่น่าสนใจทุกสัปดาห์!',
      image: '/imageorvideo/valo4.jpg',
    },
    {
      id: 4,
      title: 'Account locked',
      date: '4 พฤศจิกายน 2024',
      summary: 'กิจกรรมในเกมที่ให้ผู้เล่นมีโอกาสได้รับไอเท็มพิเศษ และรางวัลที่น่าสนใจทุกสัปดาห์!',
      image: '/imageorvideo/valo5.jpg',
    },
    {
      id: 5,
      title: 'Register password reward',
      date: '5 พฤศจิกายน 2024',
      summary: 'กิจกรรมในเกมที่ให้ผู้เล่นมีโอกาสได้รับไอเท็มพิเศษ และรางวัลที่น่าสนใจทุกสัปดาห์!',
      image: '/imageorvideo/valorant1.png',
    },
    {
      id: 6,
      title: 'tournament',
      date: '6 พฤศจิกายน 2024',
      summary: 'กิจกรรมในเกมที่ให้ผู้เล่นมีโอกาสได้รับไอเท็มพิเศษ และรางวัลที่น่าสนใจทุกสัปดาห์!',
      image: '/imageorvideo/valorant2.png',
    },
    {
        id: 7,
        title: 'New skin comeing',
        date: '7 พฤศจิกายน 2024',
        summary: 'กิจกรรมในเกมที่ให้ผู้เล่นมีโอกาสได้รับไอเท็มพิเศษ และรางวัลที่น่าสนใจทุกสัปดาห์!',
        image: '/imageorvideo/valorant3.png',
      },
      {
        id: 8,
        title: 'New Agent',
        date: '8 พฤศจิกายน 2024',
        summary: 'กิจกรรมในเกมที่ให้ผู้เล่นมีโอกาสได้รับไอเท็มพิเศษ และรางวัลที่น่าสนใจทุกสัปดาห์!',
        image: '/imageorvideo/valorant4.png',
      },
      {
        id: 9,
        title: 'rerank',
        date: '9 พฤศจิกายน 2024',
        summary: 'กิจกรรมในเกมที่ให้ผู้เล่นมีโอกาสได้รับไอเท็มพิเศษ และรางวัลที่น่าสนใจทุกสัปดาห์!',
        image: '/imageorvideo/valorant5.png',
      },
    // เพิ่มข่าวเพิ่มเติมได้ตามต้องการ
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 font-robotoMono">
  <img
    src='/imageorvideo/valorant4.png'
    className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
    alt="background"
  />
  <div className="relative container mx-auto py-8 px-4 z-10">
    <h1 className="text-4xl font-bold text-center text-white mb-8">ข่าวสารล่าสุด</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsData.map((news) => (
        <div
          key={news.id}
          className="bg-white bg-opacity-20 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden relative z-20"
        >
          <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-white mb-2">{news.title}</h2>
            <p className="text-sm text-gray-300 mb-4">{news.date}</p>
            <p className="text-gray-200">{news.summary}</p>
          </div>
          <div className="p-4 bg-opacity-10 text-right">
            <button className="text-blue-300 hover:text-blue-500 font-medium">อ่านเพิ่มเติม</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default NewsPage;

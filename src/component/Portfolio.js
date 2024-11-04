// App.js
import React from 'react';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-roboto-mono">
      {/* Header */}
      <header className="text-center p-6 bg-gray-800 border-b-4 border-yellow-400 shadow-lg">
        <h1 className="text-5xl font-bold text-yellow-400 mb-2">CV</h1>
        <p className="text-lg text-gray-400">CREATE BY PANAWAT SRIMUANG </p>
      </header>

      {/* Profile Section */}
      <section id="profile" className="p-6 text-center mt-6">
        <img src="/path/to/your-avatar.png" alt="Profile" className="w-32 h-32 mx-auto rounded-full border-4 border-yellow-400 shadow-lg" />
        <h2 className="text-4xl font-semibold mt-4">PANAWAT SRIMUANG</h2>
        <p className="text-gray-400">WEB Developer </p>
      </section>
      <section id="skills" className="p-6 mt-6">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">ข้อมูลส่วนตัว</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
    <img src="imageorvideo/User.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">เพศ : ชาย</h3>
    <h3 className="text-xl font-semibold">วันเกิด : ชาย</h3>
    <h3 className="text-xl font-semibold">อายุ: 23 ปี</h3>
    <h3 className="text-xl font-semibold">สัญชาติ : ไทย</h3>
    <h3 className="text-xl font-semibold">ศาสนา: พุทธ</h3>
   
  </div>
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
    <img src="imageorvideo/Usermale.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-2xl font-semibold">About me</h3>
    <h3 className="text-lg font-semibold">ข้อดี : ขยันเรียนรู้สิ่งใหม่ๆตลอดเวลารักการเขียนcodeมาก</h3>
    <h3 className="text-lg font-semibold">ข้อเสีย : code อาจจะยังเก่งไม่มากเเต่พอมีพื้นฐานจากการเรียนรู้</h3>
    <h3 className="text-lg font-semibold">สิ่งที่ควรปรับปรุง : ปรับปรุงด้านการพูด พูดให้ช้าลง หาความรู้ตลอดเวลา</h3>

  </div>
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
    <img src="imageorvideo/Group.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-2xl font-semibold">ช่องทางการติดต่อ</h3>
    <h3 className="text-lg font-semibold">เบอร์โทรศัพท์ : 0613524541</h3>
    <h3 className="text-lg font-semibold">อีเมลล์ : panawatsrimuang@gmail.com</h3>
    <h3 className="text-lg font-semibold">ที่อยู่ : นิรันทร์คอนโด6/2 ดอนเมือง กรุงเทพมหานคร</h3>

  </div>
 
  {/* เพิ่มการ์ดสำหรับทักษะอื่นๆ */}
</div>

      </section>

      {/* Skills Section */}
      <section id="skills" className="p-6 mt-6">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Skills</h2>
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Front end developer</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
    <img src="imageorvideo/react.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">React</h3>
    <p className="text-gray-400">Level: normal</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
  <img src="imageorvideo/Angular.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">Angular</h3>
    <p className="text-gray-400">Level: normal</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
  <img src="imageorvideo/vue.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">Vue.js</h3>
    <p className="text-gray-400">Level: normal</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
  <img src="imageorvideo/java.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">JavaScript</h3>
    <p className="text-gray-400">Level: normal</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
  <img src="imageorvideo/tailwind.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">Tailwind CSS</h3>
    <p className="text-gray-400">Level: normal</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
  <img src="imageorvideo/mui.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">MUI Material</h3>
    <p className="text-gray-400">Level: basic</p>
  </div>
  {/* เพิ่มการ์ดสำหรับทักษะอื่นๆ */}
</div>

      </section>
      <section id="skills" className="p-6 mt-6">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Backend developer</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
    <img src="imageorvideo/nodejs.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">Nodejs express</h3>
    <p className="text-gray-400">Level: normal</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
  <img src="imageorvideo/mysql.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">Mysql</h3>
    <p className="text-gray-400">Level: normal</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
  <img src="imageorvideo/firebase.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">firebase</h3>
    <p className="text-gray-400">Level: normal</p>
  </div>
  {/* เพิ่มการ์ดสำหรับทักษะอื่นๆ */}
</div>

      </section>
      <section id="skills" className="p-6 mt-6">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
    <img src="imageorvideo/github.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">Github</h3>
    <p className="text-gray-400">Level: normal</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
  <img src="imageorvideo/postman.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">Postman</h3>
    <p className="text-gray-400">Level: normal</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
  <img src="imageorvideo/figma.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">Figma</h3>
    <p className="text-gray-400">Level: normal</p>
  </div>
  {/* เพิ่มการ์ดสำหรับทักษะอื่นๆ */}
</div>

      </section>
      <section id="skills" className="p-6 mt-6">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">ภาษา</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-center">
    <img src="imageorvideo/User.png" alt="React Icon" className="w-12 h-12 mx-auto mb-2" />
    <h3 className="text-xl font-semibold">English</h3>
    <p className="text-gray-400">Level: normal</p>
  </div>
 
  {/* เพิ่มการ์ดสำหรับทักษะอื่นๆ */}
</div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="p-6 mt-6">
      
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">ประวัติการศึกษา</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img src="imageorvideo/nu.png" alt="React Icon" className="w-28 h-28 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-yellow-300">มหาวิทยาลัยนเรศวร <br /> 2020-2024</h3>
            <p className="text-gray-400">ปริญญาตรี คณะบริหารธุรกิจ <br/>
                สาขาคอมพิวเตอร์ธุรกิจ</p>
          </div>
          {/* เพิ่มการ์ดสำหรับโปรเจกต์อื่น ๆ */}
        </div>
        
      </section>
      <section id="projects" className="p-6 mt-6">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">ประวัติการฝึกงาน</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-300">Ashatech coperation <br /> 4 month </h3>
            <p className="text-gray-400">-Frontend developer <br/></p>
            <p className="text-gray-400">-ใช้ภาษา Angular React Nextjs <br/></p>
            <p className="text-gray-400">-CSS Tailwind <br/></p>
            <p className="text-gray-400">-JavaScript es6 <br/></p>
            <p className="text-gray-400">-Figma <br/></p>
            <p className="text-gray-400">-postman เชื่อมApi เข้าหน้าบ้าน <br/></p>
            <p className="text-gray-400">-คุยกับลูกค้าจดRequiment <br/></p>
            <p className="text-gray-400">-Test ระบบเว็ป ระบุบัคต่างๆ<br/></p>
          </div>
          {/* เพิ่มการ์ดสำหรับโปรเจกต์อื่น ๆ */}
        </div>
      </section>
      <section id="projects" className="p-6 mt-6">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">ประวัติการทำงาน</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-300">Musalin pajamas <br /> 5 month </h3>
            <h3 className="text-xl font-semibold text-yellow-300">IT SUPPORT </h3>
            <p className="text-gray-400">-ติดตั้ง window ให้ทุกเครื่อง <br/></p>
            <p className="text-gray-400">-เเก้ไขปัญหาIT ในบริษัท<br/></p>
            <p className="text-gray-400">-ติดตั้งเเอพทำงานให้บริษัท<br/></p>
            <p className="text-gray-400">-คุมIT ทุกอย่าง <br/></p>
            <p className="text-gray-400">-ซ่อมเครื่อง printer camera notebook microphone<br/></p>
            <p className="text-gray-400">-Hardware<br/></p>
            <p className="text-gray-400">-ประกอบคอม<br/></p>
            <p className="text-gray-400">-เเก้ไขปัญหาเว็ปให้บริษัท<br/></p>
            <p className="text-gray-400">-เเก้ปัญหาInternet<br/></p>
            <p className="text-gray-400">-Microsoft office สามารถลงได้<br/></p>
          </div>
          {/* เพิ่มการ์ดสำหรับโปรเจกต์อื่น ๆ */}
        </div>
      </section>

     
    </div>
  );
}

export default App;

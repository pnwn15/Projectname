import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const [userData, setUserData] = useState({
        id: '',
        fname: '',
        lname: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    // เรียกข้อมูลจาก API เมื่อโหลดคอมโพเนนต์
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users');
                setUserData(response.data); // ตั้งค่า userData ที่ได้จาก API
            } catch (err) {
                console.error('Error fetching user data:', err);
            }
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSaveChanges = async () => {
        try {
            await axios.put('http://localhost:5000/users', userData);
            alert('Changes saved!');
        } catch (err) {
            console.error('Error saving user data:', err);
        }
    };

    const handleLogout = () => {
        localStorage.clear(); // ล้าง localStorage ทั้งหมด
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
                <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
                <div className="mb-4">
                    <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={userData.id}
                        readOnly
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="fname" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        value={userData.fname}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lname" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        value={userData.lname}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="flex justify-between mt-6">
                    <button
                        onClick={handleSaveChanges}
                        className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Save Changes
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Account;

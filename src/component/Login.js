import React, { useState } from 'react';
import { TextField, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userEmail', email);
            setDialogMessage('ล็อกอินสำเร็จ! ยินดีต้อนรับ ' + email);
            setIsSuccess(true);
            setOpenDialog(true);
            setTimeout(() => {
                navigate('/home');
            }, 2000);
        } catch (error) {
            console.error("Login error: ", error);
            setDialogMessage(error.response?.data.message || 'รหัสผ่านผิดพลาด');
            setIsSuccess(false);
            setOpenDialog(true);
        }
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div 
            className="flex justify-center items-center h-screen bg-cover" 
            style={{ backgroundImage: 'url(imageorvideo/login2.jpg)' }}
        >
            <div className="flex justify-center w-1/2 items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('imageorvideo/login-background.jpg')" }}>
            <div className="bg-black border shadow-2xl border-yellow-600 bg-opacity-70 p-8 rounded-lg  w-full">
    <Typography variant="h4" className="text-white text-center">เข้าสู่ระบบ</Typography>
    <form className='flex flex-col gap-5  mt-4 w-full' onSubmit={handleSubmit}>
        <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
            fullWidth
            InputProps={{
                className: 'bg-white text-white',
            }}
            InputLabelProps={{
                className: 'text-gray-400',
            }}
        />
        <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            variant="outlined"
            fullWidth
            InputProps={{
                className: 'bg-white text-white',
            }}
            InputLabelProps={{
                className: 'text-gray-400',
            }}
        />
        <Button 
            type="submit" 
            variant="contained" 
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition duration-300 mt-4"
        >
            Login
        </Button>
    </form>

    {/* Dialog สำหรับแจ้งเตือน */}
    <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle className="text-center">{isSuccess ? 'ล็อกอินสำเร็จ' : 'ข้อผิดพลาดในการล็อกอิน'}</DialogTitle>
        <DialogContent>
            <Typography>{dialogMessage}</Typography>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
                ตกลง
            </Button>
        </DialogActions>
    </Dialog>
</div>

</div>

        </div>
    );
}

export default Login;
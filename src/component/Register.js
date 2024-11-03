import React from 'react';
import { Container, Box, Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [openDialog, setOpenDialog] = React.useState(false); // สำหรับควบคุมการแสดง Dialog
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', {
                fname,
                lname,
                email,
                password,
            });
            if (response.status === 200) { // ตรวจสอบสถานะว่าเป็น 200
                setOpenDialog(true); // เปิด Dialog เมื่อสมัครสมาชิกสำเร็จ
            }
        } catch (err) {
            setError('การสมัครสมาชิกล้มเหลว กรุณาลองใหม่');
        }
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        navigate('/login'); // เปลี่ยนเส้นทางไปยังหน้า login หลังปิด Dialog
    };

    return (
        <Container 
            maxWidth={false} 
            disableGutters 
            className="w-full h-screen flex justify-center items-center"
            style={{
                backgroundImage: 'url(imageorvideo/map4.jpg)', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Box className="p-8 bg-black bg-opacity-70 rounded-lg shadow-lg w-full max-w-md mx-4">
                <Typography variant="h5" className="text-white text-center mb-6">สมัครสมาชิก</Typography>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <TextField 
                        label="ชื่อ" 
                        value={fname} 
                        onChange={(e) => setFname(e.target.value)} 
                        required 
                        fullWidth 
                        InputProps={{ className: 'bg-gray-800 text-white' }}
                        InputLabelProps={{ className: 'text-gray-400' }}
                    />
                    <TextField 
                        label="นามสกุล" 
                        value={lname} 
                        onChange={(e) => setLname(e.target.value)} 
                        required 
                        fullWidth 
                        InputProps={{ className: 'bg-gray-800 text-white' }}
                        InputLabelProps={{ className: 'text-gray-400' }}
                    />
                    <TextField 
                        label="อีเมล" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        fullWidth 
                        InputProps={{ className: 'bg-gray-800 text-white' }}
                        InputLabelProps={{ className: 'text-gray-400' }}
                    />
                    <TextField 
                        label="รหัสผ่าน" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        fullWidth 
                        InputProps={{ className: 'bg-gray-800 text-white' }}
                        InputLabelProps={{ className: 'text-gray-400' }}
                    />
                    {error && <Typography className="text-red-500 text-center">{error}</Typography>}
                    <Button 
                        type="submit" 
                        variant="contained" 
                        className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition duration-300 mt-4"
                    >
                        สมัครสมาชิก
                    </Button>
                </form>
            </Box>

            {/* Dialog สำหรับแจ้งเตือนการสมัครสมาชิกสำเร็จ */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>สมัครสมาชิกสำเร็จ</DialogTitle>
                <DialogContent>
                    <Typography>คุณสมัครสมาชิกสำเร็จแล้ว!</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        ตกลง
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default Register;

import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // สร้าง instance ของ useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // รีเซ็ตข้อผิดพลาดก่อนการส่ง

        try {
            const response = await axios.post('http://localhost:5000/register', { 
                email, 
                password, 
                fname, 
                lname 
            });

            // ตรวจสอบสถานะการตอบกลับจาก API
            if (response.data.status === 'ok') {
                alert('สมัครสมาชิกสำเร็จ'); // แสดงข้อความเมื่อสมัครสมาชิกสำเร็จ
                navigate('/login'); // เปลี่ยนเส้นทางไปที่หน้า /login
            } else {
                setError(response.data.msg); // แสดงข้อความเมื่อเกิดข้อผิดพลาด
            }
        } catch (error) {
            console.error(error);
            setError('Registration failed: ' + (error.response?.data?.msg || error.message));
        }
    };

    return (
        <Container maxWidth="xs">
            <Box mt={5}>
                <Typography variant="h5" align="center">Register</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        label="First Name" 
                        value={fname} 
                        onChange={(e) => setFname(e.target.value)} 
                        required 
                        fullWidth 
                        margin="normal" 
                    />
                    <TextField 
                        label="Last Name" 
                        value={lname} 
                        onChange={(e) => setLname(e.target.value)} 
                        required 
                        fullWidth 
                        margin="normal" 
                    />
                    <TextField 
                        label="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        fullWidth 
                        margin="normal" 
                    />
                    <TextField 
                        label="Password" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        fullWidth 
                        margin="normal" 
                    />
                    {error && <Typography color="error">{error}</Typography>} {/* แสดงข้อความข้อผิดพลาด */}
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        style={{ marginTop: '16px' }}
                    >
                        Register
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default Register;

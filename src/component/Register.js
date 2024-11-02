import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { Container, Box } from '@mui/system';

function Register() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for registration goes here
    };

    return (
        <Container maxWidth="xs">
            <Box className="mt-10 p-8 bg-black bg-opacity-70 rounded-lg shadow-lg">
                <Typography variant="h5" className="text-white text-center mb-6">สมัครสมาชิก</Typography>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <TextField 
                        label="ชื่อ" 
                        value={fname} 
                        onChange={(e) => setFname(e.target.value)} 
                        required 
                        fullWidth 
                        InputProps={{
                            className: 'bg-gray-800 text-white',
                        }}
                        InputLabelProps={{
                            className: 'text-gray-400',
                        }}
                    />
                    <TextField 
                        label="นามสกุล" 
                        value={lname} 
                        onChange={(e) => setLname(e.target.value)} 
                        required 
                        fullWidth 
                        InputProps={{
                            className: 'bg-gray-800 text-white',
                        }}
                        InputLabelProps={{
                            className: 'text-gray-400',
                        }}
                    />
                    <TextField 
                        label="อีเมล" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        fullWidth 
                        InputProps={{
                            className: 'bg-gray-800 text-white',
                        }}
                        InputLabelProps={{
                            className: 'text-gray-400',
                        }}
                    />
                    <TextField 
                        label="รหัสผ่าน" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        fullWidth 
                        InputProps={{
                            className: 'bg-gray-800 text-white',
                        }}
                        InputLabelProps={{
                            className: 'text-gray-400',
                        }}
                    />
                    {error && <Typography className="text-red-500 text-center">{error}</Typography>} {/* แสดงข้อความข้อผิดพลาด */}
                    <Button 
                        type="submit" 
                        variant="contained" 
                        className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition duration-300 mt-4"
                    >
                        สมัครสมาชิก
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default Register;

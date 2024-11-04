import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    TextField,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
} from '@mui/material';

function CreateAgent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [imageFile, setImageFile] = useState(null); // เปลี่ยนให้เก็บไฟล์ภาพ

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/api/agent');
            console.log("Fetched data:", response.data);
            if (response.data && response.data.data) {
                setData(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddAgent = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Position', position);
        formData.append('Image', imageFile); // เก็บไฟล์ภาพลงใน formData

        try {
            const response = await axios.post('http://localhost:5000/api/agent', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("Agent added:", response.data);
            fetchData(); 
            setName('');
            setPosition('');
            setImageFile(null); // เคลียร์ไฟล์ภาพ
        } catch (error) {
            console.error("Error adding agent:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div    
            className="py-8"
            style={{
                backgroundImage: 'url(imageorvideo/login2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh'
            }}
        >
            <form onSubmit={handleAddAgent} className="flex gap-6 flex-col mb-6 mx-6 bg-white p-8 rounded-lg shadow-md">
                <TextField
                    label="ชื่อ"
                    variant="outlined"
                    size="small"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mb-4"
                />
                <TextField
                    label="ตำแหน่ง"
                    variant="outlined"
                    size="small"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                    className="mb-4"
                />
                <input
                    type="file"
                    onChange={(e) => setImageFile(e.target.files[0])} // เก็บไฟล์ที่เลือก
                    accept="image/*"
                    required
                    className="mb-4"
                />
                <Button type="submit" variant="contained" color="primary" className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
                    เพิ่มเอเจน
                </Button>
            </form>

            <Grid container spacing={2} className="mt-8">
    {loading ? (
        <Typography variant="h6">Loading...</Typography>
    ) : (
        data.map((item) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={item.ID}>
                    <Card className="h-full shadow-lg rounded-lg overflow-hidden mx-11">
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.Image} // ใช้ URL ที่ได้จากเซิร์ฟเวอร์
                            alt={item.Name}
                            className="object-cover"
                        />
                        <CardContent className="flex flex-col justify-between">
                            <Typography variant="h5" className="font-bold text-lg">{item.Name}</Typography>
                            <Typography color="text.secondary">{item.Position}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            );
        })
    )}
</Grid>



        </div>
    );
}

export default CreateAgent;

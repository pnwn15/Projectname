import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Container,
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
    const [image, setImage] = useState(null); // เปลี่ยนให้เป็น null แทนที่จะเป็น string
    // ปรับสไตล์ให้กับการ์ด
const cardStyle = {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px', // เพิ่มความมนของมุม
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // เพิ่มเงาให้กับการ์ด
};

const buttonStyle = {
    marginLeft: '10px',
    backgroundColor: '#1976d2', // สีพื้นหลังปุ่ม
    color: '#ffffff', // สีข้อความในปุ่ม
};

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/api/agent');
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
        if (image) {
            formData.append('Image', image);
        }
    
        try {
            const response = await axios.post('http://localhost:5000/api/agent', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("Agent added:", response.data); // ดูข้อมูลที่ส่งกลับ
            fetchData(); 
            setName('');
            setPosition('');
            setImage(null);
        } catch (error) {
            console.error("Error adding agent:", error); // ดูข้อผิดพลาด
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
        backgroundSize: 'cover',       // ปรับขนาดให้เต็มพื้นที่ Container
        backgroundPosition: 'center',  // ตั้งตำแหน่งให้อยู่กึ่งกลาง
        backgroundRepeat: 'no-repeat', // ป้องกันการวนซ้ำของรูปภาพ
        minHeight: '100vh'             // ตั้งความสูงขั้นต่ำเพื่อให้ครอบคลุมทั้งหน้า
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
            accept="image/png, image/jpeg"
            onChange={(e) => setImage(e.target.files[0])}
            required
            className="mb-4 border border-gray-300 rounded-md p-2"
        />
        <Button type="submit" variant="contained" color="primary" className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
            เพิ่มเอเจน
        </Button>
    </form>

    <Grid container spacing={2} className="mt-8 ">
        {loading ? (
            <Typography variant="h6">Loading...</Typography>
        ) : (
            data.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.ID}>
                    <Card className="h-full shadow-lg rounded-lg overflow-hidden  mx-11">
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.Image}
                            alt={item.Name}
                            className="object-cover "
                        />
                        <CardContent className="flex flex-col justify-between">
                            <Typography variant="h5" className="font-bold text-lg">{item.Name}</Typography>
                            <Typography color="text.secondary">{item.Position}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))
        )}
    </Grid>

</div>
    );
}

export default CreateAgent;

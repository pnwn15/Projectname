// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Paper, Typography } from '@mui/material';

function Agens() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/characters');
                setCharacters(response.data);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                รายชื่อตัวละคร
            </Typography>
            <Grid container spacing={4}>
                {characters.map((character) => (
                    <Grid item xs={12} sm={6} md={4} key={character.id}>
                        <Paper elevation={3} className="p-4">
                            <img src={character.image} alt={character.name} style={{ width: '100%', borderRadius: '8px' }} />
                            <Typography variant="h6" align="center" className="mt-2">
                                {character.name}
                            </Typography>
                            <Typography variant="body2" align="center">
                                {character.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Agens;

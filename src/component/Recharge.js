import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Snackbar,
    Alert,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import axios from 'axios';

function Recharge() {
    const [userId, setUserId] = useState('');
    const [amount, setAmount] = useState('');
    const [truemoney, setTruemoney] = useState('');
    const [message, setMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [openDialog, setOpenDialog] = useState(false);
    const [rechargeDetails, setRechargeDetails] = useState({});

    const handleRecharge = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/recharge_history', {
                user_id: userId,
                amount: parseFloat(amount),
                truemoney: truemoney
            });

            setMessage(response.data.message);
            setSeverity('success');
            setOpenSnackbar(true);
            setRechargeDetails({
                user_id: userId,
                amount: amount,
                truemoney: truemoney,
                recharge_date: new Date().toLocaleString(),
            });
            setOpenDialog(true);
            setUserId('');
            setAmount('');
            setTruemoney('');
        } catch (error) {
            setMessage(error.response?.data?.message || 'เกิดข้อผิดพลาดในการเติมเงิน');
            setSeverity('error');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
      <div className='bg-black'>
        <Container
            maxWidth="sm"
            className="my-10 p-6 rounded-lg shadow-lg"
            style={{
                backgroundImage: 'url(/imageorvideo/valorant5.png)', // เปลี่ยนเส้นทางให้เป็นที่อยู่ของรูปภาพที่คุณต้องการใช้
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Typography variant="h4" align="center" gutterBottom className="text-white">
                เติมเงิน
            </Typography>
            <form onSubmit={handleRecharge} className="flex flex-col gap-4 bg-black bg-opacity-50 p-4 rounded-lg">
                <TextField
                    label="User ID"
                    variant="outlined"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                    InputProps={{
                        className: 'bg-white text-black',
                    }}
                />
                <TextField
                    label="จำนวนเงิน"
                    variant="outlined"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    InputProps={{
                        className: 'bg-white text-black',
                    }}
                />
                <TextField
                    label="TrueMoney"
                    variant="outlined"
                    value={truemoney}
                    onChange={(e) => setTruemoney(e.target.value)}
                    required
                    InputProps={{
                        className: 'bg-white text-black',
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className="hover:bg-green-700 transition-colors"
                >
                    เติมเงิน
                </Button>
            </form>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle className="bg-gray-800 text-white">สลิปการเติมเงิน</DialogTitle>
                <DialogContent className="bg-gray-700 text-white">
                    <Typography variant="body1">User ID: {rechargeDetails.user_id}</Typography>
                    <Typography variant="body1">จำนวนเงิน: {rechargeDetails.amount} บาท</Typography>
                    <Typography variant="body1">TrueMoney: {rechargeDetails.truemoney}</Typography>
                    <Typography variant="body1">วันที่เติมเงิน: {rechargeDetails.recharge_date}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        ปิด
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
        </div>
    );
}

export default Recharge;

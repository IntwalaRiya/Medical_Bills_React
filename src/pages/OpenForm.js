import { useNavigate, useLocation } from "react-router-dom";
import userData from '../users.json';
import { useEffect, useState } from "react";
import '../css/OpenForm.css'

export default function FormOpen (){
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state.username;
    const id = location.state.index;
    const [patientName, setPatientName] = useState('');
    const [address, setAddress] = useState('');
    const [hospitalName, setHospitalName] = useState('');
    const [dateOfService, setDateOfService] = useState('');
    const [billAmount, setBillAmount] = useState('');
    const [billPicture, setBillPicture] = useState(null);

    useEffect(() =>{
        const matchedUser = userData.users.find((user) => user.username === username);
                console.log(matchedUser.medicalbills[id].patientName)
                const user = matchedUser.medicalbills[id];
                setPatientName(user.patientName);
                setAddress(user.address);
                setHospitalName(user.hospitalName);
                setDateOfService(user.dateOfService);
                setBillAmount(user.billAmount);
                setBillPicture(user.billPicture);
    }, []);

    const onBack = (e) => {
        navigate('/home', {state: {username: username}});
    };

    return(
        <div className="divTag">
            <div className="divSub">
                <h2>Summary</h2>
                <p>Patient Name: {patientName}</p>
                <p>Address: {address}</p>
                <p>Hospital Name: {hospitalName}</p>
                <p>Date of Service: {dateOfService}</p>
                <p>Bill Amount: {billAmount}</p>
                <button onClick={onBack}>Back</button>
            </div>
        </div>
    )
}
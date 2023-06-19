import { useNavigate, useLocation } from "react-router-dom";
import userData from '../users.json';
import { useEffect, useState } from "react";
import '../css/Summary.css';

export default function Summary (){
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state.username;

    const [patientName, setPatientName] = useState('');
    const [address, setAddress] = useState('');
    const [hospitalName, setHospitalName] = useState('');
    const [dateOfService, setDateOfService] = useState('');
    const [billAmount, setBillAmount] = useState('');
    const [billPicture, setBillPicture] = useState(null);

    useEffect(() =>{
        const matchedUser = userData.users.find((user) => user.username === username);
        if(matchedUser){
            if(matchedUser.medicalbills.length !== 0){
                const index = matchedUser.medicalbills.length - 1;
                setPatientName(Object.values(matchedUser.medicalbills)[index].patientName);
                setAddress(Object.values(matchedUser.medicalbills)[index].address);
                setHospitalName(Object.values(matchedUser.medicalbills)[index].hospitalName);
                setDateOfService(Object.values(matchedUser.medicalbills)[index].dateOfService);
                setBillAmount(Object.values(matchedUser.medicalbills)[index].billAmount);
                setBillPicture(Object.values(matchedUser.medicalbills)[index].billPicture);
            }
        }
        else{
            alert('Invalid User.');
            navigate('/');
        }
    }, []);

    const onBack = (e) => {
        navigate('/form', {state: {username: username, id: 1}});
    };

    const onSubmit = (e) => {
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
                <div className="divSubTag">
                    <button onClick={onBack}>Back</button>
                    <br/>
                    <button onClick={onSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

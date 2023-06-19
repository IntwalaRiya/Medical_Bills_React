import { useNavigate, useLocation } from "react-router-dom";
import userData from '../users.json';
import { useEffect, useState } from "react";
import '../css/Form.css';

export default function Form (){
    const navigate = useNavigate();
    const location = useLocation();

    const [patientName, setPatientName] = useState('');
    const [address, setAddress] = useState('');
    const [hospitalName, setHospitalName] = useState('');
    const [dateOfService, setDateOfService] = useState('');
    const [billAmount, setBillAmount] = useState('');
    const [billPicture, setBillPicture] = useState(null);
    const username = location.state.username;

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
    
    const handlePatientNameChange = (e) => {
        setPatientName(e.target.value);
    };
    
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };
    
    const handleHospitalNameChange = (e) => {
        setHospitalName(e.target.value);
    };
    
    const handleDateOfServiceChange = (e) => {
        setDateOfService(e.target.value);
    };
    
    const handleBillAmountChange = (e) => {
        setBillAmount(e.target.value);
    };
    
    const handleBillPictureChange = (e) => {
        const file = e.target.files[0];
        setBillPicture(file);
    };

    const onExit = (e) => {
        navigate('/')
    }

    const handleSubmit = (e) => {
        const user = userData.users.find((user) => user.username === username);

        if (user) {
        // Create a new medical bill object
            const medicalBill = {
                "patientName": patientName,
                "address": address,
                "hospitalName": hospitalName,
                "dateOfService": dateOfService,
                "billAmount": billAmount,
                "billPicture": billPicture ? billPicture.name : null
            };

        // Add the medical bill to the user's medicalBills array
            user.medicalbills.push(medicalBill);
            navigate('/summary', {state: {username: username}});
        }
        else{
            alert("Invalid User.");
            navigate('/');
        }
    };

    return(
        <div className="divTag">
        
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Form</h2>
            </div>
            <div>
                <label>Patient Name: </label>
                <input type="text" value={patientName} onChange={handlePatientNameChange} required />
            </div>
            <div>
                <label>Address: </label>
                <input type="text" value={address} onChange={handleAddressChange} required />
            </div>
            <div>
                <label>Hospital Name: </label>
                <input type="text" value={hospitalName} onChange={handleHospitalNameChange} required />
            </div>
            <div>
                <label>Date of Service: </label>
                <input type="date" value={dateOfService} onChange={handleDateOfServiceChange} required />
            </div>
            <div>
                <label>Bill Amount: </label>
                <input type="number" value={billAmount} onChange={handleBillAmountChange} required />
            </div>
            <div>
                <label>Bill Picture: </label>
                <input type="file" accept="image/*" onChange={handleBillPictureChange} />
            </div>

            <div className="divSubTag">
                <button onClick={handleSubmit}>Summary</button>
                <br/>
                <button onClick={onExit}>Logout</button>
            </div>
        </form>
    </div>
    );
}

import { useNavigate, useLocation } from "react-router-dom";
import userData from '../users.json';
import { useEffect, useState } from "react";
import '../css/Home.css'

export default function Home (){
    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state.username;
    const matchedUser = userData.users.find((user) => user.username === username);
    const bills = matchedUser.medicalbills;

    const handleClick = (value) => {
        navigate('/openForm', {state: {username: username, index: value}})
    };
    const handleButton = (e) => {
        navigate('/')
    };

    const handleNewBill = (e) => {
        navigate('/form', {state: {username: username, id: 2 }})
    };

    return(
        <div className="divTag">
            <div className="divSub">
            <h2>Home Page</h2>
            <h4>Uploaded Bills</h4>
            <hr />
    
            {bills.length === 0 ? (
            <p>No bills uploaded yet.</p>
            ) : (
            <ul>
                {bills.map((bill, index) => (
                <li key={index}>
                    Patient Name: {bill.patientName}, Amount: {bill.billAmount}, Date: {bill.dateOfService}
                    <button onClick={() => handleClick(index)} value={index}>Open Form</button>
                </li>
                ))}
            </ul>
            )}

            <div className="divSubTag">
                <button onClick={handleNewBill}>New Bill</button>
                <button onClick={handleButton}>Logout</button>
            </div>
            </div>
        </div>
    );
}

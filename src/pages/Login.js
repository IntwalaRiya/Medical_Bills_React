import { useNavigate } from "react-router-dom";
import userData from '../users.json';
import { useState } from "react";
import "../css/Login.css";
export default function Login (){
const navigate = useNavigate();
const [username, setUserName] = useState('');
const [password, setPassword] = useState('');

const handleUsernameChange = (e) => {
    setUserName(e.target.value);
};

const handlePasswordChange = (e) => {
    setPassword(e.target.value);
};

const handleSubmit = (e) => {
    const matchedUser = userData.users.find((user) => user.username === username && user.password === password);

    if(matchedUser){
        navigate('/form', {state: {username: username, id = 1}});
    }
    else{
        alert('Incorrect Username or Password.');
        navigate('/');
    }
}
return(
    <div className="divTag">
        
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <label>Username: </label>
                <input type="text" value={username} onChange={handleUsernameChange} required />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
    );
}

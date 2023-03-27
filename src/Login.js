import React, { useState } from 'react';
import './Login.css'
import StoreIcon from '@mui/icons-material/Store';
import { Link} from "react-router-dom";
import { auth } from "./firebase";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/');
            })
            //.then("Successfully signed in")
            .catch(error => alert(error.message))
            
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className='login'> 
            <Link to="/" style={{textDecoration:"none"}}>
              <div className="header__logo">
                 <StoreIcon className="header__logoImage" fontSize='large'/>
                 <h2 style={{color:"black"}}className='header__logoTitle'>AxioMart</h2>
              </div>
            </Link>
           

            <div className='login__container'  onClick={signIn} >
           
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AxioMart Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register} >Create your AxioMart Account</button>
                
            </div>
        </div>
    )
}

export default Login;
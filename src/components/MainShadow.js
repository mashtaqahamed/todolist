import React,{useState, useEffect} from 'react';
import Signup from './Signup';
import Login from './Login';
import "./MainScreen.css";

function MainShadow(){
	
	var [loginScreen, setLoginScreen] = useState(false);
	var [signupScreen, setSignupScreen] = useState(false);
	var [loginedScreen, setLoginedScreen] = useState(false);


	const afterSignup = (username )=> {
		setSignupScreen(false); 
		setLoginScreen(false);
		setLoginedScreen(true);
	}

	const afterLogout=()=>{
		localStorage.removeItem('userlogined');
		setSignupScreen(true); 
		setLoginScreen(false);
		setLoginedScreen(false);
	}

	useEffect(()=>{
		var user=localStorage.getItem('userlogined');
		if(user !== null || user !==''){
			setSignupScreen(false); 
			setLoginScreen(false);
			setLoginedScreen(true);
		}	
	},[]);
	
	return(
		<div className='MainScreen'>

        
         
			{signupScreen?<div className='mainbuttons'>
				<Signup afterSignup={afterSignup} />
				<button  onClick={()=>{setSignupScreen(false); setLoginScreen(true)}}>Login here</button>
			</div>:''}

              
			{loginScreen?<div className='main-btn'>
			   <Login afterLogin={afterSignup} />
				<button onClick={()=>{setSignupScreen(true); setLoginScreen(false)}}> Signup</button>
			</div>:''}

			{loginedScreen?<div>
				<h1>{localStorage.getItem('userlogined')} Successfully logined</h1>
				<button onClick={afterLogout}>logout</button>
			</div>:''}
		
		</div>
	);
}


export default MainShadow;
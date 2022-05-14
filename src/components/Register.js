import { useState , useEffect} from "react";
import regValidation from "./regValidation";



const Register = () => {





	const [errors, setErrors] = useState({});

	const handleClick = (e) => {
		e.preventDefault();
		setErrors(regValidation(credentials));
		// post request
	}
	
	const [credentials , setCredentials] = useState({
		firstname:"",
		firstname:"",
		email:"",
		password:""
	});

	const handleChange = (e) => {
		setCredentials({
			...credentials, [e.target.name]:e.target.value,
		});
	}
	return (
		<div className="container">
			
			<form className="registration-form">
				<h1 style={{align:"center"}}>
					Reporter Registration
				</h1>
					<table>
						<tr>
							<div className="fname"> 
								<label htmlFor="fname">first name</label> 
								<input 
								 className="fname-input" 
								 type="text"  
								 name="firstname"
								 onChange={handleChange}
								/>
							</div> 
						</tr>
						{errors.firstname &&
						<tr>
							<p className="error-msg">{errors.firstname}</p> 
						</tr>
						}

						<tr>
							<div className="lname"> 
								<label htmlFor="lname">last name</label>
								<input 
								 className="lname-input" 
								 type='text'  
								 name="lastname" 
								 onChange={handleChange}
								/>  
							</div> 
						</tr>
						{errors.lastname &&
						<tr>
							<p className="error-msg">{errors.lastname}</p> 
						</tr>
						}
						<tr>
							<div className="email">
								<label htmlFor="email">email</label>
								<input 
								 className="email-input" 
								 type="text"  
								 name="email"
								 onChange={handleChange}
								/> 
							</div> 
						</tr>
						{errors.email &&
						<td>
							<p className="error-msg">{errors.email}</p> 
						</td>
						}
						<tr>
							<div className="password"> 
								<label htmlFor="pwd">password</label>
								<input 
								 className="pwd-input" 
								 type='password'  
								 name="password"
								 onChange={handleChange} 
								/> 
							</div> 
						</tr>	
						{errors.password &&
						<tr>
							<p className="error-msg">{errors.password}</p> 
						</tr>
						}
						 <tr>
						 	<button onClick={handleClick}>Done</button>
						 </tr>
						 <tr className="or"> or </tr>
						 <tr className="or">
						 	<a href="/signup"> Already have an account? </a>
						 </tr>
					</table>

			</form>
		</div>
	);
}

export default Register;
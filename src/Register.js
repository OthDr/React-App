const Register = () => {

	const handleClick = (e) => {
		e.preventDefault();
		// post request
	}

	return (
		<div className="container">
			
			<form className="registration-form">
				<h1 style={{align:"center"}}>
					Reporter Registration
				</h1>
					<table>
						<tr>
							<div className="fname"> <label for="fname">first name</label> 
							<input className="fname-input" type="text"  name="fname"/> </div> 
						</tr>
						<tr>
							<div className="lname"> <label for="lname">last name</label>
							<input className="lname-input" type='text'  name="lname" />  </div> 
						</tr>
						<tr>
							<div className="email"><label for="email">email</label>
							<input className="email-input" type="text"  name="email"/> </div> 
						</tr>
						<tr>
							<div className="password"> <label for="pwd">password</label>
							<input className="pwd-input" type='password'  name="pwd" /> </div> 
						</tr>	
						 <tr>
						 <button onClick={handleClick}>done</button>
						 </tr>
					</table>

			</form>
		</div>
	);
}

export default Register;
import { useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';


const  Author = () => {

	const accessToken = window.localStorage.getItem("accessToken");

	let headers = new Headers();
	headers.append('authorization','bearer '+accessToken);
	//console.log(accessToken);


	const [profile , setProfile] = useState(null);

    const [email , setEmail] = useState(null);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    let navigate = useNavigate(); 
    

    const logoutClick = (e) => {
        e.preventDefault();
        //localStorage.removeItem('accessToken');
        localStorage.clear();
        navigate('/signup');
    }

    useEffect(()=>{
        setProfile(null);
        fetch('http://localhost:3000/v2/api/authors/me',{
        	method: 'GET',
        	headers: headers,
        })
        .then(res => {
            if(!res.ok){
                throw Error('Oops ! something wrong happened');
            }else{
                return res.json();
            }
        })
        .then( (data) => {
            setProfile(data);
            console.log(data);
            setEmail(data.email);
            setLoading(false);
            setError(null);
        })
        .catch( (err) => {
            setLoading(false);
            setError(err.message);
            navigate('/signup');
        });
    },[]);


    return (  
        <div>

            {error && <div className="error"> {error} </div>}
        	{!error &&
                
                <div className="user-infos">
                    <div className="logout-container">
                        <button onClick={logoutClick}>Disconnect</button>
                    </div>
                    <h1>Author Profile</h1>
                    <h3>your email: {email} </h3>
                    <h3>your firstname </h3>
                    <h3>your lastname </h3>
                </div>
            }
        </div>
    );
}

export default Author;
import { useState , useEffect} from "react";


const  Author = () => {

	const accessToken = window.localStorage.getItem("accessToken");

	let headers = new Headers();
	headers.append('authorization','bearer '+accessToken);
	//console.log(accessToken);


	const [profile , setProfile] = useState(null);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);



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
        .then( (data)=>{
            setProfile(data);
            console.log(data);
            setLoading(false);
            setError(null);
        })
        .catch((err) => {
            setLoading(false);
            setError(err.message);
        });
    },[]);


    return (  
        <div>
        	<h1>Author Profile</h1>
        	<h3>your email </h3>
        	<h3>your firstname </h3>
        	<h3>your lastname </h3>
        </div>
    );
}

export default Author;
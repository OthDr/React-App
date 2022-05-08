import { useState , useEffect} from "react";


const Single = () => {

	const [article , setArticle] = useState(null);
	const [loading , setLoading] = useState(true);
	const [error , setError] = useState(null);

	const article_id = 12 ;

	useEffect(()=>{
	        setArticle(null);
	        fetch('http://localhost:3000/v2/api/news/'+article_id)
	        .then(res => {
	            if(!res.ok){
	                throw Error('Sorry! Could not find the ressource');
	            }else{
	                return res.json();
	            }
	        })
	        .then((data)=>{
	            setArticle(data);
	            setLoading(false);
	            setError(null);
	        })
	        .catch((err) => {
	            setLoading(false);
	            setError(err.message);
	        });
	    },[]);

	return(
		<div clasName="main-single-article">

			{error && <div className="error"> {error} </div>}
	        {loading && <div className="loading">Loading..</div>}
	        { article &&
			<div className="single-article" key={article.id}>
		        <h2><span>Title : </span>  {article.title} </h2>
	            <img src={article.urlToImage}></img>
	            <h4>description:</h4>
	            <p>description :{article.description}</p>
	            <p>{article.content}</p>
	            <h5>by : {article.author.firstname +' '+article.author.lastname}</h5>
	            <span> {article.publishedAt}</span>
        	</div>
        	}
		</div>
	);
}

export default Single ;
// useParams : React Router에서 제공하는 함수로 url에 있는 값을 반환해준다.(특히 변경되는 값)
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    // console.log(id);
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    }
    useEffect(() => {
     getMovie();   
    }, []);
    return (
        <h1>Detail</h1>
    );
}

export default Detail;
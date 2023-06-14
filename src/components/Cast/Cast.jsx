import { getMovieCredits } from "helpers/api"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { CastList, Actor, ActorCredits, Photo, CastTitle } from "./Cast.styled";
import { imagePath } from "constants";
import { MovieDetail } from "components/Movie/Movie.styled";
import { STATUS } from "constants";
import { Loader } from "components/Loader/Loader";
import { Error } from "components/Error/Error";

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const {movieId} = useParams();

    useEffect(() => {
        setStatus(STATUS.PENDING);
        async function getCast() {
            try {
                const result = await getMovieCredits(movieId);
                setStatus(STATUS.RESOLVED);
                setCast(result.cast);
            } catch (e) {
                setStatus(STATUS.REJECTED);
            }
        }
        getCast();
    }, [movieId])
    if (status === STATUS.PENDING) {
        return (<Loader/>)
    } else if (status === STATUS.RESOLVED || status === STATUS.IDLE) {
        return (<>
            <CastTitle>Cast</CastTitle>
       {cast.length > 0 ? <CastList>
        {cast.map(({id, character, profile_path, name}) => (<Actor key={id}>
            <Photo
            src={profile_path ? `${imagePath.default}${profile_path}` : imagePath.sample} 
            alt={character}/>
            <ActorCredits><MovieDetail>Name:</MovieDetail> {name}</ActorCredits>
            <ActorCredits><MovieDetail> Character:</MovieDetail> {character}</ActorCredits>
            </Actor>))}
        </CastList> : <p>No cast info</p>}
        </>)
    } else if (status === STATUS.REJECTED) {
        return (<Error/>)
    }
}

export default Cast;
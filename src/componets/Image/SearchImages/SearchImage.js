import React, {  useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import classes from './SearchImage.module.css';


const SearchImage = (props) => {
    const enteredVal = useSelector(state => state.changevalue);
    const dispatch = useDispatch();
    const client_id = "xnBCNjR-1fWbBnG-llJwV1V7KoUc-unUs1IsoDJf4r0";
    const url = ((enteredVal === '') ? `https://api.unsplash.com/search/photos?query=Random&client_id=${client_id}` 
    : `https://api.unsplash.com/search/photos?query=${enteredVal}&client_id=${client_id}`); 

    const displayImage = useCallback(async () => {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({type : 'buttongetchange'}) 
        dispatch({type : 'images' , setvalue: data.results}); 
    }, [url,dispatch]);

    const InputChangeHandler = event => {
        dispatch({type: 'valuegetchange', setvalue: event.target.value})
    }
    const SubmitHandler = e => {
        e.preventDefault();
    }
    return(
        <React.Fragment>
            <form onSubmit={SubmitHandler}>
                <div className={`${classes.frame}`}>
                <input placeholder="Search for Photo" className={`form-control border w-75 me-2 ${classes['controls']}`} onChange={InputChangeHandler}/>
                <button type="submit" onMouseUp={displayImage} className={`btn btn-dark ${classes['button']}`}><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
                
            </form>
        </React.Fragment>
    )
}

export default SearchImage;
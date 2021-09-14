import React from 'react'
import classes from './ImageList.module.css'
import Card from '../../Card/Card';
import { useSelector } from 'react-redux';

const ImageList = (props) => {
    const images = useSelector(state => state.images);
    const enteredVal = useSelector(state => state.changevalue);
    const title = enteredVal === '' ? 'Random' : enteredVal;
    const buttonchange = useSelector(state => state.buttonchange);
    return ( 
            <Card className="mx-auto">
            {

                buttonchange && (<div className={`${classes.titleFrame} `}>
                    <h4>{title}</h4>
                    <p>Images has been found</p>
                </div>)
            }
            <div className={`${classes.ImageFrame} mt-auto `}>
                {
                    images.map((photo) => (
                         
                        <div className={classes['img_div']} key={photo.id}>
                        <img src={photo.urls.small} className={`rounded`} alt={photo.description} />
                        </div>
                    ))
                }
            </div>
            </Card>
        
    )
}

export default ImageList;
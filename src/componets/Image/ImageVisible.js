import React from 'react'
import Card from '../Card/Card'
import ImageList from './ImageList/ImageList'
import SearchImage from './SearchImages/SearchImage'


const ImageVisible = () => {
    
    return(
        <Card className="container-fluid mx-auto px-auto">
            <SearchImage/>
            <ImageList />
        </Card>
    )
}

export default ImageVisible;
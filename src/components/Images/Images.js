import React from 'react'
import { Container, Image } from 'react-bootstrap'

import './images.css'

class Images extends React.Component{
    constructor(){
        super()
        this.imageRef = React.createRef()
        this.onLoaded = this.onLoaded.bind(this)
    }

    componentDidMount(){
        console.log(this.imageRef)
        this.imageRef.current.addEventListener('load', this.onLoaded)
    }

    onLoaded(){
        this.imageRef.current.addEventListener('mouseover', (e) => {
            this.imageRef.current.style.maxHeight = '400px'
        })
        this.imageRef.current.addEventListener('mouseout', (e) => {
            this.imageRef.current.style.maxHeight = '150px'
        })
    }

    render(){
        return(
            <Container>
                <Image src={this.props.imageUrl} className="imageStyle" ref={this.imageRef}/>
            </Container>
        )
    }
}

export default Images
import React, { Component } from 'react';
import Title from './Title';
import Description from './Description';
import ImagesComp from './ImagesComp';


class SimpleCard extends Component{
    
    render(){
        return(
            <div className='Card'>
                <Title title="A Title"/>
                <Description descrip="My description will go here.!"/>
                <ImagesComp/>
            </div>
        )
    }
}
export default SimpleCard;
import React, { Component } from 'react';


// const techList=['express.png','django-logo-big.jpg','Mysql_logo.png','React.jfif']
class ChangeImage extends React.Component {
    
    constructor(props){
        super(props);
        this.changeImage=this.changeImage.bind(this);
        this.state={index:0,techList:['express.png','django-logo-big.jpg','Mysql_logo.png','React.jfif']}
    }

    changeImage(params) {
        if(this.state.index < 3){
            this.setState({index:this.state.index+1});
        }
        else{
            this.setState({index:0});
        }
    }

    componentDidMount(){
        setInterval(this.changeImage,3000);
    }



    render() { 
        return (
            <div>
                <img src={process.env.PUBLIC_URL+'Technologies/'+this.state.techList[this.state.index]} style={{height:'60%',width:'50%'}}></img>
            </div>
        );
    }
}
 
export default ChangeImage;
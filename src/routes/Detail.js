
import React from "react";

class Detail extends React.Component{

    componentDidMount(){
        console.log(this.props);
        const {location, history }= this.props; 
        if(location.state === undefined ){
            history.push("/");//history로 제대로된 경로가 아닐경우 home으로 보냄 
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return(<span>{location.state.title}</span>) 
        }else{
            return null;
        }

    }
}


export default Detail;
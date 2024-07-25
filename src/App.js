import React, {Component} from 'react';
import './App.css';
import image from './profile.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class App extends Component{
  state= {
    person:{
     fullName: 'Asma Romdhani',
        bio: 'fullstack developer',
        imgSrc: {image},
        profession: 'Etudiante Software '
      },
      shows : false ,
      mountTime: 0
    }

handleClick=() =>{
  this.setState({shows:!this.state.shows})
}
componentDidMount() {
  this.interval= setInterval(() => {
    this.setState((prevState) => {
      return{
      mountTime: prevState.mountTime + 1
    }});
    }, 1000);} 
componentWillUnmount(){
  clearInterval(this.interval)
}
    render() {
      return (
        <div>
        {this.state.shows && (
          <Card  style={{ width: '18rem' }}>
            <Card.Img  variant="top" src={image} />
            <Card.Body >
              <Card.Title >{this.state.person.fullName}</Card.Title>
              <Card.Text>
                {this.state.person.bio} <br/>
                {this.state.person.profession}
              </Card.Text>
            
            </Card.Body>
          </Card>
        )}

        <Button className="bt" onClick={this.handleClick}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </Button>
        <h1>{this.state.mountTime}</h1>
      </div>  
      );
    
  }}

export default App;


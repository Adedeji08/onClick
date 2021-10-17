
//import { Card} from "react-bootstrap";
//import axios from "axios";
import { Component } from "react";
import { Button } from 'react-bootstrap';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { Switch } from 'react-router-dom';

//import Button from './Button'

 class Fetchdata extends Component{

    constructor (props) {
        super (props);
        this.state={
            loading: true,
            persons: null,
            alert: []
        };
    }

         
    

    clickHandler = (id) =>{
        console.log('clicked')
        alert(`photo album ${id} has been clicked`);
    }
  
       async componentDidMount()  {
        const url = "https://jsonplaceholder.typicode.com/albums";
        const response = await fetch(url);
        const data= await response.json();
        this.setState({ persons: data, loading: false})
  }



      
  render() {
      return (
                  <div style={{backgroundColor: 'yellow'}}>
                     {this.state.loading || !this.state.persons ? (
            <div>Loading...</div>
            ) : 
            this.state.persons.map((data) =>{
                console.log('click')
            return   <div>
                   {data.id}
                   <Button className='col-lg-6 col-md-3' 
                   onClick={() => this.clickHandler(data.id)}>{data.title}</Button>
                    </div>
             })
          
      } </div>
      ) 
 }
}
    
    
      export default Fetchdata;


     
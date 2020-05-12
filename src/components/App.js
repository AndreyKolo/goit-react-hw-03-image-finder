import React, { Component } from 'react'
import Form from './form/Form';
import {getData} from '../services/services';
import ImageGallery from './imageGallery/ImageGallery';
// import Loader from './loader/Loader'; 


class App extends Component {
    state = { 
        query: "",
        page: 1,
        images: []
     }

     componentDidMount() {
       getData().then(data => this.setState({images:data.data.hits}))
     }

     componentDidUpdate () {

     }

     handleChange = (e) => {
        this.setState({query:e.target.value}) 
     }

     handleSubmit = (e) => {
       e.preventDefault()
         getData(this.state.query, this.state.page).then(data => this.setState({images:data.data.hits}))
    }

    render() {
        return (
            <>
            <Form handleChange={this.handleChange} inputValue={this.state.query} handleSubmit={this.handleSubmit}/>
            <ImageGallery images={this.state.images}/>
            </>
        );
    }
}

export default App;
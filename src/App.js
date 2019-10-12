import React from "react";
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // Initialized state
  state = {
    lat: null,  // Initial unknown value
    err: ''
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition((response => {
      this.setState({
        lat: response.coords.latitude
      })
    }), (error => {
      console.log(error);
      this.setState({err: error.message})
      
    }))
  }


  render(){
    // Functionality too simple to be in state goes here
    return (
      <div class="season-displayer">
        {this.state.lat && !this.state.err ? <SeasonDisplay lat={this.state.lat} /> : null }
        {this.state.err ? <p style={{color: 'red'}}>{this.state.err}</p> : null }
        {!this.state.lat && !this.state.err ? <p>Loading</p> : null}
      </div>
    )
  }
}

export default App;

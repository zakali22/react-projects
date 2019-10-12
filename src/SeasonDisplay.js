import React, {Component} from 'react'


class SeasonDisplay extends Component {
    getSeason(lat, month){
        console.log(lat, month)   
        if(month >= 3 && month <= 8){
            return lat > 0 ? 'It\'s summer time. Yeah!!' : 'Yep, it\'s winter.'
        } else {
            return lat > 0 ? 'Yep, it\'s winter.' : 'It\'s summer time. Yeah!!'
        }
    }

    render(){
        return (
            <h1>{this.getSeason(this.props.lat, new Date().getMonth())}</h1>
        )
    }
}

export default SeasonDisplay;
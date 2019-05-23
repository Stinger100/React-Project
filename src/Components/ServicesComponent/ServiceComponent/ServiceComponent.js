import React, {Component} from 'react';
import './ServiceComponent.scss';
import Aux from '../../../hoc/Auxiliary';
import Icon from '../../IconComponent/IconComponent';


class Service extends Component {

    state= {
        hover: false,
    }

    HoverOnHandler = () => {
        this.setState ({hover: true})
    }

    HoverOffHandler = () => {
        this.setState ({hover: false})
    }

    render() {
        return(

    <Aux>
    <div className= {this.state.hover ? "ServiceEffect" : "ServiceComponent"}
         onMouseEnter={this.HoverOnHandler}
         onMouseLeave={this.HoverOffHandler}
         >
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
            <button className="UiButton" ><Icon id="HoverIcon" fill="#003366"/> {this.props.link}</button>
    </div>
    </Aux>

        );
    }
}
    
export default Service;
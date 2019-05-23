import React, {Component} from 'react';

class Icon extends Component {
    render() {
        return (
            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="10" height="10" margin-right="3" fill={this.props.fill} 
	 viewBox="0 0 16 16" aria-labelledby={this.props.iconTitle}>
     <title id={this.props.iconTitle}>Umbrella Icon</title>>
<path  d="M8,15.8c-4.4,0-7.9-3.5-7.9-7.8S3.6,0.2,8,0.2s7.9,3.5,7.9,7.8S12.4,15.8,8,15.8z M8,14.6
	c3.7,0,6.6-2.9,6.6-6.6s-3-6.6-6.6-6.6S1.4,4.4,1.4,8S4.3,14.6,8,14.6z M6.3,10.7L9.1,8L6.3,5.3C6,5,6,4.6,6.3,4.4
	c0.2-0.2,0.6-0.2,0.9,0l3.2,3.2c0.2,0.2,0.2,0.6,0,0.9l-3.2,3.1c-0.2,0.2-0.6,0.2-0.9,0C6.1,11.4,6.1,11,6.3,10.7z"/>
</svg>
        )
    }
}

export default Icon;
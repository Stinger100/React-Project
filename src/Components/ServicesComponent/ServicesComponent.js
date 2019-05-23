import React, {Component} from 'react';
import ServiceComponent from './ServiceComponent/ServiceComponent';
import './ServicesComponent.scss';
import axios from 'axios';


 class Services extends Component {
    state = {
        services: []
    }
    componentDidMount () {
        axios.get('https://headless.000webhostapp.com/api/collections/get/service?token=00cf66931e317114b63d6540f7c1cb&fbclid=IwAR1UENcwBQ061VVlJfA7lgUEkXDvaDtwIiFrw6O7WfjOlY8E5Q5u2oW4zUw')
        .then(response => {
            this.setState ({services: response.data.entries})
           //  console.log(response.data)
        });
    }

    render() {
        
       const services = this.state.services.map(data => {
        // console.log(data))
       return      <div className="ServicesColumn"
                    key={data._id}>
       <ServiceComponent  
                          name={data.name} 
                          description={data.description}
                          link={data.link}/>
                                 </div>
          });
       return (
        <div className="ServicesComponent">
                 {services}
        </div>
       )
    }
    }

    export default Services;
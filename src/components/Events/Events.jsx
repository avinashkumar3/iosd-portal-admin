import React, {Component} from 'react';
import {Route , Switch , Redirect} from 'react-router-dom' ;
import EventsList from "./EventsList";
import EventNewForm from "./EventNewForm";
import EventDetails from "./EventDetails";


class Events extends Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route path='/events/list' component={EventsList}/>
                    <Route path='/events/new' component={EventNewForm}/>
                    <Route path='/events/:id' component={EventDetails}/>
                    <Route path='/events' component={()=><Redirect to='/events/list'/>}/>
                </Switch>

            </div>
        );
    }
}


export default Events;

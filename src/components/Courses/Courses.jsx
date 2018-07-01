import React, {Component} from 'react';
import {Route , Switch , Redirect} from 'react-router-dom' ;
import CoursesList from "./CoursesList";
import CourseNewForm from "./CourseNewForm";
import CourseDetails from "./CourseDetails";


class Courses extends Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route path='/courses/list' component={CoursesList}/>
                    <Route path='/courses/new' component={CourseNewForm}/>
                    <Route path='/courses/:id' component={CourseDetails}/>
                    <Route path='/courses' component={()=><Redirect to='/courses/list'/>}/>
                </Switch>

            </div>
        );
    }
}


export default Courses;

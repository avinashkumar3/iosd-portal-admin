import React, {Component} from 'react';
import {Route , Switch , Redirect} from 'react-router-dom' ;
import LibraryBookList from "./LibraryBookList";
import BookNewForm from "./BookNewForm";
import BookDetails from "./BookDetails";


class Library extends Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route path='/library/list' component={LibraryBookList}/>
                    <Route path='/library/book/new' component={BookNewForm}/>
                    <Route path='/library/book/:id' component={BookDetails}/>
                    <Route path='/library' component={()=><Redirect to='/library/list'/>}/>
                </Switch>

            </div>
        );
    }
}


export default Library;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './app.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField, 
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

// we can create and export our App Component at the same time
class App extends Component {

    componentDidMount() {
       this.props.onRequestRobots();
    }


    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        //filter out robot names with characters matching searchfield
        const filteredRobots = robots.filter(robot => {
            // use toLowerCase to the char values are ===
            // .includes() will see if the values from searchfield are in robot.filter(robot.name)
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        //using a ternary we can return Loading... or cardlist inside the scroll component
        return isPending ? (
          // if we are waiting for a lot of data and it takes time to render
          <h2 className="light-red pa2 tc">Loading...</h2>
        ) : (
          <div className="tc">
            <h1 className="f1 light-red grow">RoboFriends</h1>
            {/* when we type in search we call onSearchChange function */}
            <SearchBox searchChange={onSearchChange} />
            {/* we can pass props via children components */}
            <Scroll>
                {/* if anything in the cardlist fails, it is going to catch and display error message */}
              <ErrorBoundary>
                {/* pass props as filter robots from our variable above to cardList component */}
                <CardList robots={filteredRobots} />
              </ErrorBoundary>
            </Scroll>

            <h5 className="light-red code">Created by Michael!</h5>
          </div>
        );

    }
}


// a higher order function returns that returns another function
// connect comes from react-redux
export default connect(mapStateToProps, mapDispatchToProps)(App);

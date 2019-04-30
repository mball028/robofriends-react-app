import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './app.css';

export default class App extends Component {

    //setting our state
    constructor(){
        super()
        //state is set as an object
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        //fetch is a tool for us to make requests
        //we fetch our users dummy data
        fetch('https://jsonplaceholder.typicode.com/users')
        //translating the response we get from fetch
        .then(response => response.json())
        //recieving users from fake API
        //setting our state of robots to value of users from API 
        .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (e) => {
        //searchfield state gets changed when value is input
        this.setState({ searchfield: e.target.value })
    }

    render() {
        //we set = this.state to refactor our code DRY
        const { robots, searchfield } = this.state;
        //filter out robot names with characters matching searchfield
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //using a ternary we can return Loading... or cardlist inside the scroll component
        return !robots.length ?
            // if we are waiting for a lot of data and it takes time to render
            <h2 className='light-red pa2 tc'>Loading...</h2> :
            (
                <div className='tc'>
                    <h1 className='f1 light-red grow'>RoboFriends</h1>
                    {/* when we type in search we call onSearchChange function */}
                    <SearchBox searchChange={this.onSearchChange} />
                    {/* we can pass props via children components */}
                    <Scroll>
                        {/* pass props as filter robots from our variable above to cardList component */}
                        <CardList robots={filteredRobots} />
                    </Scroll>

                    <h5 className="light-red code">Created by Michael!</h5>
                </div>
            )

    }
}


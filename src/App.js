import React, {Component} from 'react';
import { connect } from 'react-redux';
import { CardList } from './component/CardList';
import { SearchBox } from './component/SearchBox';
import Scroll from './component/Scroll';
import { setSearchField } from './actions';
import 'tachyons';
import './App.css'

const mapStateToProps = state => {
  return{
    searchField: state.searchField
  }
}

const mapDIspatchToProps = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}
class App extends Component {
  constructor ( ) {
    super ( )
    this.state = {
    Robots: [ ]
  }
}

componentDidMount( ){
  fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json( ) )
    .then(users =>{this.setState({ Robots: users})});
}

  render( ) {
    const { Robots } = this.state;
    const { searchField, onSearchChange} = this.props
    const filteredRobots = Robots.filter(Robot => {
      return Robot.name.toLowerCase( ).includes (searchField.toLowerCase( ));
    })
    return  !Robots.length ?
     <h1>Loading</h1> :
    (
    <div className='tc'>
    <h1 className='f1 lightest-blue'>Robo Friends</h1>
    <SearchBox searchChange={onSearchChange} />
    <Scroll>
    <CardList Robots={filteredRobots}/>
    </Scroll>
  </div>
        );
      }
    }

export default connect(mapStateToProps, mapDIspatchToProps)(App);

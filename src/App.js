import React, {Component} from 'react';
import {robots} from './robots';
import CardList from './cardList';
import SearchBox from './SearchBox';



class App extends Component{
	constructor(){
		super()
		this.state = {
			robots : robots,
			searchfield:''
		}
	}
	onSearchChange = (event)=>{
		this.setState({searchfield:event.target.value});
		const filteredrobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		console.log(filteredrobots);
	}
	render()
	{
		const filteredrobots = robots.filter(input =>{
			return input.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

		return(
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchchange={this.onSearchChange}/>
			<CardList robots={filteredrobots} />
		</div>
		)

	}
	
}

export default App;
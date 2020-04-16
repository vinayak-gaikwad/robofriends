import React, {Component} from 'react';
import {robots} from '../Components/robots';
import CardList from '../Components/cardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';



class App extends Component{
	constructor(){
		super()
		this.state = {
			robots : [],
			searchfield:''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
			.then(users=>{this.setState({robots: users})})
	}

	onSearchChange = (event)=>{
		this.setState({searchfield:event.target.value});
		const filteredrobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		
	}

	render()
	{
		const filteredrobots = robots.filter(input =>{
			return input.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robots.length === 0){
			return <h1>Loading</h1>
		}
		else{
				return(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchchange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredrobots} />
				</Scroll>
			</div>
			)

		}

		

	}
	
}

export default App;
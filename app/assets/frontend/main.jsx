import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';

let mockTweets = [
	{id: 1, name: 'Suman Khara', body: 'My #FirstTweet'},
	{id: 2, name: 'Suman Khara', body: 'My #SecondTweet'},
	{id: 3, name: 'Suman Khara', body: 'My #ThirdTweet'}
];

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {tweetsList: []};
	}

	addTweet(tweetToAdd){
		let newTweetsList = this.state.tweetsList;
		newTweetsList.unshift({id: Date.now(), name: 'Guest', body: tweetToAdd});
		this.setState({tweetsList: newTweetsList});
	}

	componentDidMount(){
		$.ajax("/tweets")
		.success(data => this.setState({tweetsList: data}))
		.error(error => console.log(error));
	}

	render(){
		return(
			<div className="container">
				<TweetBox sendTweet={this.addTweet.bind(this)}/>
				<TweetsList tweets={this.state.tweetsList}/>
			</div>
		);
	}
}

let documentReady = () => {
	let reactNode = document.getElementById('root');
	if(reactNode){
		ReactDOM.render(
			<Main/>,
			document.getElementById('root')
		);
	}
};

$(documentReady);

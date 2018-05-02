import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import youtubeSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import SearchBar from './components/searchBar';
import VideoDetail from './components/videoDetail';
import _ from 'lodash';

const API_KEY = 'AIzaSyB0FHRMxfyCHfTquV-_fza_dcVhPjpts-U';


class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("friends tv show");
    }

    videoSearch(term){
        youtubeSearch({key: API_KEY, term: term}, (videos)=> {
            // this.setState({videos: data});
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        const videoSearch = _.debounce(term => this.videoSearch(term), 500)
        return(
            <div>
                <SearchBar onSearchChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    };
}

ReactDOM.render(<App/>, document.querySelector('.container'))
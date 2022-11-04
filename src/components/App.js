import React,{useState, useEffect} from "react";
import useVideos from "../hooks/useVideos";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
    const [selectedVideo,setSelectedVideo] = useState(null);
    const [videos,search] = useVideos('buildings');

    useEffect(() => {
        setSelectedVideo(videos[0])
    },[videos]);

    return (
        <div className="ui container">
            <SearchBar onSearchFormSubmit={search}></SearchBar>
            <div className="ui grid">                
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}></VideoDetail>
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            onVideoSelect={setSelectedVideo} 
                            videos={videos}
                        ></VideoList>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default App;
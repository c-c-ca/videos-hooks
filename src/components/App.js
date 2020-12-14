import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Spinner from './Spinner';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="row">
          <div className="sixteen wide column">
            <SearchBar onFormSubmit={search} />
          </div>
        </div>
        <div className="row">
          <div className="eleven wide column">
            {selectedVideo ? (
              <VideoDetail video={selectedVideo} />
            ) : (
              <Spinner />
            )}
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

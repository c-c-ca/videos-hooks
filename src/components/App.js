import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Spinner from './Spinner';
import youtube from '../apis/youtube';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async term => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(data.items);
    setSelectedVideo(data.items[0]);
  };

  useEffect(() => {
    onTermSubmit('buildings');
  }, []);

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="row">
          <div className="sixteen wide column">
            <SearchBar onFormSubmit={onTermSubmit} />
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

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constants";

import VideoCard from "./VideoCard";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getSuggestedVideo();
  }, []);

  const getSuggestedVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex ">
      <div>
        <div className="px-5 w-full">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; 
              autoPlay; clipboard-write; 
              encrypted-media; 
              gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <CommentsContainer />
      </div>

      <div className="flex flex-col">
        <LiveChat />
        <b className="text-lg">Suggested Video</b>

        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;

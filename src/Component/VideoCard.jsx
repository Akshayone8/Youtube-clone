import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        src={thumbnails.medium.url}
        alt="youtube-image"
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} Views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-600">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;

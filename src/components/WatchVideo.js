import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";

const WatchVideo = () => {
  let [searchParams] = useSearchParams();
  
  const keyOfvideo = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-24 mt-2">
      <div>
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/" + keyOfvideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      </div>
      <div>
        <CommentSection/>
      </div>
    </div>
  );
};
export default WatchVideo;

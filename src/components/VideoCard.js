
const VideoCard = ({info})=>{
    //console.log(info)
    const {snippet, statistics} = info;

    const { channelTitle, title, thumbnails } = snippet;

    return(
        <div className="p-2 m-2 w-72 shadow-lg">
            <img alt="thumbnails" src={thumbnails.medium.url} className="rounded-lg" />
            <div className="font-bold">{title}</div>
            <div>{channelTitle}</div>
            <div>Views - {statistics.viewCount}</div>
        </div>
    )
}
export default VideoCard;
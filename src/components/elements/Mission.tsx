const Mission = () => {
  return (
    <div className="max-w-screen-2xl px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-24">
        <div className="mx-auto">
          <div className="w-96" style={{width: "500px", height: "500px"}}>
            {/* <video className="w-full h-full" src={process.env.PUBLIC_URL + "assets/mov.mp4"} preload="auto" autoPlay controls disablePictureInPicture controlsList="nodownload noplaybackrate" ></video> */}
            <div className="player react-player__preview" tabIndex={0} style={{backgroundImage : `url(${process.env.PUBLIC_URL}'/assets/video.jpg')`}} >
              <img src={process.env.PUBLIC_URL + "/assets/play.png"} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start text-left place-items-center">
          <div className="flex flex-col mx-auto ">
            <p className="text-gray-400 font-logo text-center lg:text-left uppercase mb-4 tracking-widest font-benji">Music + Web3</p>
            <h1 className="font-logo text-white text-center lg:text-left text-5xl font-bold uppercase font-benji">Our Mission</h1>
            <p className="max-w-2xl text-white text-center lg:text-left text-lg md:text-2xl	my-8 font-light ">A cornerstone of our community is love of music and enormous parties. Over the past decade, White Panda has headlined over 500 shows, using genre-spanning mashups to bring music enthusiasts of all kinds together. The AFPs will explore applications of Web3 for the music industry through a series of extravagant concert events at all major global NFT conferences, kicking off in June 2022 in New York City.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
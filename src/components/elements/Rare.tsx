const Rare = () => {
  return (
    <div className="flex flex-col mt-48 justify-center items-center lg:items-start text-left place-items-center">
      <div className="flex flex-col mx-auto text-center">
        <p className="text-gray-400 font-logo  uppercase mb-4 tracking-widest font-benji">RARE ONE OF ONES</p>
        <h1 className="font-logo text-white text-5xl font-bold uppercase font-benji">the endangered bears</h1>
        <p className="max-w-2xl mx-auto text-white text-lg 	my-8 font-light">The Endangered Bears are 25 AFPs who have transcended into the realm of 3D spatial audio. Once the Almost Famous Pandas are sold out, each Endangered Bear owner will gain access to a 3D version of their Panda complete with an original White Panda mashup sampling all artists featured in their unique NFT. </p>
        <div className="mx-auto">
          <div className="w-96" style={{width: "500px", height: "500px"}}>
            {/* <video className="w-full h-full" src={process.env.PUBLIC_URL + "assets/mov.mp4"} preload="auto" autoPlay controls disablePictureInPicture controlsList="nodownload noplaybackrate" ></video> */}
            <div className="player react-player__preview" tabIndex={0} style={{backgroundImage : `url(${process.env.PUBLIC_URL}'/assets/video.jpg')`}} >
              <img src={process.env.PUBLIC_URL + "/assets/play.png"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rare;
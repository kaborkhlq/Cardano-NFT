const Super = () => {
  return (
    <div>
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-24">
          <div className="flex flex-col justify-center items-center lg:items-start text-left place-items-center">
            <div className="flex flex-col mx-auto">
              <p className="text-gray-400 font-logo text-center md:text-left uppercase mb-4 tracking-widest font-benji">HEAD BEAR</p>
              <h1 className="font-logo text-white text-center md:text-left text-5xl font-bold uppercase font-benji">White Panda</h1>
              <p className="max-w-2xl text-white text-center md:text-left text-lg md:text-2xl	my-8 font-light">A pioneer in mashups, White Panda honed his signature throwback-meets-modern sound on seven albums that have garnered over 300 million streams worldwide. Along the way, the electronic dance mammal became known for his high-energy live shows complete with pyrotechnics, projection design and an unmistakable LED panda mask. After taking a hiatus to earn his MBA at Harvard, he returns to music with the AFPs, ready to explore applications of Web3 for the music industry and intent on making his second act even bigger than his first.</p>
            </div>
          </div>
          <div className="mx-auto">
            <img src={process.env.PUBLIC_URL + "/assets/wp.jpg"} data-xblocker="passed" className="visible"/>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto mt-32">
        <div className="grid md:grid-cols-2 gap-6 md:gap-24">
          <div className="flex flex-col justify-center items-center lg:items-start text-left place-items-center">
            <div className="flex flex-col mx-auto">
              <p className="text-gray-400 font-logo text-center md:text-left uppercase mb-4 tracking-widest font-benji">3D ARTIST</p>
              <h1 className="font-logo text-white text-center md:text-left text-5xl font-bold uppercase font-benji">CHOCOTOY</h1>
              <p className="max-w-2xl text-white text-center md:text-left text-lg md:text-2xl	my-8 font-light">Born at the confluence of creativity, zaniness, and emotion, a young artist from a small town Guarenas, Venezuela has become one of the most visible graphic desginers of his generation under the playful moniker Chocotoy. Inspired by the gIittery childish quality of toys and candy, Chocotoy’s visual signature contrasts powerful outlines with electrifying colours - catching the eye and giving life to humorous and lovable characters.</p>
            </div>
          </div>
          <div className="mx-auto">
            <img src={process.env.PUBLIC_URL + "/assets/choco.jpg"} data-xblocker="passed" className="visible"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Super;
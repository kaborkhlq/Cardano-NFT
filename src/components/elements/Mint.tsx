import NFTMint from "../../utils/MintNFTs";
import React from "react";

const Mint = ({setIsMinting, setAlertState}: any) => {

  const onMint = async (event: any) => {
    event.preventDefault();

    setIsMinting(true);

    const result = await NFTMint();
    
    setIsMinting(false);

    if (result == "Transaction Succeed!") {
      setAlertState({msg: "Mint success!",open: true});
    } else {
      setAlertState({msg: "Mint fail!",open: true});
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <div className="bg-black">
        <div className="max-w-screen-2xl  mx-auto my-16">
          <div className="flex flex-col items-center text-center mx-auto">
            {/* <p className="text-gray-400 font-logo uppercase mb-4 tracking-widest font-benji">SOLD OUT</p> */}
            <h1 className="font-logo text-white text-5xl font-bold uppercase font-benji">Almost famous Pandas</h1>
            <p className="max-w-2xl text-white text-2xl	my-8 font-light leading-10">AFP is a Solana NFT collection and music-obsessed community from mashup maestro White Panda featuring 8,888 Pandas, each bearing a unique blend of attributes inspired by iconic musicians.</p>
            <div className="grid grid-cols-3 gap-4 ">
              <div>
                <div className="font-logo text-gray-400 text-sm font-benji">Network</div>
                <p className="">Solana</p>
              </div>
              <div>
                <div className="font-logo text-gray-400 text-sm font-benji">Network</div>
                <p className="">Cardano</p>
              </div>
              <div>
                <div className="font-logo text-gray-400 text-sm font-benji">Supply</div>
                <p>8,888</p>
              </div>
            </div>
            <div className="w-full mt-8 flex flex-col sm:flex-row sm:justify-center gap-2.5 font-body">
              <a href="#" onClick = {onMint} target="_blank" rel="noopener noreferrer" className="mx-auto tracking-wide inline-block bg-white hover:bg-gray-200 font-extrabold focus-visible:ring ring-indigo-300 text-lg md:text-base text-center text-black	outline-none transition duration-100 px-8 py-3 uppercase">
                Mint Now.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;
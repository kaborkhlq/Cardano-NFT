import axios from 'axios';
import { Blockfrost, Lucid, MintingPolicy, PolicyId, Unit, utf8ToHex, } from "lucid-cardano";
import * as config from "../config/Config";

export const mintNFTRandomly = async (
  id: any,
  lucid: any
): Promise<any> => {
  const address = await lucid.wallet.address();

  /////////////////////////////////////////////////////////////
  const { paymentCredential } = lucid.utils.getAddressDetails(
    await lucid.wallet.address(),
  );

  const mintingPolicy: MintingPolicy = lucid.utils.nativeScriptFromJson(
    {
      type: "all",
      scripts: [
        { type: "sig", keyHash: paymentCredential?.hash! },
//        {
//          type: "before",
//          slot: lucid.utils.unixTimeToSlot(Date.now() + 1000000),
//        },
      ],
    },
  );

  const mintingPolicyId: PolicyId = lucid.utils.mintingPolicyToId(
    mintingPolicy,
  );

  ///////////////////////////////////////////////////////////////
//  const mintingPolicy = JSON.parse(config.MintingPolicy);
//  const mintingPolicyId = config.MintingPolicyID;
  
  console.log(mintingPolicy);
  console.log(mintingPolicyId);

  const name = config.NFTName;
  const metadata = {
    [mintingPolicyId]: {
      [name + id]: {
        image: config.IPFSURL + id + config.IMAGE_TYPE,
        mediaType: config.MEDIA_TYPE,
        name: name + "#" + id,
        description: config.DESCRIPTION,
      }
    }
  };  

  const unit: Unit = mintingPolicyId + utf8ToHex(name + id);

  const tx = await lucid
    .newTx()
    .addSigner(address)
    .validTo(Date.now() + config.VALID_TIME)
    .attachMetadata(721 , metadata)
    .attachMintingPolicy(mintingPolicy)
    .mintAssets({ [unit]: 1n })
    .payToAddress(address, { [unit]: 1n })
    .payToAddress(config.PAYMENT_ADDR, { lovelace: config.MINT_PRICE })
    .complete();

  const signedTx = await tx.sign().complete();

  const txHash = await signedTx.submit();
  
  console.log(txHash);

  const result = await lucid.awaitTx(txHash);
  
  console.log(result);
  return result; 
}

const getNFTID = async (address : any): Promise<any> => {
  let id;

  const GETURL = `${config.BASIC_URL}/nftid?address=${address}`;
  await axios.get(GETURL).then((res) => {
    console.log('===Server Response===', res);
    id = res.data.currentCount;
  });

  console.log(id);
  return id;
}

const postMintedNFTID = async (
  address: string
): Promise<string> => {
  const POSTURL = `${config.BASIC_URL}/nftid`;

  const res = await axios.post(
    POSTURL, 
    {
      address
    }
  );
  
  if (res.data.result == "success")
    return "success";
  else
    return "fail";
  return "fail";
}

const mintNFT = async (
): Promise<string> => {
  // Create Lucid
  const lucid = await Lucid.new(
        new Blockfrost(
          config.BlockFrost_URI, 
          config.BLOCKFROST_PROJ),
        config.NetWork,
      );
  // Wallet Connection
  const api = await window.cardano.nami.enable();
  lucid.selectWallet(api);
  // Get Selected Wallet Address
  const address = await lucid.wallet.address();

  // Get NFTID to be minted
  const id = await getNFTID(address);

  // Mint NFT
  const result = await mintNFTRandomly(id, lucid);
  
  if (result == true) {
    // If minting was succeed, register it to db.
    let res: string = "fail";

    while (res == "fail") {
      res = await postMintedNFTID(address);
      console.log(res);
      if (res == "success")
        break;
    }
  } else {
    // If minting was failed, return ERROR.
    return "Transaction Failed!";
  }
  return "Transaction Succeed!";
}

export default mintNFT;
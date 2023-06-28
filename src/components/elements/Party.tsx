const Party = () => {
  return (
    <div className="mt-48 flex flex-col items-center justify-center space-y-12 relative" >
      <img className="visible w-full" src={process.env.PUBLIC_URL + "assets/party.png"} data-xblocker="passed" />
    </div>
  );
}

export default Party;
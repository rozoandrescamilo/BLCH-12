const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const DoTrackStatusValidator = await ethers.getContractFactory("DoTrackStatusValidator");
  const deployed = await DoTrackStatusValidator.deploy();

  console.log("DoTrackStatusValidator is deployed at:", deployed.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

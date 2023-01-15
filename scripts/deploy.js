const hre = require("hardhat");

async function main() {
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy(50000000000, 86400);
  await crowdFunding.deployed();

  console.log(`deployed contract Address ${crowdFunding.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

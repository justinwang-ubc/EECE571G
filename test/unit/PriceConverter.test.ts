// // test/PriceConverter-test.js
// import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
// import { assert, expect } from "chai"
// import { network, deployments, ethers } from "hardhat"
// import { developmentChains } from "../../helper-hardhat-config"
// import { FundMe, MockV3Aggregator } from "../../typechain-types"



// describe("PriceConverter", function () {
//   let TestPriceConverter;
//   let fundMe: FundMe
//   let mockV3Aggregator: MockV3Aggregator
//   let deployer: SignerWithAddress

//   beforeEach(async function () {
//     TestPriceConverter = await ethers.getContractFactory("TestPriceConverter");
//     testPriceConverter = await TestPriceConverter.deploy();
//     await testPriceConverter.deployed();

//     // Replace the following address with the correct address of an AggregatorV3Interface contract
//     // You can find a list of mainnet Chainlink price feed addresses here: https://docs.chain.link/docs/ethereum-addresses/
//     const aggregatorV3InterfaceAddress = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"; // Example: ETH/USD price feed address
//     priceFeed = await ethers.getContractAt("AggregatorV3Interface", aggregatorV3InterfaceAddress);
//   });

//   it("Should return the correct price", async function () {
//     const price = await testPriceConverter.testGetPrice(priceFeed);
//     expect(price).to.be.gt(0);
//   });

//   it("Should return the correct conversion rate", async function () {
//     const ethAmount = ethers.utils.parseEther("1");
//     const conversionRate = await testPriceConverter.testGetConversionRate(ethAmount, priceFeed);
//     expect(conversionRate).to.be.gt(0);
//   });
// });
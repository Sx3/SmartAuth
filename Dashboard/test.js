const Web3 = require("web3");

// Create a Web3 instance
const web3 = new Web3(
  new Web3.providers.HttpProvider("http://192.168.1.64:8545")
); // replace the endpoint with your own network endpoint

web3.eth.getAccounts().then((e) => console.log(e));

const fs = require("fs");
const contractAbi = JSON.parse(fs.readFileSync("contract.abi"));
const contractAddress = "0x4A1aEA0E4c3856a6FaF82D2660Ae2B455d64B34A";

const contract = new web3.eth.Contract(contractAbi, contractAddress);

contract.methods.getName().call((error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});

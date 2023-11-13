const contractAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_specs",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSpecs",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const contractAddress = "0x84ecCDB400eC578b0c7ab8CE18f6EA3F4bd4b933";
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Get the contract state
contract.methods
  .getName()
  .call()
  .then((name) => {
    console.log(`Name: ${name}`);
    return contract.methods
      .getSpecs()
      .call()
      .then((specs) => {
        console.log(`Specs: ${specs}`);
        alert(`Name: ${name}\nSpecs: ${specs}`);
      });
  })
  .catch((error) => {
    console.log(`Error getting contract state: ${error}`);
    alert(error);
  });

import Web3 from "/web3.min.js";

const contractAbi = [
  {
    constant: true,
    inputs: [],
    name: "getName",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getSpecs",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { name: "_name", type: "string" },
      { name: "_specs", type: "string" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const contractBytecode =
  "0x608060405234801561001057600080fd5b5060ee8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80632967c348146037578063ab18d19814604c575b600080fd5b604a604c565b604051604e9190607c565b60405180910390f35b608260048036036020811015607757600080fd5b810190808035906020019092919050505060a0565b005b6082600439609c919060a8565b6000805490509056fea165627a7a72305820779e04cb3445291d9e03c16f9b160b2c7b14aa6c2231eb998ee47b662c8d977a0029";

const account = "0x7808424fe492ee848a22a8d4f707b0a476ab832b";

function test() {
  alert("shuuuh");
}

function generateContract() {
  const productName = document.getElementById("productName").value;
  const productSpecs = document.getElementById("productSpecs").value;

  const contract = new web3.eth.Contract(contractAbi, {
    data: contractBytecode,
    from: account,
    gas: 3000000,
  });

  const contractCode = contract.toString();
  document.getElementById("contractCode").value = contractCode;
}

function deployContract() {
  const productName = document.getElementById("productName").value;
  const productSpecs = document.getElementById("productSpecs").value;

  const contract = new web3.eth.Contract(contractAbi);

  contract
    .deploy({
      data: contractBytecode,
      arguments: [productName, productSpecs],
    })
    .send({
      from: account,
      gas: 3000000,
      gasPrice: web3.utils.toWei("10", "gwei"),
    })
    .on("receipt", (receipt) => {
      console.log("Contract address: " + receipt.contractAddress);
      alert("Contract deployed successfully!");
    })
    .on("error", (error) => {
      console.error("Error deploying contract: " + error);
      alert("Error deploying contract: " + error.message);
    });
}

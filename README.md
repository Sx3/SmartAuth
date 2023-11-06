# SmartAuth
BlockChain based (ETH) product verification system
This Project starts with the intension to try an alternative use case of block chain technology.

In a nutshell...
Using Ethereum Smart Contracts to verify a QR code (QR code is genarated based on Eth address).

So here is how I setup it.

Fireup a latest ubuntu server ( we can have many nodes but for now we stay on one node)
we are going to run a private etherum blockchin in our network.so we use official go implementation of Etherum protocol
https://geth.ethereum.org/

No Fancy System requirement is required for now.

![image](https://github.com/Sx3/SmartAuth/assets/3599933/d3ef943e-0c7a-428e-9bdc-596c64850357)

Use following commands to install on ubuntu (https://geth.ethereum.org/docs/getting-started/installing-geth) 

sudo add-apt-repository -y ppa:ethereum/ethereum  
sudo apt-get update  
sudo apt-get install ethereum 

Then connect it using a putty client. so that we can run commands easily

Now we are going to create two ETH accounts on our private eth server.
create a folder inside the ubuntu vm and cd into it.then run the following command.

geth --datadir ./data account new

![image](https://github.com/Sx3/SmartAuth/assets/3599933/81daf530-ba82-4751-9721-8e9dc626ec84)

create two accounts and NOTE down the Public address and the password.

0x6c3a2912fffcbC24C9aFFaFF0a6f247F3A7eBb56 

and 

0x00288CcC644370619e272220D0bAaA7B9C84d11F

password 1234 :)

these accounts represent a company/Institude who needs product authentication for their products.
so these accounts should be initialize with some eth balance.for the 1st time we will need a genesis.json file and initialize our the server with it.

{  
  "config": {  
    "chainId": 2023,  
    "homesteadBlock": 0,  
    "byzantiumBlock": 0,  
    "constantinopleBlock": 0,  
    "istanbulBlock": 0,  
    "petersburgBlock":0,  
    "eip150Block": 0,  
    "eip155Block": 0,  
    "eip158Block": 0  
  },  
  "difficulty": "400",  
  "gasLimit": "2000000",  
  "alloc": {  
    "0x604fC20ADC8a5227f716680eD1936111aB8D200Fs": {   
    "balance": "100000000000000000000000"   
    },  
    "0x89158E4D2f2E7C64A00358e0Ac2B055Cc54E8230": {   
    "balance": "120000000000000000000000"   
    }  
  }  
}  
  

![image](https://github.com/Sx3/SmartAuth/assets/3599933/ef4e2469-3654-426f-a145-88adc013d78b)  

next run the init command  

geth --datadir ./data init ./genesis.json  

![image](https://github.com/Sx3/SmartAuth/assets/3599933/a3233f48-f344-4863-a1dc-ca2c539909b4)  

next start the network  

geth --datadir ./data --http --http.addr 0.0.0.0 --http.port 8545 --http.corsdomain "*" --http.api "personal,eth,net,web3" --allow-insecure-unlock  

NOTE:-  
--allow-insecure-unlock => https://stackoverflow.com/questions/59340803/geth-option-allow-insecure-unlock-what-exactly-does-it-mean  

![image](https://github.com/Sx3/SmartAuth/assets/3599933/f57abc17-a1d4-437a-a230-8b9ecd06b297)  

then open another putty session into it and connect to the eth network  

geth attach geth.ipc  

![image](https://github.com/Sx3/SmartAuth/assets/3599933/399b049d-456e-440f-89ae-08fb10a9281f)  

check accounts by  

eth.accounts

![image](https://github.com/Sx3/SmartAuth/assets/3599933/aad5a393-1c60-415c-a43c-8f7fe2d1bbbd)  

Now we have a functioning private eth server to test our applicaion.









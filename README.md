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
0x00288CcC644370619e272220D0bAaA7B9C84d11F

password 1234 :)






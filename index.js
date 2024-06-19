import { Network, Alchemy } from 'alchemy-sdk';
import dotenv from 'dotenv';

dotenv.config();
const {ALCHEMY_API_KEY} = process.env

const settings = {
    apiKey: ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);
const usdcContractAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
//ANCHOR - GET BLOCK NUMBER
async function getBlockNumber() {
    try {
      const blockNumber = await alchemy.core.getBlockNumber();
      console.log('Current block number:', blockNumber);
      return blockNumber;
    } catch (error) {
      console.error('Error getting block number:', error);
      throw error;
    }
  }
  
getBlockNumber()

//ANCHOR - GET TOKEN BALANCE
async function getTokenBalances(address) {
    try {
      const balances = await alchemy.core.getTokenBalances(address);
      console.log('Token balances:', balances);
      return balances;
    } catch (error) {
      console.error('Error getting token balances:', error);
    }
  }
//   getTokenBalances('0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97')

//ANCHOR - GET METADATA
async function getMetadata(tokenContractAddress) {
    try {
      const metadata = await alchemy.core.getTokenMetadata(tokenContractAddress);
      return metadata;
    } catch (error) {
      console.error('Error getting token metadata:', error);
      throw error; 
    }
  }
  
  getMetadata(usdcContractAddress)
  .then(metadata => {
    console.log('Token metadata:', metadata);
   
  })
  .catch(error => {
    console.error('Failed to get token metadata:', error);
   
  });


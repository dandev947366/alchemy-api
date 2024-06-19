import { Network, Alchemy } from 'alchemy-sdk';
import dotenv from 'dotenv';

dotenv.config();
const {ALCHEMY_API_KEY} = process.env

const settings = {
    apiKey: ALCHEMY_API_KEY,
    network: Network.OPT_SEPOLIA,
};

const alchemy = new Alchemy(settings);

//GET BLOCK NUMBER
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
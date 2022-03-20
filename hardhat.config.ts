import "@nomiclabs/hardhat-waffle";
import dotenv from "dotenv";

dotenv.config();

export default {
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainId: 1337,
		},
		mumbai: {
			url: `https://polygon-mumbai.infura.io/v3/${process.env.PROJECT_ID}`,
			accounts: [process.env.PRIVATE_KEY],
		},
		mainnet: {
			url: `https://polygon-mainnet.infura.io/v3/${process.env.PROJECT_ID}`,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
	solidity: {
		version: "0.8.4",
	},
};

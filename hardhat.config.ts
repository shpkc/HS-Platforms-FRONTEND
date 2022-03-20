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
			url: "https://mainnet.infura.io/v3/e452f80b1e6a47c781033054523b137e",
			accounts: [process.env.PRIVATE_KEY],
		},
	},
	solidity: {
		version: "0.8.4",
	},
};

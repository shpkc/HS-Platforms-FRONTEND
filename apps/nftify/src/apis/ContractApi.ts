import Web3Modal from "web3modal";
import { ethers } from "ethers";
import NFTMarketplace from "../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

// NOTE : NFT 구매 web3 api
export const purchaseProductWithWeb3 = async ({
	price,
	tokenId,
}: {
	price: number;
	tokenId: string;
}) => {
	try {
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(
			process.env.NEXT_PUBLIC_NFT_MARKET_PLACE_ADDRESS,
			NFTMarketplace.abi,
			signer
		);
		const convertedPrice = ethers.utils.parseUnits(price.toString(), "ether");
		const transaction = await contract.createMarketSale(tokenId, {
			value: convertedPrice,
		});
		await transaction.wait();
		// NOTE : purchase history add
	} catch (e) {
		// NOTE : before create modal, expose alert
		alert(e);
	}
};

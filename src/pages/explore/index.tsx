/* pages/my-nfts.js */
import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import { useRouter } from "next/router";

import NFTMarketplace from "../../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

export default function MyAssets() {
	const [nfts, setNfts] = useState([]);
	const [loadingState, setLoadingState] = useState("not-loaded");

	useEffect(() => {
		loadNFTs();
	}, []);

	async function loadNFTs() {
		console.log(process.env.NFT_MARKET_PLACE_ADDRESS);

		// const web3Modal = new Web3Modal({
		//   network: "mainnet",
		//   cacheProvider: true,
		// })
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.JsonRpcProvider(
			"https://rpc-mumbai.matic.today"
		);

		const signer = provider.getSigner();

		const contract = new ethers.Contract(
			process.env.NFT_MARKET_PLACE_ADDRESS,
			NFTMarketplace.abi,
			provider
		);

		const data = await contract.fetchMarketItems();

		/*
		 *  map over items returned from smart contract and format
		 *  them as well as fetch their token metadata
		 */
		console.log(data);
		const items = await Promise.all(
			data.map(async i => {
				const tokenUri = await contract.tokenURI(i.tokenId);
				const meta = await axios.get(tokenUri);
				let price = ethers.utils.formatUnits(i.price.toString(), "ether");
				let item = {
					price,
					tokenId: i.tokenId.toNumber(),
					seller: i.seller,
					owner: i.owner,
					image: meta.data.image,
					name: meta.data.name,
					description: meta.data.description,
				};
				return item;
			})
		);
		console.log(items);
		setNfts(items);
		setLoadingState("loaded");
	}
	if (loadingState === "loaded" && !nfts.length)
		return <h1 className="py-10 px-20 text-3xl">No assets owned</h1>;
	return (
		<div className="flex justify-center">
			<div className="p-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
					{nfts.map((nft, i) => (
						<div key={i} className="border shadow rounded-xl overflow-hidden">
							<img
								src={nft.image}
								alt="Picture of the author"
								className="rounded"
								width={350}
								height={500}
								// blurDataURL="data:..." automatically provided
								// placeholder="blur" // Optional blur-up while loading
							/>
							<div className="p-4 bg-black">
								<p className="text-2xl font-bold text-white">
									Price - {nft.price} ETH
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

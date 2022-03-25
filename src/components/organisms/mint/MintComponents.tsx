import React from "react";
import HsButton from "src/components/atoms/button/HsButton";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import HsTextField from "src/components/atoms/textfield/HsTextField";
import { validationHelper } from "src/helper/validationHelper";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import Router, { useRouter } from "next/router";
import Web3Modal from "web3modal";
import NFTMarketplace from "../../../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

const MintContents = () => {
	const client = create({
		host: "https://ipfs.infura.io:5001/api/v0",
	});
	const [nftFileUrl, setNftFileUrl] = useState(null);
	const [nftInfo, setNftInfo] = useState({
		name: "",
		description: "",
		price: "",
	});

	async function onChange(e) {
		const file = e.target.files[0];
		try {
			const added = await client.add(file, {
				progress: prog => console.log(`received: ${prog}`),
			});
			const url = `https://ipfs.infura.io/ipfs/${added.path}`;
			setNftFileUrl(url);
		} catch (error) {
			console.log("Error uploading file: ", error);
		}
	}
	async function uploadToIPFS() {
		const { name, description, price } = nftInfo;
		if (!name || !description || !price || !nftFileUrl) return;
		/* first, upload to IPFS */
		const data = JSON.stringify({
			name,
			description,
			image: nftFileUrl,
		});
		try {
			const added = await client.add(data);
			const url = `https://ipfs.infura.io/ipfs/${added.path}`;

			return url;
		} catch (error) {
			console.log("Error uploading file: ", error);
		}
	}

	async function listNFTForSale() {
		const url = await uploadToIPFS();
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();

		/* next, create the item */
		const price = ethers.utils.parseUnits(nftInfo.price, "ether");

		let contract = new ethers.Contract(
			process.env.NFT_MARKET_PLACE_ADDRESS,
			NFTMarketplace.abi,
			signer
		);

		let listingPrice = 1;
		console.log(price);
		let transaction = await contract.createToken(url, price);
		console.log(transaction);
		await transaction.wait();
		Router.back();
	}

	return (
		<HsContainer
			padding={["100px 15px 0 15px", "150px 0 0 0"]}
			margin={[, "0 auto"]}
			width={[, "500px"]}
		>
			<HsContainer margin="0 0 20px 0">
				<HsText color="white" margin="0 0 10px 0">
					Email
				</HsText>
				<HsTextField
					value={nftInfo.name}
					onChange={e => setNftInfo({ ...nftInfo, name: e.target.value })}
					placeholder="example@example.com"
				/>
			</HsContainer>
			<HsContainer margin="0 0 30px 0">
				<HsTextField
					value={nftInfo.description}
					onChange={e =>
						setNftInfo({ ...nftInfo, description: e.target.value })
					}
				/>
			</HsContainer>
			<HsContainer margin="0 0 30px 0">
				<HsTextField
					value={nftInfo.price}
					onChange={e => setNftInfo({ ...nftInfo, price: e.target.value })}
				/>
			</HsContainer>
			<input type="file" name="Asset" className="my-4" onChange={onChange} />
			{nftFileUrl && (
				<img className="rounded mt-4" width="350" src={nftFileUrl} />
			)}
			<button
				onClick={listNFTForSale}
				className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg"
			>
				Create NFT
			</button>
		</HsContainer>
	);
};

export default MintContents;

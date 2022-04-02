import hardhat from "hardhat";

async function main() {
	const NFTMarketplace = await hardhat.ethers.getContractFactory(
		"NFTMarketplace"
	);
	const nftMarketplace = await NFTMarketplace.deploy();

	await nftMarketplace.deployed();

	console.log("Greeter deployed to:", nftMarketplace.address);
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error);
		process.exit(1);
	});

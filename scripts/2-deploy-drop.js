import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xdB5b6216d7AC098d99B426245c71cC0c8Bbdd713");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "HotDogCartDAO Membership",
      description: "A DAO for buying a HotDog Street Vendor",
      image: readFileSync("scripts/assets/hotdog-cart.jpg"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()
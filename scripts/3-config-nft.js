import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xD7f8ab5A4FBC6a1F12eBD2faE2A52B0978D6b596",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Hot Dog Cart Pass",
        description: "Will give you access to CartDAO!",
        image: readFileSync("scripts/assets/hotdog-cart.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
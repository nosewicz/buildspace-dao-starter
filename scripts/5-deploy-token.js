import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0xdB5b6216d7AC098d99B426245c71cC0c8Bbdd713");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "HotDogCartDAO governance token",
      symbol: "HDCDg",
    });
    console.log("✅ Successfully deployed token module, address:", tokenModule.address,);
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
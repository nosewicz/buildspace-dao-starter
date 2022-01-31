import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0xd978F87De00D9d49807B32a522b935eef1B05133",
);

(async () => {
  try {
    const amount = 1_000_000;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);

    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();

    console.log(
      "✅ Money Printer go BRRR. There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "HDCDg in circulation"
    );
  } catch (error) {
    console.error("failed to print money", error);
  }
})();
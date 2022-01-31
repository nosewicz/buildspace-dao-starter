import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule(
  "0xCf7fff16f88649cA6e2E17916e8c9B9bB51AA6D6"
);

const tokenModule = sdk.getTokenModule(
  "0xd978F87De00D9d49807B32a522b935eef1B05133"
);

(async () => {
  try {
    await tokenModule.grantRole("minter", voteModule.address);
    console.log("Succesfully gave vote module permissions to act on token module");
  } catch (err) {
    console.error("failed to grant vote module permissions on token module", err);
    process.exit(1);
  }

  try {
    const ownedTokenBalance = await tokenModule.balanceOf(process.env.WALLET_ADDRESS);
    const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
    const percent90 = ownedAmount.div(100).mul(90);

    await tokenModule.transfer(
      voteModule.address,
      percent90
    );

    console.log("✅ Successfully transferred tokens to vote module");
  } catch (error) {
    console.error("failed to transfer tokens to vote module", error);
  }
})();
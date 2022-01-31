import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0xdB5b6216d7AC098d99B426245c71cC0c8Bbdd713"
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "HotDogCartDAO's proposals",
      votingTokenAddress: "0xd978F87De00D9d49807B32a522b935eef1B05133",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "0",
    });
    console.log(
      "✅ Successfully deployed vote module, address:", voteModule.address
    );
  } catch (err) {
    console.error("Failed to deploy vote module", err);
  }
})();
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0xd978F87De00D9d49807B32a522b935eef1B05133",
);

(async () => {
  try {
    console.log(
      "👀 Roles that exist right now:",
      await tokenModule.getAllRoleMembers()
    );

    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
    console.log(
      "🎉 Roles after revoking ourselves",
      await tokenModule.getAllRoleMembers()
    );
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");
  } catch (error) {
    console.error("failed to revoke ourselves from DAO treasury", error);
  }
})();
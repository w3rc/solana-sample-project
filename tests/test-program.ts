const anchor = require("@project-serum/anchor");

const main = async () => {
  console.log("Starting Test...");

  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.Testprogram;
  const tx = await program.rpc.testFunction();

  console.log("Txn Signature: ", tx);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);

  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

runMain();


// describe("test-program", () => {
//   // Configure the client to use the local cluster.
//   anchor.setProvider(anchor.AnchorProvider.env());

//   const program = anchor.workspace.TestProgram as Program<TestProgram>;

//   it("Is initialized!", async () => {
//     // Add your test here.
//     const tx = await program.methods.initialize().rpc();
//     console.log("Your transaction signature", tx);
//   });
// });

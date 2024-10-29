import { createKeypairs } from "./src/createKeys";
import { buyBundle } from "./src/jitoPool";
import { sender } from "./src/senderUI";
import { sellXPercentagePF } from "./src/sellFunc";
import promptSync from "prompt-sync";

const prompt = promptSync();

async function main() {
  let running = true;

  while (running) {
    console.log("1. Create Keypairs");
    console.log("2. Pre Launch Checklist");
    console.log("3. Create Pool Bundle");
    console.log("4. Sell % of Supply on Pump.Fun");
    console.log("Type 'exit' to quit.");

    const answer = prompt("Choose an option or 'exit': "); // Use prompt-sync for user input

    switch (answer) {
      case "1":
        await createKeypairs();
        break;
      case "2":
        await sender();
        break;
      case "3":
        await buyBundle();
        break;
      case "4":
        await sellXPercentagePF();
        break;
      case "exit":
        running = false;
        break;
      default:
        console.log("Invalid option, please choose again.");
    }
  }

  console.log("Exiting...");
  process.exit(0);
}

main().catch((err) => {
  console.error("Error:", err);
});

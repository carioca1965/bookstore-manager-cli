import { connectDatabase } from "./config/database";
import { ClientController } from "./controllers/ClientController";

async function main() {
  console.log("=======================================");
  console.log("      BOOKSTORE MANAGER CLI");
  console.log("=======================================");

  await connectDatabase();

  const clientController = new ClientController();

await clientController.delete(1);
await clientController.findAll();
    
}


main();

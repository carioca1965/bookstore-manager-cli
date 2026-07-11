import { connectDatabase } from "./config/database";
import { AuthorController } from "./controllers/AuthorController";

async function main() {
  console.log("=======================================");
  console.log("      BOOKSTORE MANAGER CLI");
  console.log("=======================================");

  await connectDatabase();

  const authorController = new AuthorController();

  await authorController.create({
    name: "Carlos Eduardo",
    nationality: "Brasileiro",
  });
}

main();
import { connectDatabase } from "./config/database";
import { BookController } from "./controllers/BookController";

async function main() {
  console.log("=======================================");
  console.log("      BOOKSTORE MANAGER CLI");
  console.log("=======================================");

  await connectDatabase();

  const bookController = new BookController();

  await bookController.delete(1);
  await bookController.findAll();
  
}

main();
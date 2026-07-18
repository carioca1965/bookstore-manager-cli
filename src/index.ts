import { connectDatabase } from "./config/database";
import { LoanController } from "./controllers/LoanController";

async function main() {
  console.log("=======================================");
  console.log("      BOOKSTORE MANAGER CLI");
  console.log("=======================================");

  await connectDatabase();

  const loanController = new LoanController();

  await loanController.returnLoan(5);
}

main();
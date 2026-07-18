import { connectDatabase } from "./config/database";
import { LoanController } from "./controllers/LoanController";

async function main() {
  console.log("=======================================");
  console.log("      BOOKSTORE MANAGER CLI");
  console.log("=======================================");

  await connectDatabase();

  const loanController = new LoanController();

  await loanController.create({
    client_id: 2,
    book_id: 2,
    loan_date: new Date(),
    return_date: null
  });
}

main();
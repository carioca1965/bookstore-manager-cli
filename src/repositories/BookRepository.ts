import { pool } from "../config/database";
import { Book } from "../entities/Book";

export class BookRepository {

  async create(book: Book): Promise<Book> {
    const query = `
      INSERT INTO books (
        title,
        isbn,
        publication_year,
        author_id
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const values = [
      book.title,
      book.isbn,
      book.publication_year,
      book.author_id
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
  }

  async findAll(): Promise<Book[]> {
  const query = `
    SELECT *
    FROM books
    ORDER BY id;
  `;

  const result = await pool.query(query);

  return result.rows;
 }

async findById(id: number): Promise<Book | null> {
  const query = `
    SELECT *
    FROM books
    WHERE id = $1;
  `;

  const result = await pool.query(query, [id]);

  return result.rows[0] || null;
}

async update(id: number, book: Book): Promise<Book | null> {
  const query = `
    UPDATE books
    SET
      title = $1,
      isbn = $2,
      publication_year = $3,
      author_id = $4
    WHERE id = $5
    RETURNING *;
  `;

  const values = [
    book.title,
    book.isbn,
    book.publication_year,
    book.author_id,
    id
  ];

  const result = await pool.query(query, values);

  return result.rows[0] || null;
 }

 async delete(id: number): Promise<boolean> {
  const query = `
    DELETE FROM books
    WHERE id = $1
    RETURNING *;
  `;

  const result = await pool.query(query, [id]);

  return result.rowCount !== null && result.rowCount > 0;
}

}

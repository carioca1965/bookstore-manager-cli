import { pool } from "../config/database";
import { Author } from "../entities/Author";

export class AuthorRepository {

  async create(author: Author): Promise<Author> {
    const query = `
      INSERT INTO authors (name, nationality)
      VALUES ($1, $2)
      RETURNING *;
    `;

    const values = [
      author.name,
      author.nationality
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
  }

}

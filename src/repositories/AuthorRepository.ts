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

    async findAll(): Promise<Author[]> {
    const query = `
      SELECT *
      FROM authors
      ORDER BY id;
    `;

    const result = await pool.query(query);

    return result.rows;
  }

  async findById(id: number): Promise<Author | null> {
  const query = `
    SELECT *
    FROM authors
    WHERE id = $1;
  `;

  const result = await pool.query(query, [id]);

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0];
}

async update(id: number, author: Author): Promise<Author | null> {
  const query = `
    UPDATE authors
    SET
      name = $1,
      nationality = $2
    WHERE id = $3
    RETURNING *;
  `;

  const values = [
    author.name,
    author.nationality,
    id
  ];

  const result = await pool.query(query, values);

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0];
}

async delete(id: number): Promise<boolean> {
  const query = `
    DELETE FROM authors
    WHERE id = $1
    RETURNING id;
  `;

  const result = await pool.query(query, [id]);

  return result.rows.length > 0;
}


}

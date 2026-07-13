import { pool } from "../config/database";
import { Client } from "../entities/Client";

export class ClientRepository {

  async create(client: Client): Promise<Client> {
    const query = `
      INSERT INTO clients (
        name,
        email,
        phone
      )
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const values = [
      client.name,
      client.email,
      client.phone
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
  }

  async findAll(): Promise<Client[]> {
  const query = `
    SELECT *
    FROM clients
    ORDER BY id;
  `;

  const result = await pool.query(query);

  return result.rows;

 }

 async findById(id: number): Promise<Client | null> {
  const query = `
    SELECT *
    FROM clients
    WHERE id = $1;
  `;

  const result = await pool.query(query, [id]);

  return result.rows[0] || null;

 }

 async update(id: number, client: Client): Promise<Client | null> {
  const query = `
    UPDATE clients
    SET
      name = $1,
      email = $2,
      phone = $3
    WHERE id = $4
    RETURNING *;
  `;

  const values = [
    client.name,
    client.email,
    client.phone,
    id
  ];

  const result = await pool.query(query, values);

  return result.rows[0] || null;
 }

 async delete(id: number): Promise<boolean> {
  const query = `
    DELETE FROM clients
    WHERE id = $1
    RETURNING *;
  `;

  const result = await pool.query(query, [id]);

  return result.rowCount !== null && result.rowCount > 0;
 }

}


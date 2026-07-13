import { ClientRepository } from "../repositories/ClientRepository";
import { Client } from "../entities/Client";

export class ClientService {
  private repository = new ClientRepository();

  async create(client: Client): Promise<Client> {
    if (!client.name.trim()) {
      throw new Error("O nome do cliente é obrigatório.");
    }

    if (!client.email.trim()) {
      throw new Error("O e-mail é obrigatório.");
    }

    if (!client.phone.trim()) {
      throw new Error("O telefone é obrigatório.");
    }

    return await this.repository.create(client);
  }

  async findAll(): Promise<Client[]> {
  return await this.repository.findAll();
 }
  async findById(id: number): Promise<Client | null> {
  return await this.repository.findById(id);

 }

 
 async update(id: number, client: Client): Promise<Client | null> {
  return await this.repository.update(id, client);
 }

 async delete(id: number): Promise<boolean> {
  return await this.repository.delete(id);
 }
 

}

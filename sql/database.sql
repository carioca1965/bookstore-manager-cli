-- ============================================
-- BOOKSTORE MANAGER CLI
-- Script de criação do banco de dados
-- ============================================

DROP TABLE IF EXISTS loans;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS authors;

-- ============================================
-- Tabela de Autores
-- ============================================

CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    nationality VARCHAR(100),
    birth_date DATE
);

-- ============================================
-- Tabela de Livros
-- ============================================

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    isbn VARCHAR(20) UNIQUE NOT NULL,
    publication_year INT,
    quantity INT NOT NULL DEFAULT 0,
    author_id INT NOT NULL,
    CONSTRAINT fk_books_author
        FOREIGN KEY (author_id)
        REFERENCES authors(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

-- ============================================
-- Tabela de Clientes
-- ============================================

CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(20)
);

-- ============================================
-- Tabela de Empréstimos
-- ============================================

CREATE TABLE loans (
    id SERIAL PRIMARY KEY,
    book_id INT NOT NULL,
    client_id INT NOT NULL,
    loan_date DATE NOT NULL,
    return_date DATE,
    status VARCHAR(20) DEFAULT 'EMPRESTADO',

    CONSTRAINT fk_loans_book
        FOREIGN KEY (book_id)
        REFERENCES books(id),

    CONSTRAINT fk_loans_client
        FOREIGN KEY (client_id)
        REFERENCES clients(id)
);

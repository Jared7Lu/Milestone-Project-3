CREATE DATABASE userAccounts;

CREATE TABLE accounts(
    account_id SERIAL PRIMARY KEY,
    user_name VARCHAR (30) UNIQUE NOT NULL,
    pass_word VARCHAR (30) UNIQUE NOT NULL
);
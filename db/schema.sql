DROP SCHEMA IF EXISTS burger_db;
CREATE SCHEMA burger_db;

SET search_path TO burger_db;


CREATE TABLE burgers (
    id  SERIAL PRIMARY KEY
    burger_name VARCHAR(255),
    devoured BOOLEAN NOT NULL
)



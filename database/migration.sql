DROP TABLE IF EXISTS genres CASCADE;
DROP TABLE IF EXISTS records CASCADE;

CREATE TABLE genres(
    id serial PRIMARY KEY,
    genreName varchar(50) NOT NULL
);

CREATE TABLE records (
    id serial PRIMARY KEY,
    recordName varchar(100) NOT NULL,
    artist varchar(100) NOT NULL,
    genre_id integer REFERENCES genres(id)
);
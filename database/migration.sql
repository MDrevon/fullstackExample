DROP TABLE IF EXISTS records;
CREATE TABLE records (
    id serial PRIMARY KEY,
    recordName varchar(100) NOT NULL,
    artist varchar(100) NOT NULL,
    genre varchar(50)
);
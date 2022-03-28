DROP DATABASE IF EXISTS coffee;
CREATE DATABASE coffee;

\c coffee

CREATE TABLE IF NOT EXISTS suppliers (
  id varchar(32) NOT NULL,
  name varchar(128) NOT NULL,

  PRIMARY KEY (id)
);

INSERT INTO suppliers 
(
  id,
  name
) VALUES 
(
  'green-coffee-co',
  'The Green Coffee Company'
),
(
  'organic-capsules-co',
  'Organic Capsules'
),
(
  'we-love-coffee',
  'We <3 Coffee'
)
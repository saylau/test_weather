DROP DATABASE IF EXISTS weather_db;
CREATE DATABASE weather_db;

\c weather_db;

CREATE TABLE cities (
  ID SERIAL PRIMARY KEY,
  name VARCHAR
);

CREATE TABLE weather (
  ID SERIAL PRIMARY KEY,
  city_id INTEGER,
  temperature FLOAT,
  measured_at DATE,
  FOREIGN KEY (city_id) REFERENCES cities(ID)
);


INSERT INTO cities (name)
  VALUES ('Astana');

INSERT INTO weather (city_id, temperature, measured_at)
  VALUES (1, 23, '2020-09-23'),
         (1, 21, '2020-09-22'),
         (1, 25, '2020-09-21'),
         (1, 24, '2020-09-20'),
         (1, 22, '2020-09-19'),
         (1, 23, '2020-09-18'),
         (1, 22, '2020-09-17'),
         (1, 27, '2020-09-16'),
         (1, 28, '2020-09-15'),
         (1, 25, '2020-09-14'),
         (1, 22, '2020-09-13');
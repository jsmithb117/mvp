
DROP DATABASE IF EXISTS chickintender;
CREATE DATABASE chickintender;

USE chickintender;
-- TRUNCATE TABLE IF EXISTS restaurants;
-- TRUNCATE TABLE IF EXISTS users;
-- TRUNCATE TABLE IF EXISTS matches;


CREATE TABLE IF NOT EXISTS restaurants (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL UNIQUE,
  type VARCHAR(255),
  location INT NOT NULL,
  price INT NOT NULL,
  monday_open INT,
  monday_close INT,
  tuesday_open INT,
  tuesday_close INT,
  wednesday_open INT,
  wednesday_close INT,
  thursday_open INT,
  thursday_close INT,
  friday_open INT,
  friday_close INT,
  saturday_open INT,
  saturday_close INT,
  sunday_open INT,
  sunday_close INT,
  image VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  pword VARCHAR(255),
  matches VARCHAR(255),
  sitecode VARCHAR(4)
);

CREATE TABLE IF NOT EXISTS matches (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user1 INT,
  user2 INT,
  matches INT,
  FOREIGN KEY (user1) REFERENCES users(id)
  ON DELETE CASCADE,
  FOREIGN KEY (user2) REFERENCES users(id)
  ON DELETE CASCADE,
  FOREIGN KEY (matches) REFERENCES restaurants(id)
  ON DELETE CASCADE
);

INSERT INTO users (username, pword) VALUES ('user1', 'password');
INSERT INTO users (username, pword) VALUES ('user2', 'password');
insert into restaurants
values (1, 'Casa Grande', 'Mexican', 89523, 1, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 'casaGrande');
insert into restaurants
values (2, "Miguel's Mexican", "Mexican", 89523, 1, 2400, 2400, 1100, 2030, 1100, 2030, 1100, 2030, 1100, 2030, 1100, 2030, 2400, 2400, "miguel");
insert into restaurants
values (3, "Los Compadres", "Mexican", 89523, 1, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, "compadres");
insert into restaurants
values (4, "Kei Sushi Reno", "Sushi", 89523, 1, 2400, 2400, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 2400, 2400, "keisushi");
insert into restaurants
values (5, "Ijii 2", "Sushi", 89523, 1, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, "ijii2");
insert into restaurants
values (6, "Sushimi's", "Sushi", 89523, 1, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, "sushimis");
insert into restaurants
values (7, "Juicy's Giant Hamburgers", "Burger", 89523, 1, 1030, 2100, 1030, 2100, 1030, 2100, 1030, 2100, 1030, 2100, 1100, 2000, 1100, 2100, "juicy");
insert into restaurants
values (8, "Beefy's", "Burger", 89523, 1, 1100, 1900, 1100, 1900, 1100, 1900, 1000, 2000, 1000, 2000, 1000, 2000, 2400, 2400, "beefy");
insert into restaurants
values (9, "Lucky Beaver", "Burger", 89523, 1, 0000, 2400, 0000, 2400, 0000, 2400, 0000, 2400, 0000, 2400, 0000, 2400, 0000, 2400, "lucky");
insert into restaurants
values (10, "La Cucina", "Italian", 89523, 1, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, "cuchina");
insert into restaurants
values (11, "Johnny's Ristorante Italiano", "Italian", 89523, 3, 2400, 0000, 1700, 2100, 1700, 2100, 1700, 2100, 1700, 2100, 1700, 2100, 1700, 2100, "beefy");
insert into restaurants
values (12, "Mario's Portofino Ristorante", "Italian", 89523, 1, 1630, 2100, 1630, 2100, 1630, 2100, 1630, 2100, 1630, 2100, 1630, 2100, 1630, 2100, "lucky");
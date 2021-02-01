CREATE DATABASE IF NOT EXISTS chickintender;

USE chickintender;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255),
  PRIMARY KEY (id)
);

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

insert into restaurants
values (1, 'Casa Grande', 'Mexican', 89523, 1, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, './images/casaGrande.jpg');

insert into restaurants
values (2, "Miguel's Mexican", "Mexican", 89523, 2, 2400, 2400, 1100, 2030, 1100, 2030, 1100, 2030, 1100, 2030, 1100, 2030, 2400, 2400, "./images/miguel.jpg");

insert into restaurants
values (3, "Los Compadres", "Mexican", 89523, 2, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, "./images/compadres.jpg");

insert into restaurants
values (4, "Kei Sushi Reno", "Sushi", 89523, 2, 2400, 2400, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 2400, 2400, "./images/keisushi.jpg");

insert into restaurants
values (5, "Ijii 2", "Sushi", 89523, 2, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, "./images/ijii2.jpg");

insert into restaurants
values (6, "Sushimi's", "Sushi", 89523, 2, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, 1100, 2200, "./images/sushimis.jpg");

insert into restaurants
values (7, "Juicy's Giant Hamburgers", "Burger", 89523, 2, 1030, 2100, 1030, 2100, 1030, 2100, 1030, 2100, 1030, 2100, 1100, 2000, 1100, 2100, "./images/juicy.jpg");

insert into restaurants
values (8, "Beefy's", "Burger", 89523, 1, 1100, 1900, 1100, 1900, 1100, 1900, 1000, 2000, 1000, 2000, 1000, 2000, 2400, 2400, "./images/beefy.jpg");

insert into restaurants
values (9, "Lucky Beaver", "Burger", 89523, 2, 0000, 2400, 0000, 2400, 0000, 2400, 0000, 2400, 0000, 2400, 0000, 2400, 0000, 2400, "./images/lucky.jpg");

insert into restaurants
values (10, "La Cucina", "Burger", 89523, 2, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, 1100, 2100, "./images/cuchina.jpg");

insert into restaurants
values (11, "Johnny's Ristorante Italiano", "Burger", 89523, 3, 2400, 0000, 1700, 2100, 1700, 2100, 1700, 2100, 1700, 2100, 1700, 2100, 1700, 2100, "./images/beefy.jpg");

insert into restaurants
values (12, "Mario's Portofino Ristorante", "Burger", 89523, 2, 1630, 2100, 1630, 2100, 1630, 2100, 1630, 2100, 1630, 2100, 1630, 2100, 1630, 2100, "./images/lucky.jpg");
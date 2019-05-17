BEGIN;

DROP TABLE IF EXISTS  users, communities, dishes, transactions CASCADE;
DROP TYPE IF EXISTS transaction_category CASCADE;

CREATE TYPE transaction_category AS ENUM ('claim', 'dish');

CREATE TABLE users (
userID SERIAL PRIMARY KEY,
username VARCHAR(64) NOT NULL,
password VARCHAR(64) NOT NULL,
email VARCHAR(64) NOT NULL,
image TEXT NOT NULL,
location VARCHAR(64) NOT NULL
);

CREATE TABLE communities (
communityID SERIAL PRIMARY KEY,
adminID INT,
name VARCHAR(64) NOT NULL,
location VARCHAR(64) NOT NULL,
description VARCHAR(64) NOT NULL,
image TEXT NOT NULL,
CONSTRAINT adminID FOREIGN KEY (adminID) REFERENCES users (userID)
);

CREATE TABLE dishes (
dishID SERIAL PRIMARY KEY,
creatorID INT,
communityID INT,
name VARCHAR(64) NOT NULL,
teaser VARCHAR(64) NOT NULL,
description VARCHAR(64) NOT NULL,
portions INT NOT NULL,
portions_remaining INT NOT NULL,
date_cooked DATE NOT NULL,
collection_time VARCHAR(64) NOT NULL,
collection_location VARCHAR(64) NOT NULL,
spiciness INT NOT NULL,
vegetarian bool DEFAULT '0',
vegan bool DEFAULT '0',
glutenFree bool DEFAULT '0',
nuts bool DEFAULT '0',
dairy bool DEFAULT '0',
halal bool DEFAULT '0',
kosher bool DEFAULT '0',
shellfish bool DEFAULT '0',
image TEXT NOT NULL,
CONSTRAINT creatorID FOREIGN KEY (creatorID) REFERENCES users (userID),
CONSTRAINT communityID FOREIGN KEY (communityID) REFERENCES communities (communityID)
);

CREATE TABLE transactions (
transactionID SERIAL PRIMARY KEY,
category transaction_category,
userID INT,
communityID INT,
dishID INT,
CONSTRAINT userID FOREIGN KEY (userID) REFERENCES users (userID),
CONSTRAINT communityID FOREIGN KEY (communityID) REFERENCES communities (communityID),
CONSTRAINT dishID FOREIGN KEY (dishID) REFERENCES dishes (dishID)
);

INSERT INTO users (username, password, email, image, location) VALUES ('Sandra', 'ilovestrawberries', 'sandra@email.com', 'https://giphy.com/gifs/fjxNNYg8HEiKORTaqF', 'Tufnell Park'),
('Bobby', 'yee', 'bobby@yee.com', 'https://gph.is/11VjpH4', 'Manor House');

INSERT INTO communities (adminID, name, location, description, image) VALUES (2, 'Space4', 'Finsbury Park', 'A frindly co-working community', 'https://gph.is/2bcGfQj');

INSERT INTO dishes (creatorID, communityID, name, teaser, description, portions, portions_remaining, date_cooked, collection_time, collection_location, spiciness, vegetarian, glutenFree, nuts, dairy, halal, kosher, shellfish, image) VALUES
(1, 1, 'Burrito', 'Tastiness in a roll', 'Delicious, delicious things like avocado and cheese.', 2, 2, '2019-05-15', '1pm', 'Space4 fridge', '3', '1', '0', '0', '1', '0', '0', '0', 'https://bit.ly/30j0J3G');

COMMIT;

BEGIN;

DROP TABLE IF EXISTS  users, communities, dishes, transactions CASCADE; 
DROP TYPE IF EXISTS transaction_category CASCADE;

CREATE TYPE transaction_category AS ENUM ('claim', 'dish');


CREATE TABLE users (
userID SERIAL PRIMARY KEY,
username VARCHAR(64) NOT NULL,
password VARCHAR(64) NOT NULL,
email VARCHAR(64) NOT NULL,
image VARCHAR(64) NOT NULL,
location VARCHAR(64) NOT NULL
);

CREATE TABLE communities (
communityID SERIAL PRIMARY KEY,
adminID INT,
name VARCHAR(64) NOT NULL,
location VARCHAR(64) NOT NULL,
description VARCHAR(64) NOT NULL,
image VARCHAR(64) NOT NULL,
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
time_cooked VARCHAR(64) NOT NULL,
collection_time VARCHAR(64) NOT NULL,
collection_location VARCHAR(64) NOT NULL,
vegetarian bool,
vegan bool,
gf bool,
nuts bool,
dairy bool,
halal bool,
kosher bool,
shellfish bool,
image VARCHAR(64) NOT NULL,
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

COMMIT;
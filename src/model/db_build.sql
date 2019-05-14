BEGIN;

DROP TABLE IF EXSISTS  users, communities, dishes, transactions CASCADE; 


CREATE TABLE users (
-
userID SERIAL PRIMARY KEY,
username VARCHAR(64) NOT NULL,
password VARCHAR(64) NOT NULL,
email VARCHAR(64) NOT NULL,
image VARCHAR(64) NOT NULL,
location VARCHAR(64) NOT NULL

);

CREATE TABLE communities (
-
communityID SERIAL PRIMARY KEY,
adminID INT,
name VARCHAR(64) NOT NULL,
location VARCHAR(64) NOT NULL,
description VARCHAR(64) NOT NULL,
image VARCHAR(64) NOT NULL
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
image VARCHAR(64) NOT NULL
);

CREATE TABLE transactions (
transactionID SERIAL PRIMARY KEY,
type ENUM( 'claim' , 'dish'),
userID INT,
communityID INT,
dishID INT
);

ALTER TABLE communities ADD CONSTRAINTS fk_communities_adminID FOREIGN KEY (adminID)
REFERENCES users (userID); 

ALTER TABLE dishes ADD CONSTRAINTS fk_dishes_adminID FOREIGN KEY (adminID)
REFERENCES users (userID); 

ALTER TABLE dishes ADD CONSTRAINTS fk_dishes_communityID FOREIGN KEY (communityID)
REFERENCES  communities ( communityID); 

ALTER TABLE transactions ADD CONSTRAINTS fk_transactions_userID FOREIGN KEY (userID)
REFERENCES users (userID); 

ALTER TABLE transactions ADD CONSTRAINTS fk_transactions_communityID FOREIGN KEY (communityID)
REFERENCES communities ( communityID); 

ALTER TABLE transactions ADD CONSTRAINTS fk_transactions_dishID FOREIGN KEY (dishID)
REFERENCES dishes (dishID); 

COMMIT;
USE nodedb;

CREATE TABLE IF NOT EXISTS people (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
);
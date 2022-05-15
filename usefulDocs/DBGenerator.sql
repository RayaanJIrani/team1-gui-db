CREATE DATABASE db;

CREATE TABLE db.users(
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    salt VARCHAR(255),
    bio VARCHAR(10000),
    imgurl VARCHAR(1000),
    location VARCHAR(500),
    minKidAge INT,
    maxKidAge INT,
    startWorkTime time,
    endWorkTime time,
    PRIMARY KEY(id)
);


CREATE TABLE db.sitter(
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    salt VARCHAR(255),
    location VARCHAR(255),
    price INT,
    age INT,
    experience VARCHAR(10000),
    imgurl VARCHAR(1000),
    PRIMARY KEY (id)
);



CREATE TABLE db.block(
    id INT NOT NULL AUTO_INCREMENT,
    sitter_id INT,
    parent_id INT,
    FOREIGN KEY (sitter_id) REFERENCES sitter(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_id) REFERENCES users(id) ON DELETE CASCADE,
    PRIMARY KEY(id)
);


CREATE TABLE db.rate_parent(
  id INT NOT NULL AUTO_INCREMENT,
  parent_id INT,
  sitter_id INT,
  rating INT,
  comment VARCHAR(10000),
  time_stamp datetime,
  PRIMARY KEY(id),
  FOREIGN KEY (parent_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (sitter_id) REFERENCES sitter(id) ON DELETE CASCADE
);

CREATE TABLE db.rate_sitter(
  id INT NOT NULL AUTO_INCREMENT,
  parent_id INT,
  sitter_id INT,
  rating INT,
  comment VARCHAR(10000),
  time_stamp datetime,
  PRIMARY KEY(id),
  FOREIGN KEY (parent_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (sitter_id) REFERENCES sitter(id) ON DELETE CASCADE
);


CREATE TABLE db.parent_schedule(
  id INT NOT NULL AUTO_INCREMENT,
  parent_id INT,
  event_description VARCHAR(10000),
  start_time datetime,
  end_time datetime,
  PRIMARY KEY(id),
  FOREIGN KEY (parent_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE db.sitter_schedule(
  id INT NOT NULL AUTO_INCREMENT,
  sitter_id INT,
  start_time datetime,
  end_time datetime,
  PRIMARY KEY(id),
  FOREIGN KEY (sitter_id) REFERENCES sitter(id) ON DELETE CASCADE
);

CREATE TABLE db.message(
  id INT NOT NULL AUTO_INCREMENT,
  parent_id INT,
  sitter_id INT,
  message VARCHAR(10000),
  urgency INT,
  timestamp datetime,
  PRIMARY KEY(id),
  FOREIGN KEY (parent_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (sitter_id) REFERENCES sitter(id) ON DELETE CASCADE
);

CREATE TABLE db.job(
  id INT NOT NULL AUTO_INCREMENT,
  parent_id INT,
  sitter_id INT,
  start_time datetime,
  end_time datetime,
  PRIMARY KEY(id),
  FOREIGN KEY (parent_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (sitter_id) REFERENCES sitter(id) ON DELETE CASCADE
);


-- CREATE TABLE IF NOT EXISTS users
-- (
--     id VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     username VARCHAR(255) NOT NULL,
--     hash VARCHAR(255) NOT NULL,

--     PRIMARY KEY(id)
-- );

-- CREATE TABLE IF NOT EXISTS questions
-- (
--     id VARCHAR(255) NOT NULL,
--     title VARCHAR(255),
--     body VARCHAR(255),
--     authorid VARCHAR(255) NOT NULL,
--     answerid VARCHAR(255),
--     deleted TINYINT DEFAULT 0,
--     questionadded DATETIME,
--     questiondeletedat DATETIME,

--         FOREIGN KEY (authorid) 
--         REFERENCES users(id),

--         PRIMARY KEY(id)
-- );

-- CREATE TABLE IF NOT EXISTS responses
-- (
--     id VARCHAR(255) NOT NULL,
--     body VARCHAR(255),
--     questionid VARCHAR(255),
--     authorid VARCHAR(255) NOT NULL,
--     answered TINYINT DEFAULT 0,
--     responseadded DATETIME,

--     FOREIGN KEY (authorid)
--         REFERENCES users(id),
--     FOREIGN KEY (questionid)
--         REFERENCES questions(id),

--     PRIMARY KEY(id)
-- );

-- CREATE TABLE IF NOT EXISTS categories
-- (
--     id VARCHAR(255) NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     addedtoquestion TINYINT DEFAULT 0,
--     datecatadded DATETIME,
--     catdeletedat DATETIME,
    
--     PRIMARY KEY(id)

-- );

-- CREATE TABLE IF NOT EXISTS tag_items
-- (
--     id VARCHAR(255) NOT NULL,
--     questionid VARCHAR(255) NOT NULL,
--     categoryid VARCHAR(255) NOT NULL,
--     addedtoquestion TINYINT DEFAULT 0,

--     FOREIGN KEY (questionid)
--         REFERENCES questions(id),
--     FOREIGN KEY (categoryid)
--         REFERENCES categories(id),
    
--     PRIMARY KEY(id)

-- );

-- DROP TABLE users;
-- DROP TABLE questions;
-- DROP TABLE responses;
-- DROP TABLE categories;
-- DROP TABLE tag_items

-- ALTER questions
-- CHANGE `title` 'title' VARCHAR(255);
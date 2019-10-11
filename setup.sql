CREATE TABLE users(
    id VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL,
    hash VARCHAR(255) NOT NULL,

    PRIMARY KEY(id)
)

CREATE TABLE questions(
    id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    body VARCHAR(255),
    authorid VARCHAR(255) NOT NULL,
    answerid VARCHAR(255) NOT NULL,

    PRIMARY KEY(id)
)

CREATE TABLE reponses(
    id VARCHAR(255) NOT NULL,
    body VARCHAR(255),
    questionid VARCHAR(255) NOT NULL,
    authorid VARCHAR(255) NOT NULL,

    PRIMARY KEY(id)
)

CREATE TABLE categories(
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,

    PRIMARY KEY(id)
)


CREATE DATABASE MessageBase;

USE MessageBase;

CREATE TABLE
    `Messages` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(100) NOT NULL,
        `email` VARCHAR(255) NOT NULL,
        `message` TEXT NOT NULL,
        PRIMARY KEY (`id`)
    );
-- Create the database if it does not exist
CREATE DATABASE IF NOT EXISTS peopledb;

-- Use the peopledb database
USE peopledb;

-- Create the 'people' table if it does not exist
CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

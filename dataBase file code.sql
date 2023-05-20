CREATE DATABASE calculation;
USE calculation;

CREATE TABLE student (
	ID int,
    name varchar(255),
    calculation varchar(255),
    result int
);

USE calculation;
INSERT INTO student(ID, name, calculation,result)
VALUES (1, "Sum","5 + 9",14),
	   (2, "Divide ","8 / 2",4),
       (3, "Subtraction","15 - 9",6),
       (4, "Multiply ","2 + 5",10);

INSERT INTO student(ID, name, calculation,result)
VALUES (3, "Sum","5 + 9",14);

USE calculation;
SELECT * FROM student;


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Chitresh79@';
flush privileges;
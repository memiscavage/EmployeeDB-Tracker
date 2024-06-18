DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db

USE employee_db

-- needs id and name --
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL,
);

-- needs id, title, salary, department id --
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
-- to pull the department id --
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);
 
-- needs id, first name, last name, role id, manager id --
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
-- to pull the role id --
    FOREIGN KEY (role_id)
    REFERENCES role(id)
)
INSERT INTO department (id, department_name)
VALUES (1, "Executive").
    (2, "Human Resources"),
    (3, "IT"),
    (4, "Administrative")

INSERT INTO role (id, title, salary, department_id)
VALUES (011, "CEO", 600000.00, 1),
    (021, "HR Representative", 65000.00, 2),
    (031, "Client Support", 68000.00, 3),
    (041, "Clerk", 49000, 4),

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (0001, "Bob", "Belcher", 011, NULL),
    (0002, "Linda", "Belcher", 021, 0001),
    (0003, "Jimmy", "Pesto", 031, 0002),
    (0004, "RegularSized", "Rudy", 041, 0002),
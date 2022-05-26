INSERT INTO departments(dept_name)
VALUES
    ('Legal'),
    ('Sales'),
    ('Administration'),
    ('Custodial'),
    ('Engineering');

INSERT INTO roles(job_title, salary, dept_id)
VALUES
    ('Lawyer', 90000, 1),
    ('Senior Lawyer', 150000, 1),
    ('Salesperson', 70000, 2),
    ('Head of Sales', 85000, 2),
    ('CEO', 280000, 3),
    ('CFO', 240000, 3),
    ('Janitor', 50000, 4),
    ('Senior Engineer', 160000, 5),
    ('Engineer', 110000, 5);

INSERT INTO employees(first_name, last_name, role_id, manager)
VALUES
    ('Jack', 'Johnson', 1, 'Jim Halpert'),
    ('Jim', 'Halpert', 2, 'Bob Baker'),
    ('Cole', 'Simpson', 3, 'Barry Bonds'),
    ('Barry', 'Bonds', 4, 'Tommy John'),
    ('Bob', 'Baker', 5, NULL),
    ('Tommy', 'John', 6, NULL),
    ('Tim', 'Smith', 7, 'Bob Baker'),
    ('Sarah', 'Silver', 8, 'Bob Baker'),
    ('Heath', 'Ledger', 9, 'Sarah Silver');
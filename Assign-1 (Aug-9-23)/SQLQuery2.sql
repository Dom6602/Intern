CREATE TABLE students_registration (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(30),
    Email VARCHAR(20),
    Phone_no VARCHAR(10),
    Address VARCHAR(70),
    Department VARCHAR(25)
);

SELECT * FROM students_registration

INSERT INTO students_registration (Name, Email, Phone_no, Address, Department)
values ('John Doe', 'john@example.com', 1234567890, '123 Main St', 'Computer Science'),
        ('Jane Smith', 'jane@example.com', 9876543210, '456 Elm St', 'Engineering'),
        ('Michael Johnson', 'michael@example.com', 5555555555, '789 Oak St', 'Mathematics'),
        ('Emily Brown', 'emily@example.com', 1112223333, '321 Pine St', 'Biology'),
        ('Robert Davis', 'robert@example.com', 4443332222, '567 Maple St', 'Chemistry'),
        ('Sophia Wilson', 'sophia@example.com', 8889990000, '987 Birch St', 'Physics'),
        ('Daniel Miller', 'daniel@example.com', 7778889999, '654 Cedar St', 'History'),
        ('Olivia Martinez', 'olivia@example.com', 6667778888, '852 Walnut St', 'Art'),
        ('James Taylor', 'james@example.com', 1231231234, '369 Pine St', 'Music'),
        ('Ava Johnson', 'ava@example.com', 9879879876, '147 Oak St', 'Literature');

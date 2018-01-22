INSERT INTO Persons (FirstName, LastName) VALUES ('Markus', 'Sjöholm')
INSERT INTO Persons (FirstName, LastName) VALUES ('Magnus', 'Andersson')

INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight) VALUES (23.5, '2018-01-01', 23, 35, (select top 1 id from Persons where firstname = 'Markus'), 80 )
INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight) VALUES (23.5, '2018-01-10', 22, 36, (select top 1 id from Persons where firstname = 'Markus'), 79 )
INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight) VALUES (24, '2018-01-01', 25, 30, (select top 1 id from Persons where firstname = 'Magnus'), 85 )
INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight) VALUES (22, '2018-01-10', 20, 40, (select top 1 id from Persons where firstname = 'Magnus'), 75 )

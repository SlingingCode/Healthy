INSERT INTO Persons (FirstName, LastName) VALUES ('Markus', 'Sjöholm')
INSERT INTO Persons (FirstName, LastName) VALUES ('Magnus', 'Andersson')
INSERT INTO Persons (FirstName, LastName) VALUES ('Alice', 'Lagervik Öster')
INSERT INTO Persons (FirstName, LastName) VALUES ('Håkon', 'Jessen')
INSERT INTO Persons (FirstName, LastName) VALUES ('Nils', 'Berglund')
INSERT INTO Persons (FirstName, LastName) VALUES ('Elina', 'Mattila')

INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (23.5, '2018-01-01', 23, 35, (select top 1 id from Persons where firstname = 'Markus'), 80, 10)
INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (23.5, '2018-01-10', 22, 36, (select top 1 id from Persons where firstname = 'Markus'), 79, 10)
INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (24, '2018-01-01', 25, 30, (select top 1 id from Persons where firstname = 'Magnus'), 85, 10)
INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (22, '2018-01-10', 20, 40, (select top 1 id from Persons where firstname = 'Magnus'), 75, 10)

INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (21, '2018-01-11', 21, 41, (select top 1 id from Persons where firstname = 'Alice'), 71, 10)
INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (22, '2018-01-12', 22, 42, (select top 1 id from Persons where firstname = 'Håkon'), 72, 10)
INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (23, '2018-01-13', 23, 43, (select top 1 id from Persons where firstname = 'Nils'), 73, 10)
INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (24, '2018-01-14', 24, 44, (select top 1 id from Persons where firstname = 'Elina'), 74, 10)

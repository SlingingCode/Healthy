using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Healthy.API.Migrations
{
    public partial class SEED : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Persons (FirstName, LastName, ImageUrl, IsPublic, Motto) VALUES ('Markus', 'Sjöholm', 'http://www.viati.se/wp-content/uploads/2015/03/Markus-Sj%C3%B6lund_340x340.jpg', 0, 'Det borde heta Må sämre')");
            migrationBuilder.Sql("INSERT INTO Persons (FirstName, LastName, ImageUrl, IsPublic, Motto) VALUES ('Magnus', 'Andersson', 'http://www.viati.se/wp-content/uploads/2015/03/Magnus-Andersson_340x340.jpg', 0, 'Kör hårt!')");
            migrationBuilder.Sql("INSERT INTO Persons (FirstName, LastName, ImageUrl, IsPublic, Motto) VALUES ('Alice', 'Lagervik Öster', 'http://www.viati.se/wp-content/uploads/2016/11/Lagervik_Oster_Alice.jpg', 0, 'Kör hårt!')");
            migrationBuilder.Sql("INSERT INTO Persons (FirstName, LastName, ImageUrl, IsPublic, Motto) VALUES ('Nils', 'Berglund', 'http://www.viati.se/wp-content/uploads/2015/04/Nils.jpg', 0, 'Kör hårt!')");
            migrationBuilder.Sql("INSERT INTO Persons (FirstName, LastName, ImageUrl, IsPublic, Motto) VALUES ('Elina', 'Mattila', 'http://www.viati.se/wp-content/uploads/2016/09/Elina.jpg', 0, 'Kör hårt!')");
            migrationBuilder.Sql("INSERT INTO Persons (FirstName, LastName, ImageUrl, IsPublic, Motto) VALUES ('Håkon', 'Jessen', 'http://www.viati.se/wp-content/uploads/2017/08/Jessen-Hakon.jpg', 0, 'Kör hårt!')");
            
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (23.5, '2018-01-01', 23, 35, (select top 1 id from Persons where firstname = 'Markus'), 80, 10)");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (23.5, '2018-01-10', 22, 36, (select top 1 id from Persons where firstname = 'Markus'), 79, 10)");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (24, '2018-01-01', 25, 30, (select top 1 id from Persons where firstname = 'Magnus'), 85, 10)");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (22, '2018-01-10', 20, 40, (select top 1 id from Persons where firstname = 'Magnus'), 75, 10)");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (21, '2018-01-11', 21, 41, (select top 1 id from Persons where firstname = 'Alice'), 71, 10)");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (22, '2018-01-12', 22, 42, (select top 1 id from Persons where firstname = 'Alice'), 71, 10)");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (22, '2018-01-12', 22, 42, (select top 1 id from Persons where firstname = 'Håkon'), 72, 10)");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (23, '2018-01-13', 23, 43, (select top 1 id from Persons where firstname = 'Håkon'), 73, 10)");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (23, '2018-01-13', 23, 43, (select top 1 id from Persons where firstname = 'Nils'), 73, 10)");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (24, '2018-01-14', 24, 44, (select top 1 id from Persons where firstname = 'Nils'), 74, 10)");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (24, '2018-01-14', 24, 44, (select top 1 id from Persons where firstname = 'Elina'), 74, 10)");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight, PercentageFatViscal) VALUES (25, '2018-01-15', 25, 45, (select top 1 id from Persons where firstname = 'Elina'), 75, 10)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Persons where FirstName IN ('Markus', 'Magnus', 'Alice', 'Nils', 'Elina', 'Håkon')");
            // The rows in ScaleResults for the deleted Persons will be deleted automatically. 
        }
    }
}

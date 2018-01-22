using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Healthy.API.Migrations
{
    public partial class SEED : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Persons (FirstName, LastName) VALUES ('Markus', 'Sjöholm')");
            migrationBuilder.Sql("INSERT INTO Persons (FirstName, LastName) VALUES ('Magnus', 'Andersson')");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight) VALUES (23.5, '2018-01-01', 23, 35, (select top 1 id from Persons where firstname = 'Markus'), 80 )");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight) VALUES (23.5, '2018-01-10', 22, 36, (select top 1 id from Persons where firstname = 'Markus'), 79 )");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight) VALUES (24, '2018-01-01', 25, 30, (select top 1 id from Persons where firstname = 'Magnus'), 85 )");
            migrationBuilder.Sql("INSERT INTO ScaleResults (Bmi, Date, PercentageFat, PercentageMuscles, PersonId, Weight) VALUES (22, '2018-01-10', 20, 40, (select top 1 id from Persons where firstname = 'Magnus'), 75 )");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Persons where Name IN ('Markus', 'Magnus')");
            // The rows in ScaleResults for the deleted Persons will be deleted automatically. 
        }
    }
}

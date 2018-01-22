using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Healthy.API.Migrations
{
    public partial class AddedConstraints_ScaleResult : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ScaleResult_Persons_PersonId",
                table: "ScaleResult");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ScaleResult",
                table: "ScaleResult");

            migrationBuilder.RenameTable(
                name: "ScaleResult",
                newName: "ScaleResults");

            migrationBuilder.RenameIndex(
                name: "IX_ScaleResult_PersonId",
                table: "ScaleResults",
                newName: "IX_ScaleResults_PersonId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ScaleResults",
                table: "ScaleResults",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ScaleResults_Persons_PersonId",
                table: "ScaleResults",
                column: "PersonId",
                principalTable: "Persons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ScaleResults_Persons_PersonId",
                table: "ScaleResults");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ScaleResults",
                table: "ScaleResults");

            migrationBuilder.RenameTable(
                name: "ScaleResults",
                newName: "ScaleResult");

            migrationBuilder.RenameIndex(
                name: "IX_ScaleResults_PersonId",
                table: "ScaleResult",
                newName: "IX_ScaleResult_PersonId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ScaleResult",
                table: "ScaleResult",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ScaleResult_Persons_PersonId",
                table: "ScaleResult",
                column: "PersonId",
                principalTable: "Persons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

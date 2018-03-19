using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Healthy.API.Migrations
{
    public partial class Added_ViscalFat_To_ScaleResult : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "PercentageFatViscal",
                table: "ScaleResults",
                nullable: false,
                defaultValue: 0f);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PercentageFatViscal",
                table: "ScaleResults");
        }
    }
}

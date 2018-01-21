﻿// <auto-generated />
using Healthy.API.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Healthy.API.Migrations
{
    [DbContext(typeof(HealthyDbContext))]
    [Migration("20180120233348_InitialMigration-Person-ScaleResult")]
    partial class InitialMigrationPersonScaleResult
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Healthy.API.Models.Person", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.HasKey("Id");

                    b.ToTable("Persons");
                });

            modelBuilder.Entity("Healthy.API.Models.ScaleResult", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<float>("Bmi");

                    b.Property<DateTime>("Date");

                    b.Property<float>("PercentageFat");

                    b.Property<float>("PercentageMuscles");

                    b.Property<int>("PersonId");

                    b.Property<float>("Weight");

                    b.HasKey("Id");

                    b.HasIndex("PersonId");

                    b.ToTable("ScaleResult");
                });

            modelBuilder.Entity("Healthy.API.Models.ScaleResult", b =>
                {
                    b.HasOne("Healthy.API.Models.Person", "Person")
                        .WithMany("ScaleResults")
                        .HasForeignKey("PersonId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}

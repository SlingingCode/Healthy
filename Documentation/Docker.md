# Working with Docker

## Useful commands
Show **running containers**: `docker ps`    
Show all **previous containers**: `docker ps -a`    
**Stop Container** with CONTAINER ID starting with ab12: `docker stop ab12`        
**Run MSSQL** in a docker container: `docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=P@ssw0rd' -p 1433:1433 -d microsoft/mssql-server-linux`
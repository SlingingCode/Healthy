# SQL Server on Mac

### Download Docker
https://www.docker.com/community-edition#/download

### Increase memory
SQL server need 4gb memory. Increase memory from 2gb to 4gb in Docker by clicking `Docker -> Preferences -> Advanced` and drag the slider.
Restart Docker and make sure docker is running with command `docker` in terminal.

### Download SQL Server image
In terminal, enter command `docker pull microsoft/mssql-server-linux`.

### Run image inside container.
Map port 1433 in the container to port 1433 on the host machine.
Make sure the password is complex to avoid errormessage.
#### On Mac:
`docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=P@ssw0rd' -p 1433:1433 -d microsoft/mssql-server-linux`
#### On Linux
`docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=P@ssw0rd' -p 1433:1433 -v /user/my/db:var/opt/mssql`

## Go get a SQL Server visual tool
For example www.sqlprostudio.com
Yes, there is coupons. I used STACK25 for 25% off, worked today (2018-01-19). Google for alternatives if you like, this was the best I found, but I only spent 2min looking.

Fire up SQLPro Studio and do `Connect` and fill in servername `localhost`, chose to use `SQL Server authentication` and fill in `sa` and `P@ssw0rd` or whatever username and password you selected and hit Save.

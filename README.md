# NestJS Starter Template

## Usage

- Clone Repo
- Run Command
  - ```javascript
    git clone https://github.com/leyume/starter-template-nestjs.git
    ```
- Create environment variables with the sample env file given for the docker
- Create environment variables in the api folder
- Run ```docker-compose up```
- View - localhost:{PORT} e.g localhost:9123
- You can now start using your nestjs from here.

###  Running node/nestjs commands
- Enter docker container: docker exec -it {container_name} sh e.g ```docker exec -it codename_api sh```
- Run nest commands e.g ```npx nest g modules```

### Database Setup
- Prisma is used for database ORM.
- There are two schemas available. one for the app and one for test i.e schema_main.prisma and schema_test.prisma
- Ensure you have your DATABASE_URL env variable set up in your .env file inside api folder e.g for mysql, ```DATABASE_URL="mysql://user:password@codename_db/dbname"```
- Run this command inside the docker container:
   - ```npx prisma db pull --schema prisma/schema_main.prisma``` (if you have an existing database)
   - ```npx prisma db push --schema prisma/schema_main.prisma``` (if you are creating a new database, you need to create models based on your db requirements in your prisma schema)
   - then run ```npx prisma generate --schema prisma/schema_main.prisma```
  Same can be done to setup the test database.
- You can use Prisma Studio with this command: ```npx prisma studio --port 8777 --schema=./prisma/schema_main.prisma``` (port number should be the one registered in your docker-compose.yml)
- To view Prisma Studio- localhost:{PORT} e.g localhost:9124
- And that's it. Development can continue. All the best!

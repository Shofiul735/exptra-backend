import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const DBConfig : TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'exptra',
    synchronize: false,
    autoLoadEntities: true
}

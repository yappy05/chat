"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const ioredis_1 = require("ioredis");
const connect_redis_1 = require("connect-redis");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const redis = new ioredis_1.default('redis://default:pass123456@localhost:6380');
    app.enableCors({
        origin: 'http://localhost:5173',
        credentials: true,
    });
    app.use(session({
        secret: '123456',
        name: 'session',
        resave: true,
        saveUninitialized: false,
        cookie: {
            secure: false,
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 8600000,
        },
        store: new connect_redis_1.default({
            client: redis,
            prefix: 'session:',
        }),
    }));
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
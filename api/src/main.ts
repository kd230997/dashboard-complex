import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import * as dotenv from "dotenv";
import { ValidationPipe } from "@nestjs/common";

import { AppModule } from "./app.module";
import { ResponseInterceptor } from "@/src/common/interceptor/response.interceptor";
import { AllExceptionsFilter } from "@/src/common/filters/all-exceptions.filter";
import { CustomLogger } from "@/src/common/logger/custom-logger.service";

async function bootstrap() {
  dotenv.config();
  const version = process.env.VERSION || "";

  const app = await NestFactory.create(AppModule);

  // Global validation from DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips unknown properties
      forbidNonWhitelisted: true, // throws error if unknown props present
      transform: true, // auto-transform payloads to DTO instances
    }),
  );
  // apply global success interceptor
  app.useGlobalInterceptors(new ResponseInterceptor());
  // error wrapper
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useLogger(app.get(CustomLogger));

  // Add Swagger
  const config = new DocumentBuilder()
    .setTitle("My API")
    .setDescription("The full API docs swagger")
    .setVersion(version)
    .addBearerAuth(
      {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "Authorization",
        in: "header",
      },
      "access-token",
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

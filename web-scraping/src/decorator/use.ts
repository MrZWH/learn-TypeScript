import 'reflect-metadata';
import { RequestHandler } from 'express';
import { CrawlerController, LoginController } from '../controller';

export function use(middleware: RequestHandler) {
  return function (target: CrawlerController | LoginController, key: string) {
    Reflect.defineMetadata('middleware', middleware, target, key);
  };
}

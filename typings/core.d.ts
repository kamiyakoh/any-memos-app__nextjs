declare module 'cors' {
  import { RequestHandler } from 'express';

  function cors(options?: cors.CorsOptions): RequestHandler;

  export = cors;
}

import type BaseHttp from "./base-http.type.js";
import FastifyHttp from "./fastify-http-adapter.js";
import type HttpAdapterFactory from "./http-adapter-factory.js";


export default class FastifyFactory implements HttpAdapterFactory {

    makeHttpAdapter(): BaseHttp {
        return new FastifyHttp(); 
    }

}

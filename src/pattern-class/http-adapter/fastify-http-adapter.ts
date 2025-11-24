import type BaseHttp from "./base-http.type.js";

export default class FastifyHttpAdapter implements BaseHttp {

    async get(url: string, headers?: Record<string, string>): Promise<any> {
        // Implementation for GET request using Fastify
        return Promise.resolve(`GET request to ${url} with headers ${JSON.stringify(headers)} using Fastify`);
    }
    async post(url: string, body: any, headers?: Record<string, string>): Promise<any> {
        // Implementation for POST request using Fastify
        return Promise.resolve(`POST request to ${url} with body ${JSON.stringify(body)} and headers ${JSON.stringify(headers)} using Fastify`);
    }
    async put(url: string, body: any, headers?: Record<string, string>): Promise<any> {
        // Implementation for PUT request using Fastify
        return Promise.resolve(`PUT request to ${url} with body ${JSON.stringify(body)} and headers ${JSON.stringify(headers)} using Fastify`);
    }

    async delete(url: string, headers?: Record<string, string>): Promise<any> {
        // Implementation for DELETE request using Fastify
        return Promise.resolve(`DELETE request to ${url} with headers ${JSON.stringify(headers)} using Fastify`);
    }
}

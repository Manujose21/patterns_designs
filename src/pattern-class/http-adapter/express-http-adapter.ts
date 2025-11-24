import type BaseHttp from "./base-http.type.js";


export default class ExpressHttpAdapter implements BaseHttp {
    
    async get(url: string, headers?: Record<string, string>): Promise<any> {
        // Implementation for GET request using Express
        return Promise.resolve(`GET request to ${url} with headers ${JSON.stringify(headers)} using Express`);
    }

    async post(url: string, body: any, headers?: Record<string, string>): Promise<any> {
        // Implementation for POST request using Express
        return Promise.resolve(`POST request to ${url} with body ${JSON.stringify(body)} and headers ${JSON.stringify(headers)} using Express`);
    }

    async put(url: string, body: any, headers?: Record<string, string>): Promise<any> {
        // Implementation for PUT request using Express
        return Promise.resolve(`PUT request to ${url} with body ${JSON.stringify(body)} and headers ${JSON.stringify(headers)} using Express`);
    }

    async delete(url: string, headers?: Record<string, string>): Promise<any> {
        // Implementation for DELETE request using Express
        return Promise.resolve(`DELETE request to ${url} with headers ${JSON.stringify(headers)} using Express`);
    }

}

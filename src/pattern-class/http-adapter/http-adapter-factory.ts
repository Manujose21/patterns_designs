import type BaseHttp from "./base-http.type.js";

export default interface HttpAdapterFactory {

    makeHttpAdapter(): BaseHttp;

} 
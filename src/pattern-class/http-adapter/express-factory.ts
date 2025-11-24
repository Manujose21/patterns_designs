import type BaseHttp from "./base-http.type.js";
import ExpressHttpAdapter from "./express-http-adapter.js";
import type HttpAdapterFactory from "./http-adapter-factory.js";


export default class ExpressFactory implements HttpAdapterFactory {

    makeHttpAdapter(): BaseHttp {
        return new ExpressHttpAdapter();
    }
}

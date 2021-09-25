import { API as BaseAPI, mix, load, conf } from "yonius";
import { ShipmentAPI } from "./shipment";

const BASE_URL = "https://express.api.dhl.com/mydhlapi/";

export class API extends mix(BaseAPI).with(ShipmentAPI) {
    constructor(kwargs = {}) {
        super(kwargs);
        this.baseUrl = conf("DHL_BASE_URL", BASE_URL);
        this.username = conf("DHL_USERNAME", null);
        this.password = conf("DHL_PASSWORD", null);
        this.baseUrl = kwargs.baseUrl === undefined ? this.baseUrl : kwargs.baseUrl;
        this.username = kwargs.username === undefined ? this.username : kwargs.username;
        this.password = kwargs.password === undefined ? this.password : kwargs.password;
    }

    static async load() {
        await load();
    }
}

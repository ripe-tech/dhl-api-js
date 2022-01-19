export const ShipmentAPI = superclass =>
    class extends superclass {
        async createShipment(payload, options = {}) {
            const url = this.baseUrl + "shipments";
            const response = await this.post(url, {
                dataJ: payload,
                ...options
            });
            return response;
        }
    };

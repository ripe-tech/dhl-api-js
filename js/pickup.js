export const PickupAPI = superclass =>
    class extends superclass {
        async schedulePickup(payload, options = {}) {
            const url = this.baseUrl + "pickups";
            const response = await this.post(url, {
                dataJ: payload,
                ...options
            });
            return response;
        }
    };

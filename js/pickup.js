export const PickupAPI = superclass =>
    class extends superclass {
        /**
         * Schedules pickup of shipment.
         *
         * @param {Object} payload The payload object according to the DHL API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         */
        async schedulePickup(payload, options = {}) {
            const url = this.baseUrl + "pickups";
            const response = await this.post(url, {
                dataJ: payload,
                ...options
            });
            return response;
        }
    };

export const PickupAPI = superclass =>
    class extends superclass {
        /**
         * Schedules a pickup for a parcel.
         *
         * @param {Object} payload The payload object according to the DHL API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://developer.dhl.com/api-reference/dhl-express-mydhl-api#reference-docs-section/operations-pickup-exp-api-pickups
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

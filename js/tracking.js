export const TrackingAPI = superclass =>
    class extends superclass {
        async getTracking(trackingNumber, options = {}) {
            const url = this.baseUrl + "tracking";
            const response = await this.get(url, {
                params: { shipmentTrackingNumber: trackingNumber },
                ...options
            });
            return response;
        }
    };

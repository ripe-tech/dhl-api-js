/**
 * Shipment agreed delivery checkpoint.
 */
export const STATUS_AGREED_DELIVERY = "AD";

/**
 * Shipment arrived facility checkpoint.
 */
export const STATUS_ARRIVED_FACILITY = "AF";

/**
 * Shipment depart facility checkpoint.
 */
export const STATUS_DEPART_FACILITY = "DF";

/**
 * Shipment destroyed checkpoint.
 */
export const STATUS_DESTROYED = "DS";

/**
 * Shipment delivered checkpoint.
 */
export const STATUS_DELIVERED = "OK";

/**
 * Shipment processed at location checkpoint.
 */
export const STATUS_PROCESSED = "PL";

/**
 * Shipment pickup checkpoint.
 */
export const STATUS_PICKUP = "PU";

/**
 * Shipment returned checkpoint.
 */
export const STATUS_RETURNED = "RT";

export const TrackingAPI = superclass =>
    class extends superclass {
        async getTracking(trackingNumber, options = {}) {
            const url = this.baseUrl + "tracking";

            const params = {
                shipmentTrackingNumber: trackingNumber
            };
            if (options.trackingView) params.trackingView = options.trackingView;
            if (options.levelOfDetail) params.levelOfDetail = options.levelOfDetail;

            const response = await this.get(url, {
                params: params,
                ...options
            });
            return response;
        }
    };

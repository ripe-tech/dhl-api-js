/**
 * Shipment agreed delivery checkpoint.
 */
export const STATUS_AGREED_DELIVERY = "AD";

/**
 * Shipment arrived facility checkpoint.
 */
export const STATUS_ARRIVED_FACILITY = "AF";

/**
 * Shipment controllable clearence delay.
 */
export const STATUS_CLEARENCE_DELAY = "CD";

/**
 * Shipment clearence release.
 */
export const STATUS_CLEARENCE_RELEASE = "CR";

/**
 * Shipment closed.
 */
export const STATUS_CLOSED_SHIPMENT = "CS";

/**
 * Shipment depart facility checkpoint.
 */
export const STATUS_DEPART_FACILITY = "DF";

/**
 * Shipment destroyed checkpoint.
 */
export const STATUS_DESTROYED = "DS";

/**
 * Shipment missed delivery cycle.
 */
export const STATUS_MISSED_DELIVERY = "MD";

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

/**
 * Shipment transport delay.
 */
export const STATUS_TRANSPORT_DELAY = "TD";

/**
 * Shipment uncontrollable clearence delay.
 */
export const STATUS_UNCONTROLLABLE_DELAY = "UD";

export const TrackingAPI = superclass =>
    class extends superclass {
        getTrackingUrl(trackingNumber) {
            return `https://www.dhl.com/global-en/home/tracking/tracking-express.html?submit=1&tracking-id=${trackingNumber}`;
        }

        /**
         *
         * Gets shipment tracking number.
         *
         * @param {String} trackingNumber is the number of the shipment/waybill.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         */
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

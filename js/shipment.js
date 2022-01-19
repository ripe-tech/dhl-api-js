/**
 * Represents the metric system.
 */
export const METRIC = "metric";

/**
 * Represents the imperial system.
 */
export const IMPERIAL = "imperial";

/**
 * Represents the Delivered-At-Place (DAP) incoterm code.
 */
export const INCOTERM_DAP = "DAP";

/**
 * The code representing a domestic express shipment.
 */
export const DOMESTIC_EXPRESS = "N";

/**
 * The code representing a domestic express shipment.
 */
export const WORLRDWIDE_EXPRESS = "D";

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

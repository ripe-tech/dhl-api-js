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

/**
 * The document upload code for an invoice.
 */
export const INVOICE_DOC_TYPE = "INV";

/**
 * The document upload code for a proforma.
 */
export const PROFORMA_DOC_TYPE = "PNV";

/**
 * The document upload code for a certificate of origin.
 */
export const CERTIFICATE_ORIGIN_DOC_TYPE = "COO";

/**
 * The document upload code for a Nafta certificate of origin.
 */
export const NAFTA_DOC_TYPE = "NAF";

/**
 * The document upload code for a commercial invoice.
 */
export const COMMERCIAL_INVOICE_DOC_TYPE = "CIN";

/**
 * The document upload code for a custom declaration.
 */
export const CUSTOM_DECLARATION_DOC_TYPE = "DCL";

/**
 * The document upload code for a waybill document.
 */
export const WAYBILL_DOC_TYPE = "AWB";

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

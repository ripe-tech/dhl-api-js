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
 * The product code representing a DOM shipment.
 */
export const PRODUCT_DOM = "N";

/**
 * The product code representing a DOX shipment.
 */
export const PRODUCT_DOX = "D";

/**
 * The product code representing a WPX shipment.
 */
export const PRODUCT_WPX = "P";

/**
 * The product code representing a ECX shipment.
 */
export const PRODUCT_ECX = "U";

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

/**
 * The code for a paperless DHL shipment.
 */
export const SERVICE_PAPERLESS = "WY";

/**
 * The code for a Go Green DHL shipment.
 */
export const SERVICE_GO_GREEN = "EE";

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

        async uploadDocument(trackingNumber, payload, options = {}) {
            const url = `${this.baseUrl}shipments/${trackingNumber}/upload-image`;
            const response = await this.patch(url, {
                dataJ: payload,
                ...options
            });
            return response;
        }

        async getProofOfDelivery(trackingNumber, options = {}) {
            const url = `${this.baseUrl}shipments/${trackingNumber}/proof-of-delivery`;
            const response = await this.get(url, options);
            return response;
        }
    };

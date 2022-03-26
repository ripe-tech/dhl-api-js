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
 * The code for a paperless shipment.
 */
export const SERVICE_PAPERLESS = "WY";

/**
 * The code for a Go Green shipment.
 */
export const SERVICE_GO_GREEN = "EE";

/**
 * The base64 data for the Go Green PNG logo.
 */
export const GO_GREEN_LOGO =
    "iVBORw0KGgoAAAANSUhEUgAAAW0AAACKCAMAAABW6eueAAABO1BMVEX////9zQEQcURfXlzD2c4AaTRXlncAbD0SeEtwo4gEb0D/0AD/7bJIjGr9ywC/18r/5ZgAZze1zsCavasAb0UAbEa8sR8AaEfavQ/4ywDwyAsAakalpSfVuhdcXF0AbETetx9SVWBVVFFZWl7j4+La5d//6JZdXllPTUtpaGZukDJ6lDJlYlY3fzwAdEDVriSBly1GfzvpvhWulDjAojCEd0zHtRrzxADqxQGzqyGYoCg7hl/u7u7ez5+5ua6QkY91dXKCgoDPxqjw4ZjFzqW2x6Tc2puiwKq5v3OSgDleWU9Ify4TcjIxeTG4mjR7clKdhz5ciTWOf0eNmSudiENuZ1J9ck5WhjnJpy6zmDkweECNfEmdnyxCgDvHpgM8ekBtkyy+rCjp4LmsrKrGxcPz5LDV27zi47W3xIuRienjAAAPE0lEQVR4nO1d/XvTRhJGdkNA24q6rBx/xJaN7vDhmHw4xHZM29Dr17WFQEhCwDRHP+n9/3/B6WN3Zna9SuwcbJ97uu/DL0ijlfTOaPad2TVc+8DBGq5dW3GwhYfXrpUcLMH/KGX7hoMN+BnblSSdOLx33FrJ2F659Wc/yF8Cn1Qc2/bg2LYJx7ZNOLZtwrFtE45tm3Bs24Rj2yYc2zbh2LYJx7ZNOLZtwrFtE45tm3Bs24Rj2yYc2zbh2LYJx7ZNOLZtwrFtE45tm3Bs24Rj2yYc2zbh2LYJx7ZN/O9sf/q3DJ8uZHaZFZr/PcfCF/xfYEG27348j7t3P/v84NG98p0M5XuPDj7/7ON5w7uJ3a9f5Gbl8qODf941DUbMv/zq9vWHN/zVlZWVVf/Gw49ufv0NXnL329s6vv7qG31Ig5XAt8Li6yKD29/kI3xFL6LDfwmHv7zoPYz4V7QQ24EOL+h8933GHyLl87uxpxmOdwfU7M6d7x/MjYbW9f0fViurvi93l/OSn/z98VSer1XmsLK6urJdU4aZVFbm7TL8wDID9rjgfGWlkd/oCT1WJ09YFQdXn9SDZVFtLsS2p4KNDwfduF2eQ/yUaYbPul3Nrt09HTLPBFbbiEJu2NEfrosL2Hpo3PIfNfv1AAcqsEoHyg1qawUG/Ci/06RJf1BQIw/ZFw/IN8wvcQHYFdgOmHdY1ikU6D5gAbU8LMcGq3gwND3LpB8WsORPpM2RyRkZj/frXnCpVbMmnBYVGQi/7tMniUaE2E0xdli1wXbAOk8LuE7YDujg9T1T/Kd0n9JIFNZTv4gCGXCe19gs4rEU9cHRjSIbvpkPxM4KnVYL5v0V7gOxrAVfxcRbFsuzHbDdQq7L8XPibzYcmAI7N3ymBQabnBd9/WkYSatRsVGJ1yTboyK3hdvZbYOJX2BQmuXPVTddlseESDF8Z+nQXp5t1tjrKry123GCdu6A7hY+AuuQwI7j3qBNA72r5hLW8pVo45yHYcTzY34ko5Ztc2LB1QDF5L5d5JPm6BKnRcfM4C/8tgJ2XyaSdQtsD09JvLbj7uDFye7u7sneaToZtgdk5E4ZyO32nnWG4+EDEuvxLlMegxLHm+HsaOP4eLt/thlGdD4K5LuW+NnR2dmOT+fUSEZgfQesfAUlv57fbqPAwA+FO45VR+7AlDCRfgrpzPl+2GZjQlgvbj/rjD2WIRg+eNrtkvwwHiDZJ2PmsSQuxk/hWPuU5pwqjbVwNp3UxaiN1vFmc20kQxuVgt9ITnv1KkkJkXRKDUbjk4YK4Q5wWrOqGeR3Yjsq25swS/8sT2wuH9pLsh0ENDrj3YQTMhQb7nXg78FTsEx0ijTpkFyCqYSNiNwKZ/uBMiqrnoHWAGUnv21WQ1rCKdOtzsyUoDsi4/lgqE2iUU0mqSORYq6g/5ZjO6loXhCyn6qiOTmL3Afsmczu7e4hyeU4QNwB41pEKNuua6+RDAtsg5QI1wP9UCkUOg31REFuhZkuddqcNkqxr02zIsF4QX0GH8V7j+1nOEF2T7wLbse2QLd0T2ik7mLEv/TgDTAdRPvm189RBxJAf7A+sC1FeR2GK8it6KHmvtkABpVTovhsApheo3rxYxZiGbYTCiHrKhwacCrJbp/Sx2Iv5/JLwDYwkC6sGALMOPwNjIgzopBkKDj4ffM4DXBQ06yZ66DqRYKXEpAdy0RSkKMuxjJs13HeU3S1YdRX4Jd4i1qyLcwkMptXMY+QKsI4LEgJkB8eKuemuJhtS+/xbfNwMCfzc/N9RqKC4bNpJMgVp3ZQ/13wDRa+wMJsJ6kYmGqfXjzquCf9Eu8pL8xednW26zOMtOOLA4aBaTSSh6ZA7Ux+KxCYzZE5bYPTQvMNQf/xfks4ZpZ/oRO48gr6bxm22RCTNs5w5kFJdu6obD/AM1v5kSnKtcuqsxZOpiI9sZqvUxvUQOBsNsyPtykNopExQLGC2ZeSh4+zE9A9Ob9K2l6G7RMkavdiWuo9+AheaC1B9IP0GJEjrUtCmyq7vJvRmMnQDjfEp62oRAVyHHTHrG6yCCayFcJrE+HNtSyWYfYMC3LUJVic7SHJIxgRWnc6H/MBfAXdlxrbr+Uo7V6mt0loh1gxFjwr6r80RSfsjCBpRGfy9mjFj9YViI+f/Qiz8hvVQCpI2SDk95knkpeYUeSXFJpz1DtjO4lK0HRQrYw7Ksb5mFDctweBxhxolfIgP4NZm4M+qLVU5F9tMAFuw2pydDQ9hyBtHsEdJvCtlHhI0FzL80rAzrnRIFyral6Njpk0jqbJp4P6z59cYY5cnO1gPIDQ7ok7Bex5V0WeHDDBz3X6hpBj4tfpKTaCN4/60FX115oEa1LtVbHijNIT0CPh0dSDD6uo/yf1RzDhZoNSKLrA0P9LIlhWSjxt57JjwfbV9N8Ssb1loHBMO1TQ+mC7mEi2tKfCUbqvMrb7WEND1tb4Aq27YaSJh2tHNZRjbKOgvQd1fbXAACYDUPVNBgSnSQU1Eb9C/28ZtukcCQ2Ojtp7FW5gpLIZa3dDEZmJlaCBiWSGXVWVDukGIhUpzn6c0G5N/U1B6ErNRopPzWBd0+tpL4btC+rThgr0xPiV9N8SmQRzcQ96TCgwaCQP2yC29Rqojo4oZ6HdQvkHs3xd7b9xIXXNS4l8Z6r2VWoFicSfyTxhdhosoiUVTIT0Q6CvTcjs+fhqob0w22NMJEAhe6Gu4cT5USxgcDoVF+DHEGeVP1UksmYPJlpoy26feWWXhzO66EZGVBGKaYG1ivK68Cp2FcNkKgxkuzAcBdDtKqpR3xnb/4YwjqGll3ig3UbC23nZyE6wvtfWepWqJzuAXzV2LNabCgtQkIOU8LM/6A5aEIKe8EvNNQXCm9TBqkFf82o+rQbiaRIJ2JD6r2kuit4d24QnOfOlQdzr9cooDPPDsGJAV3LyUwPM6JmoDu5jaAFlaQRxpFO6oY5O4H5EerT8DWEbG07RpK5ACins/617ioF8SIjgzIuyDxBto9rhRRXBu2L7OS7EQFt7nGEP2M4jGaVirBeSuiLxxqh8H4PZJAUU6ZkYSIFSgo8mtSqKZlxYSUioQhm4Y6y8iP6LGp7BINGf0hvp7AzqPFEscvbGVcr3xTam6K7apBzL2JZLX0NcDNO6sgwc0+7lYgUnPiBVmEJDQjaOSNJJEmzAahj9qBAC1H9RQcMJBuY75h4JVDCzrBqSupPPGOn/LcUxGXxBtqEq0RbLMV6l/iMzodZOmat6SCWis90XZ/y1liAFpATPEizZ8MFbeN1ck0p/38v6f54WwexHeQHMnpFp69FCWJRt3MindfVAh4t8TtOFKknYHuT+sijxyXqkr9g2ZJuOb4ruB/b/8s0l2GoldRGDhhOfFfT/MJG0TOcDT95ZdEZAcPs/STfsLEcxvfvybB9SXmDiiweCQVJ0qpZkIWFXX2XJ9CyxBR2eB3KSIkBKcJ71KDAlkH1jxMqYWwMPdjqBjNdQw/6f9owydV2x/5cNtnQmUdYHsOkdvxZ1L1lOe0UfKzid0yqkuClxsmwTQENCRlhAFnvP85j7eV6qe2xHUhIZV4HIwLxvzjRQwZyL8xNVkGqbApfD8rOkkrjZKxmwcilmroKRlifYQ9yCrTBE1d2nS0+4SScPebKVLJrOsQ3MopVfsP5LNpKY2T5T9J+XrilrtWdBjloEi7KNDY50XVfyEqC47klhiJqkPCDNot2uLIRIY7BO9lCSWSvAhoTYSkJaSXKXKmEbdqRVZS73Z+b4I/0/4/ovLhCHkNaxJshPXFn/LVFLkgZU/HpMyknpAjiEJUws1xKYhzs14xfk7kekjI6msG0E9Z9s3GH/T+5RQv6lEVGJRQuORP8xowV0dbk8Emi7k805ajEs3CehLZF4cDjMV5YOIZFAwBLp0R5k+oWx4XNM5oMxPi1TdkmH59VGNmwDPmcp7rCVBHuUkO1Iso1W4X5NxURzB9/QDMRGYulV3J6sN3qvtv67HNuk45py241P954/f4H71HAjA3vQxWXJ3rOtYeflc9zd2o7pDqsAlF5OQbh5ftQ/elMCImWnqAUJHjYXE7alSGiRaUCFSDa0/6cZHKkGOBdofS6tMHg/bAfDsop0IzGJ9xiXxMi2k3QTbAJ0VFxWt7PNNfbUfcIgHMjCvJijcNUKlxumRdu2E32ZtWVaYZGB6H1Bv7YJUyEIbnGzS3ZhvBu22aG6dKCCdrLJIvCc2fwPbs4u2P4utR1umk630Qi3ItuQXM4K2c43TcFOJwPbuYjHrfAokFoK283WFTtSy7CdrrtcQLdSNrI9s2U721msobC5n7EtIqwB/RSYEcl6mlzRbBRymeSajKOdonuJ/AD6LzzGJ1TWMbl/da6XYTsTcT0zjb2usiRWPzXQ3Y7LL027uRo7xl+RZe8sciTDLacRzFEktsVG1f2w6Pcda3lB0ih0rOhhYQcbt7YEkxkxLCiK3j3bSeFyavrFTZLBuy80Gk/mf7U32DVvig28aSky0JDMXJHYbEc6UG/gRqSjla+AFy44lni+aUrLwIo7MnaDKvb/Anw++kVcslPxHbEtesBbe98rP0hNf4862Nvt6L/C9Dp7d+60idXeS/1XqwSN6ZPK6iq+0upqpVJ50t+XvzgdP66I/3aqsg0XteSxlcoP+ZGVivn/qlqp9HODfqHB43Fm8JMwqPxE3+UIL6tUJoVvsQhGi7H9ocQvvx08unfnHwnulB99cfDrb29//9CIX349uFdOze59cfDbL2YbwO9vb998WMpeyL/x8PrN25/8QYb9/RMADvQHHrylW+l4m19yqcEt+fc/6MO9JYa3LnmRS/CfVfdvONiD+xczbMKxbROObZtwbNuEY9smHNs24di2Cce2TTi2bcKxbROObZtwbNuEY9smHNs24di2Cce2TTi2bcKxbROObZtwbNuEY9smHNs24di2Cce2TTi2bcKxbROObZtwbNuEY9smHNs24di2Cce2TTi2bcKxbROObZtwbNuEY9smHNs24di2Cce2TTi2bcKxbROObZtwbNuEY9smHNs24di2Cce2TTi2bcKxbROObZtwbNuEY9smHNs2Idn+4M9+kL8Ebq1kbPvXbzq8f3yU/+uLJX/V4f3DL6Vs+w6WsJqwfd3BFm5e+y8SNJSxQXBwtwAAAABJRU5ErkJggg==";

export const ShipmentAPI = superclass =>
    class extends superclass {
        /**
         * Creates a shipment and associated DHL waybill.
         *
         * @param {Object} payload The payload object according to the DHL API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://developer.dhl.com/api-reference/dhl-express-mydhl-api#reference-docs-section/operations-pickup-exp-api-pickups
         */
        async createShipment(payload, options = {}) {
            const url = this.baseUrl + "shipments";
            const response = await this.post(url, {
                dataJ: payload,
                ...options
            });
            return response;
        }

        /**
         * Uploads a document to the DHL server for a shipment.
         *
         * @param {String} trackingNumber The tracking number of the shipment/waybill
         * @param {Object} payload The payload object according to the DHL API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://developer.dhl.com/api-reference/dhl-express-mydhl-api#reference-docs-section/operations-pickup-exp-api-pickups
         */
        async uploadDocument(trackingNumber, payload, options = {}) {
            const url = `${this.baseUrl}shipments/${trackingNumber}/upload-image`;
            const response = await this.patch(url, {
                dataJ: payload,
                ...options
            });
            return response;
        }
        /**
         *
         * Gets proof of delivery for a shipment.
         *
         * @param {String} trackingNumber The tracking number of the shipment/waybill.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://developer.dhl.com/api-reference/dhl-express-mydhl-api#reference-docs-section/operations-pickup-exp-api-pickups
         */
        async getProofOfDelivery(trackingNumber, options = {}) {
            const url = `${this.baseUrl}shipments/${trackingNumber}/proof-of-delivery`;
            const response = await this.get(url, options);
            return response;
        }
    };

# DHL API for Javascript

The DHL API Javascript client implementation.

```javascript
const dhlAPI = require("dhl-api");

// instance the API client with defaults
const dhl = new dhlApi.API({
    username: "mydhlaccount",
    password: "mydhlaccountpassword",
});

// example: request tracking information
const tracking = await api.getTracking("7798339175");
```

## Configuration

| Name             | Type  | Default                                 | Description                                                    |
| ---------------- | ----- | --------------------------------------- | -------------------------------------------------------------- |
| **DHL_BASE_URL** | `str` | `https://express.api.dhl.com/mydhlapi/` | The base URL that is going to be used for DHL API connections. |
| **DHL_USERNAME** | `str` | `None`                                  | The DHL API username to be used for authentication             |
| **DHL_PASSWORD** | `str` | `None`                                  | The DHL API password to be used for authentication             |

## License

DHL API for Javascript is currently licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/).

## Build Automation

[![Build Status](https://app.travis-ci.com/ripe-tech/dhl-api-js.svg?branch=master)](https://travis-ci.com/github/ripe-tech/dhl-api-js)
[![Build Status GitHub](https://github.com/ripe-tech/dhl-api-js/workflows/Main%20Workflow/badge.svg)](https://github.com/ripe-tech/dhl-api-js/actions)
[![npm Status](https://img.shields.io/npm/v/dhl-api.svg)](https://www.npmjs.com/package/dhl-api)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://www.apache.org/licenses/)

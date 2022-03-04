# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

* Added new shipment status codes - [peri-shipping/#116](https://github.com/ripe-tech/peri-shipping/issues/116)

### Fixed

*

## Changed

*

## [0.6.1] - 2022-03-04

### Added

* `SERVICE_GO_GREEN` code
* `GO_GREEN_LOGO` base64 data

## Changed

* `DHL_PAPERLESS_CODE` to `SERVICE_PAPERLESS` for better naming

## [0.6.0] - 2022-02-28

### Added

* Added `getTrackingUrl` method

## [0.5.0] - 2022-02-11

### Added

* Added `getProofOfDelivery` method - [#90](https://github.com/ripe-tech/peri-shipping/issues/90)

## Changed

* Product/service codes for different shipment types - [#74](https://github.com/ripe-tech/peri-shipping/issues/74)

## [0.4.0] - 2022-02-04

### Added

* `TrackingAPI` module and `getTracking` method - [#92](https://github.com/ripe-tech/peri-shipping/issues/92)

## [0.3.0] - 2022-02-01

### Added

* The `PickupAPI` module and `schedulePickup` method - [#91](https://github.com/ripe-tech/peri-shipping/issues/91)

## [0.2.0] - 2022-01-24

### Added

* Improved error handling using content type based parsing of payload - [#74](https://github.com/ripe-tech/peri-shipping/issues/74)
* Shipment API constants - [#74](https://github.com/ripe-tech/peri-shipping/issues/74)
* Adds `uploadDocument` API method - [#74](https://github.com/ripe-tech/peri-shipping/issues/74)

### Fixed

* Fixes successful status check for DHL - [#74](https://github.com/ripe-tech/peri-shipping/issues/74)

## [0.1.0] - 2021-05-18

### Added

* Base production URL
* Initial version

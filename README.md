# Node Event Loop Calculator

# Description
This extension creates two additional metrics about the Node.js event loop.

## Short Description

This extension creates two additional metrics about the Node.js event loop.

## APM version
APM 10.1+

## Supported third party versions
Tested with Node.js 0.12.

## Limitations
n/a

## License
Please review the
**LICENSE**
file in this repository.  Licenses may vary by repository.  Your download and use of this software constitutes your agreement to this license.

# Installation Instructions

## Prerequisites
Node.js agent reporting to the Enterprise Manager.

## Dependencies
CA APM node.js agent 10.1+.

## Installation
Copy `Node-EventLoop.js` to the `scripts` directory of your APM Enterprise Manager.

## Configuration
n/a

# Usage Instructions
n/a

## Metric description
This calculator will create two additional metrics from the default `Node.js Runtime:Event Loop` metric:
* `Node.js Runtime:Event Loop Ticks Per Interval`: this metric gives you the count of event ticks per interval. You can create an alert on this metric being 0 (not including) - then your event loop is blocked.
* `Node.js Runtime:Event Loop Average Tick Time (ms)`: this metric reports the average duration (as well as min and max) of all event ticks in the current interval.


## Debugging and Troubleshooting
Add log statements to the javascript file. See [Javascript  Calculators](https://communities.ca.com/docs/DOC-231151741) on the [CA APM Developer Community](https://communities.ca.com/community/ca-apm/apm-dev/).


## Support
This document and associated tools are made available from CA Technologies as examples and provided at no charge as a courtesy to the CA APM Community at large. This resource may require modification for use in your environment. However, please note that this resource is not supported by CA Technologies, and inclusion in this site should not be construed to be an endorsement or recommendation by CA Technologies. These utilities are not covered by the CA Technologies software license agreement and there is no explicit or implied warranty from CA Technologies. They can be used and distributed freely amongst the CA APM Community, but not sold. As such, they are unsupported software, provided as is without warranty of any kind, express or implied, including but not limited to warranties of merchantability and fitness for a particular purpose. CA Technologies does not warrant that this resource will meet your requirements or that the operation of the resource will be uninterrupted or error free or that any defects will be corrected. The use of this resource implies that you understand and agree to the terms listed herein.

Although these utilities are unsupported, please let us know if you have any problems or questions by adding a comment to the CA APM Community Site area where the resource is located, so that the Author(s) may attempt to address the issue or question.

Unless explicitly stated otherwise this extension is only supported on the same platforms as the APM core agent. See [APM Compatibility Guide](http://www.ca.com/us/support/ca-support-online/product-content/status/compatibility-matrix/application-performance-management-compatibility-guide.aspx).

### Support URL
https://github.com/CA-APM/node-event-loop-calculator/issues

# Contributing
The [CA APM Community](https://communities.ca.com/community/ca-apm) is the primary means of interfacing with other users and with the CA APM product team.  The [developer subcommunity](https://communities.ca.com/community/ca-apm/ca-developer-apm) is where you can learn more about building APM-based assets, find code examples, and ask questions of other developers and the CA APM product team.

If you wish to contribute to this or any other project, please refer to [easy instructions](https://communities.ca.com/docs/DOC-231150910) available on the CA APM Developer Community.

## Categories
Visualization


# Change log
Changes for each version of the extension.

Version | Author | Comment
--------|--------|--------
1.0 | Guenter Grossberger | First version of the extension.

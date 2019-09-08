# Smoozzy HTTP Statuses

Collection of HTTP statuses as named constants

Status codes defined in:
- [RFC1945](https://tools.ietf.org/html/rfc1945) (HTTP/1.0)
- [RFC2616](https://tools.ietf.org/html/rfc2616) (HTTP/1.1)
- [RFC6585](https://tools.ietf.org/html/rfc6585) (Additional HTTP Status Codes)
- [RFC7538](https://tools.ietf.org/html/rfc7538) (Permanent Redirect)
- [RFC2324](https://tools.ietf.org/html/rfc2324) (Hyper Text Coffee Pot Control Protocol)
- [RFC2518](https://tools.ietf.org/html/rfc2518) (WebDAV)


## Usage

```javascript
import Api from '@smoozzy/api';
import {
    STATUS_OK,
    STATUS_MULTIPLE_CHOICES,
    STATUS_UNPROCESSABLE_ENTITY,
} from '@smoozzy/http-statuses';

export default new Api({
    validateStatus(status) {
        return status >= STATUS_OK && status < STATUS_MULTIPLE_CHOICES ||
            status === STATUS_UNPROCESSABLE_ENTITY;
    },
});
```


## Status codes

### 1xx Informational

 Code | Status Text                        | Description
------|------------------------------------|---------------------------------------------
 100  | Continue                           | [Description](https://httpstatuses.com/100)
 101  | Switching Protocols                | [Description](https://httpstatuses.com/101)
 102  | Processing                         | [Description](https://httpstatuses.com/102)
 103  | Early Hints                        | [Description](https://tools.ietf.org/html/rfc8297)


### 2xx Success

 Code | Status Text                        | Description 
------|------------------------------------|---------------------------------------------
 200  | OK                                 | [Description](https://httpstatuses.com/200)
 201  | Created                            | [Description](https://httpstatuses.com/201)
 202  | Accepted                           | [Description](https://httpstatuses.com/202)
 203  | Non-authoritative Information      | [Description](https://httpstatuses.com/203)
 204  | No Content                         | [Description](https://httpstatuses.com/204)
 205  | Reset Content                      | [Description](https://httpstatuses.com/205)
 206  | Partial Content                    | [Description](https://httpstatuses.com/206)
 207  | Multi-Status                       | [Description](https://httpstatuses.com/207)
 208  | Already Reported                   | [Description](https://httpstatuses.com/208)
 226  | IM Used                            | [Description](https://httpstatuses.com/226)


### 3xx Redirection

 Code | Status Text                        | Description 
------|------------------------------------|---------------------------------------------
 300  | Multiple Choices                   | [Description](https://httpstatuses.com/300)
 301  | Moved Permanently                  | [Description](https://httpstatuses.com/301)
 302  | Found                              | [Description](https://httpstatuses.com/302)
 303  | See Other                          | [Description](https://httpstatuses.com/303)
 304  | Not Modified                       | [Description](https://httpstatuses.com/304)
 305  | Use Proxy                          | [Description](https://httpstatuses.com/305)
 307  | Temporary Redirect                 | [Description](https://httpstatuses.com/307)
 308  | Permanent Redirect                 | [Description](https://httpstatuses.com/308)


### 4xx Client Error

 Code | Status Text                        | Description 
------|------------------------------------|---------------------------------------------
 400  | Bad Request                        | [Description](https://httpstatuses.com/400)
 401  | Unauthorized                       | [Description](https://httpstatuses.com/401)
 402  | Payment Required                   | [Description](https://httpstatuses.com/402)
 403  | Forbidden                          | [Description](https://httpstatuses.com/403)
 404  | Not Found                          | [Description](https://httpstatuses.com/404)
 405  | Method Not Allowed                 | [Description](https://httpstatuses.com/405)
 406  | Not Acceptable                     | [Description](https://httpstatuses.com/406)
 407  | Proxy Authentication Required      | [Description](https://httpstatuses.com/407)
 408  | Request Timeout                    | [Description](https://httpstatuses.com/408)
 409  | Conflict                           | [Description](https://httpstatuses.com/409)
 410  | Gone                               | [Description](https://httpstatuses.com/410)
 411  | Length Required                    | [Description](https://httpstatuses.com/411)
 412  | Precondition Failed                | [Description](https://httpstatuses.com/412)
 413  | Payload Too Large                  | [Description](https://httpstatuses.com/413)
 414  | Request-URI Too Long               | [Description](https://httpstatuses.com/414)
 415  | Unsupported Media Type             | [Description](https://httpstatuses.com/415)
 416  | Requested Range Not Satisfiable    | [Description](https://httpstatuses.com/416)
 417  | Expectation Failed                 | [Description](https://httpstatuses.com/417)
 418  | I'm a teapot                       | [Description](https://httpstatuses.com/418)
 421  | Misdirected Request                | [Description](https://httpstatuses.com/421)
 422  | Unprocessable Entity               | [Description](https://httpstatuses.com/422)
 423  | Locked                             | [Description](https://httpstatuses.com/423)
 424  | Failed Dependency                  | [Description](https://httpstatuses.com/424)
 425  | Too Early                          | [Description](https://tools.ietf.org/html/rfc8470#section-5.2)
 426  | Upgrade Required                   | [Description](https://httpstatuses.com/426)
 428  | Precondition Required              | [Description](https://httpstatuses.com/428)
 429  | Too Many Requests                  | [Description](https://httpstatuses.com/429)
 431  | Request Header Fields Too Large    | [Description](https://httpstatuses.com/431)
 444  | Connection Closed Without Response | [Description](https://httpstatuses.com/444)
 451  | Unavailable For Legal Reasons      | [Description](https://httpstatuses.com/451)
 499  | Client Closed Request              | [Description](https://httpstatuses.com/499)


### 5xx Server Error

 Code | Status Text                        | Description
------|------------------------------------|---------------------------------------------
 500  | Internal Server Error              | [Description](https://httpstatuses.com/500)
 501  | Not Implemented                    | [Description](https://httpstatuses.com/501)
 502  | Bad Gateway                        | [Description](https://httpstatuses.com/502)
 503  | Service Unavailable                | [Description](https://httpstatuses.com/503)
 504  | Gateway Timeout                    | [Description](https://httpstatuses.com/504)
 505  | HTTP Version Not Supported         | [Description](https://httpstatuses.com/505)
 506  | Variant Also Negotiates            | [Description](https://httpstatuses.com/506)
 507  | Insufficient Storage               | [Description](https://httpstatuses.com/507)
 508  | Loop Detected                      | [Description](https://httpstatuses.com/508)
 510  | Not Extended                       | [Description](https://httpstatuses.com/510)
 511  | Network Authentication Required    | [Description](https://httpstatuses.com/511)
 599  | Network Connect Timeout Error      | [Description](https://httpstatuses.com/599)


## Links

- [IANA Status Code Registry](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
- [HTTP Status Codes](https://httpstatuses.com)

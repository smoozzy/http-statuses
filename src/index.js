/* 1xx Informational
 */

export const STATUS_CONTINUE = 100;                            // https://tools.ietf.org/html/rfc7231#section-6.2.1
export const STATUS_SWITCHING_PROTOCOLS = 101;                 // https://tools.ietf.org/html/rfc7231#section-6.2.2
export const STATUS_PROCESSING = 102;                          // https://tools.ietf.org/html/rfc2518#section-10.1
export const STATUS_EARLY_HINTS = 103;                         // https://tools.ietf.org/html/rfc8297#section-2


/* 2xx Success
 */

export const STATUS_OK = 200;                                  // https://tools.ietf.org/html/rfc7231#section-6.3.1
export const STATUS_CREATED = 201;                             // https://tools.ietf.org/html/rfc7231#section-6.3.2
export const STATUS_ACCEPTED = 202;                            // https://tools.ietf.org/html/rfc7231#section-6.3.3
export const STATUS_NON_AUTHORITATIVE_INFORMATION = 203;       // https://tools.ietf.org/html/rfc7231#section-6.3.4
export const STATUS_NO_CONTENT = 204;                          // https://tools.ietf.org/html/rfc7231#section-6.3.5
export const STATUS_RESET_CONTENT = 205;                       // https://tools.ietf.org/html/rfc7231#section-6.3.6
export const STATUS_PARTIAL_CONTENT = 206;                     // https://tools.ietf.org/html/rfc7233#section-4.1
export const STATUS_MULTI_STATUS = 207;                        // https://tools.ietf.org/html/rfc4918#section-13
export const STATUS_ALREADY_REPORTED = 208;                    // https://tools.ietf.org/html/rfc5842#section-7.1
export const STATUS_IM_USED = 226;                             // https://tools.ietf.org/html/rfc3229#section-10.4.1


/* 3xx Redirection
 */

export const STATUS_MULTIPLE_CHOICES = 300;                    // https://tools.ietf.org/html/rfc7231#section-6.4.1
export const STATUS_MOVED_PERMANENTLY = 301;                   // https://tools.ietf.org/html/rfc7231#section-6.4.2
export const STATUS_FOUND = 302;                               // https://tools.ietf.org/html/rfc7231#section-6.4.3
export const STATUS_SEE_OTHER = 303;                           // https://tools.ietf.org/html/rfc7231#section-6.4.4
export const STATUS_NOT_MODIFIED = 304;                        // https://tools.ietf.org/html/rfc7232#section-4.1
export const STATUS_USE_PROXY = 305;                           // https://tools.ietf.org/html/rfc7231#section-6.4.5
export const STATUS_TEMPORARY_REDIRECT = 307;                  // https://tools.ietf.org/html/rfc7231#section-6.4.7
export const STATUS_PERMANENT_REDIRECT = 308;                  // https://tools.ietf.org/html/rfc7538#section-3


/* 4xx Client Error
 */

export const STATUS_BAD_REQUEST = 400;                         // https://tools.ietf.org/html/rfc7231#section-6.5.1
export const STATUS_UNAUTHORIZED = 401;                        // https://tools.ietf.org/html/rfc7235#section-3.1
export const STATUS_PAYMENT_REQUIRED = 402;                    // https://tools.ietf.org/html/rfc7231#section-6.5.2
export const STATUS_FORBIDDEN = 403;                           // https://tools.ietf.org/html/rfc7231#section-6.5.3
export const STATUS_NOT_FOUND = 404;                           // https://tools.ietf.org/html/rfc7231#section-6.5.4
export const STATUS_METHOD_NOT_ALLOWED = 405;                  // https://tools.ietf.org/html/rfc7231#section-6.5.5
export const STATUS_NOT_ACCEPTABLE = 406;                      // https://tools.ietf.org/html/rfc7231#section-6.5.6
export const STATUS_PROXY_AUTHENTICATION_REQUIRED = 407;       // https://tools.ietf.org/html/rfc7235#section-3.2
export const STATUS_REQUEST_TIMEOUT = 408;                     // https://tools.ietf.org/html/rfc7231#section-6.5.7
export const STATUS_CONFLICT = 409;                            // https://tools.ietf.org/html/rfc7231#section-6.5.8
export const STATUS_GONE = 410;                                // https://tools.ietf.org/html/rfc7231#section-6.5.9
export const STATUS_LENGTH_REQUIRED = 411;                     // https://tools.ietf.org/html/rfc7231#section-6.5.10
export const STATUS_PRECONDITION_FAILED = 412;                 // https://tools.ietf.org/html/rfc7232#section-4.2
export const STATUS_PAYLOAD_TOO_LARGE = 413;                   // https://tools.ietf.org/html/rfc7231#section-6.5.11
export const STATUS_REQUEST_URI_TOO_LONG = 414;                // https://tools.ietf.org/html/rfc7231#section-6.5.12
export const STATUS_UNSUPPORTED_MEDIA_TYPE = 415;              // https://tools.ietf.org/html/rfc7231#section-6.5.13
export const STATUS_REQUESTED_RANGE_NOT_SATISFIABLE = 416;     // https://tools.ietf.org/html/rfc7233#section-4.4
export const STATUS_EXPECTATION_FAILED = 417;                  // https://tools.ietf.org/html/rfc7231#section-6.5.14
export const STATUS_I_AM_A_TEAPOT = 418;                       // https://tools.ietf.org/html/rfc2324#section-2.3.2
export const STATUS_MISDIRECTED_REQUEST = 421;                 // https://tools.ietf.org/html/rfc7540#section-9.1.2
export const STATUS_UNPROCESSABLE_ENTITY = 422;                // https://tools.ietf.org/html/rfc4918#section-11.2
export const STATUS_LOCKED = 423;                              // https://tools.ietf.org/html/rfc4918#section-11.3
export const STATUS_FAILED_DEPENDENCY = 424;                   // https://tools.ietf.org/html/rfc4918#section-11.4
export const STATUS_TOO_EARLY = 425;                           // https://tools.ietf.org/html/draft-ietf-httpbis-replay-04#section-5.2
export const STATUS_UPGRADE_REQUIRED = 426;                    // https://tools.ietf.org/html/rfc7231#section-6.5.15
export const STATUS_PRECONDITION_REQUIRED = 428;               // https://tools.ietf.org/html/rfc6585#section-3
export const STATUS_TOO_MANY_REQUESTS = 429;                   // https://tools.ietf.org/html/rfc6585#section-4
export const STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE = 431;     // https://tools.ietf.org/html/rfc6585#section-5
export const STATUS_CONNECTION_CLOSED_WITHOUT_RESPONSE = 444;  // https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#return
export const STATUS_UNAVAILABLE_FOR_LEGAL_REASONS = 451;       // https://tools.ietf.org/html/rfc7725#section-3
export const STATUS_CLIENT_CLOSED_REQUEST = 499;               // http://lxr.nginx.org/source/src/http/ngx_http_request.h#0127


/* 5xx Server Error
 */

export const STATUS_INTERNAL_SERVER_ERROR = 500;               // https://tools.ietf.org/html/rfc7231#section-6.6.1
export const STATUS_NOT_IMPLEMENTED = 501;                     // https://tools.ietf.org/html/rfc7231#section-6.6.2
export const STATUS_BAD_GATEWAY = 502;                         // https://tools.ietf.org/html/rfc7231#section-6.6.3
export const STATUS_SERVICE_UNAVAILABLE = 503;                 // https://tools.ietf.org/html/rfc7231#section-6.6.4
export const STATUS_GATEWAY_TIMEOUT = 504;                     // https://tools.ietf.org/html/rfc7231#section-6.6.5
export const STATUS_HTTP_VERSION_NOT_SUPPORTED = 505;          // https://tools.ietf.org/html/rfc7231#section-6.6.6
export const STATUS_VARIANT_ALSO_NEGOTIATES = 506;             // https://tools.ietf.org/html/rfc2295#section-8.1
export const STATUS_INSUFFICIENT_STORAGE = 507;                // https://tools.ietf.org/html/rfc4918#section-11.5
export const STATUS_LOOP_DETECTED = 508;                       // https://tools.ietf.org/html/rfc5842#section-7.2
export const STATUS_NOT_EXTENDED = 510;                        // https://tools.ietf.org/html/rfc2774#section-7
export const STATUS_NETWORK_AUTHENTICATION_REQUIRED = 511;     // https://tools.ietf.org/html/rfc6585#section-6
export const STATUS_NETWORK_CONNECT_TIMEOUT_ERROR = 599;       // https://github.com/rmaake1/httpstatuses/issues/22

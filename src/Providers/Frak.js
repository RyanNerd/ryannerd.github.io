/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';

const JSON_CONTENT_TYPE = 'application/json';
const DEFAULT_REQUEST_CONTENT_TYPE =
    {
        GET: null, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
        POST: JSON_CONTENT_TYPE, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST
        PUT:  JSON_CONTENT_TYPE, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT
        PATCH: JSON_CONTENT_TYPE, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH
        DELETE: null, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE (https://tools.ietf.org/html/rfc7231#section-4.3.5)
        HEAD: null, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD
        OPTIONS: null, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS
        CONNECT: null, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
        TRACE: null // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE
    };

/**
 * Called prior to the fetch to validate the request object and apply defaults per HTTP method (such as headers).
 *
 * @param {string} method
 * @param {object} request
 * @param {object | string} body
 * @returns {object}
 */
const initializeRequest = (method, request, body) => {
    // Method must be one of the specified HTTP verbs per the HTTP spec
    // @see: https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html
    console.assert(['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'CONNECT', 'TRACE'].includes(method), 'Invalid method: ' + method);

    // Do we have a request object already? If not initialize the request to default to mode: "cors"
    if (!request) {
        request = {mode: "cors"};
    }

    // Are there headers in the request object? If not then create a new headers property.
    if (!request.headers) {
        request.headers = new Headers();
    }

    // Figure out what type of Content-Type we should send.
    let contentType = DEFAULT_REQUEST_CONTENT_TYPE[method];
    if (contentType !== null) {
        request.headers.append('Content-Type', contentType);
    }

    // If body is present then transform (if needed) and add it as a property to the request.
    if (body) {
        request.body = (typeof body) === 'object' ? JSON.stringify(body) : body;
    }

    // Prevent the method from being overridden.
    request.method = method;

    return request;
};

/**
 * Asynchronously perform the fetch
 *
 * @param {string} url
 * @param {object} request
 * @returns {Promise<void>}
 */
const doFetch = (url, request, setResponse, setError) => {
    const fetchData = async () => {
        try {
            const res = await fetch(url, request);

            // Do we have headers in the response?
            if (typeof res.headers !== 'undefined') {
                // Get the Content-Type header
                let contentType = res.headers.get('Content-Type');

                // In case the contentType has a backslash we convert it to forward slash
                contentType = contentType.replace(/\\/, "/");

                // Is response === 'application/json' return the response as JSON, otherwise just return the response.
                if (contentType && contentType === JSON_CONTENT_TYPE) {
                    const json = await res.json();
                    setResponse(json);

                } else {
                    setResponse(res);
                }
            }
        } catch (error) {
            setError(error);
        }
    };
    return fetchData();
};

/**
 * GET HTTP method
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
 * @param {string} url
 * @param {object | Request} options
 * @returns {{response: Response, error: Error}}
 */
export const useGet = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        doFetch(url, initializeRequest('GET', options), setResponse, setError);
    }, []);
    return {response, error};
};

/**
 * POST HTTP method
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST
 * @param {string} url
 * @param {object | Request} options
 * @param {object | string} body
 * @returns {{response: Response, error: Error}}
 */
export const usePost = (url, options, body) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        doFetch(url, initializeRequest('POST', options, body), setResponse, setError);
    }, []);

    return { response , error };
};

/**
 * PATCH HTTP method
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH
 * @param {string} url
 * @param {object | Request} options
 * @param {object | string} body
 * @returns {{response: Response, error: Error}}
 */
export const usePatch = (url, options, body) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        doFetch(url, initializeRequest('PATCH', options, body), setResponse, setError);
    }, []);

    return { response , error };
};

/**
 * PUT HTTP method
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT
 * @param {string} url
 * @param {object | Request} options
 * @param {object | string} body
 * @returns {{response: Response, error: Error}}
 */
export const usePut = (url, options, body) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        doFetch(url, initializeRequest('PUT', options, body), setResponse, setError);
    }, []);

    return { response , error };
};

/**
 * DELETE HTTP method
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE
 * @param {string} url
 * @param {object | Request} options
 * @returns {{response: Response, error: Error}}
 */
export const useDelete = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        doFetch(url, initializeRequest('DELETE', options), setResponse, setError);
    }, []);

    return { response , error };
};

/**
 * HEAD HTTP method
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD
 * @param {string} url
 * @param {object | Request} options
 * @returns {{response: Response, error: Error}}
 */
export const useHead = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        doFetch(url, initializeRequest('HEAD', options), setResponse, setError);
    }, []);

    return { response , error };
};

/**
 * OPTIONS HTTP method
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS
 * @param {string} url
 * @param {object | Request} options
 * @returns {{response: Response, error: Error}}
 */
export const useOptions = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        doFetch(url, initializeRequest('OPTIONS', options), setResponse, setError);
    }, []);

    return { response , error };
};

/**
 * CONNECT HTTP method
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
 * @param {string} url
 * @param {object | Request} options
 * @returns {{response: Response, error: Error}}
 */
export const useConnect = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        doFetch(url, initializeRequest('CONNECT', options), setResponse, setError);
    }, []);

    return { response , error };
};

/**
 * TRACE HTTP method
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE
 * @param {string} url
 * @param {object | Request} options
 * @returns {{response: Response, error: Error}}
 */
export const useTrace = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        doFetch(url, initializeRequest('TRACE', options), setResponse, setError);
    }, []);

    return { response , error };
};

/** 
 * Make a JSON get request with query parameters 
 * @param url Request endpoint 
 * @param params Query parameters 
 * @param headers Optional request headers 
 */
export const makeGetWithQuery = async <T>(
    url: string,
    params: Record<string, string>,
    headers: Record<string, string> = {}
): Promise<T> => {
    const queryString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    const response = await fetch(`${url}?${queryString}`, {
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    });

    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return (await response.json()) as T;
};

// Example usage:
interface HttpBinGetResponse {
    headers: {
        Accept: string
        'User-Agent': string
    }
    url: string
}

const response = await makeGetWithQuery<HttpBinGetResponse>('https://httpbin.org/get', {
    foo: 'bar',
    baz: 'qux'
});
console.log(response);
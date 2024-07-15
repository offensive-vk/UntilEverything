/** 
 * Make a JSON get request 
 * @param url Request endpoint 
 * @param headers Optional request headers 
 */
export const makeGet = async <T>(
    url: string,
    headers: Record<string, string> = {}
): Promise<T> => {
    const response = await fetch(url, {
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

const response = await makeGet<HttpBinGetResponse>('https://httpbin.org/get');
console.log(response);
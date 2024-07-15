/** 
 * Make a JSON delete request 
 * @param url Request endpoint 
 * @param headers Optional request headers 
 */
export const makeDelete = async <T>(
    url: string,
    headers: Record<string, string> = {}
): Promise<T> => {
    const response = await fetch(url, {
        method: 'DELETE',
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
interface HttpBinDeleteResponse {
    message: string
}

const response = await makeDelete<HttpBinDeleteResponse>('https://httpbin.org/delete');
console.log(response);
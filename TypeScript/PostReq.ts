/** 
 * Make a JSON post request 
 * @param url Request endpoint 
 * @param payload Request payload 
 * @param headers Optional request headers 
 */
export const makePost = async <ReqType, ResType>(
    url: string,
    payload: ReqType,
    headers: Record<string, string> = {}
): Promise<ResType> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return (await response.json()) as ResType;
};

// Example usage:
interface HttpBinRequest {
    foo: number;
    bar: boolean;
}

interface HttpBinResponse {
    args: Record<string, string>;
    data: unknown;
    files: Record<string, string>;
    form: Record<string, string>;
    headers: Record<string, string>;
    json: unknown;
    origin: string;
    url: string;
}

const response = await makePost<HttpBinRequest, HttpBinResponse>('https://httpbin.org/post', {
    foo: 100,
    bar: true
});
console.log(response);
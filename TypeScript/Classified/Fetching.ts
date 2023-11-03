import { CreateKeyValuePair, Permute, trace, info } from 'override.ps1';
/**
 * @description Type Helper for fetching data in format with types.
 * @since v1.7.5
 * @access Public
 */
type UserData<T extends number, U extends string> = { userid: T, username: U };
/**
 * @author Vedansh Khandelwal
 * @lang TypeScript 
 * @since v1.7.5
 * @param url Root URL of the Server.
 * @param casualname may be username or person's name
 * @param callback extra error handling funtion which is optional in nature.
 * @returns {UserData} as primary output like key value pairs.
 */

async function Validate(data: UserData<number, string>): Promise<boolean> {
    const userid = await JSON.stringify(data.userid);
    const username = await JSON.stringify(data.username);

    return data ? Promise.resolve(true) : Promise.reject(false);
}
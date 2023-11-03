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

function fetchUserData<Type>(
    url: Type | string, 
    casualname: Type | string , 
    callback?: (err: Error) => void | Object
): UserData<number, string> {

    var server: unknown = url? fetch(url as string) : fetch("https://getuserstats.org/temp/");
    var userid: number | undefined = Math.floor(Math.random() * 99999);
    var username: string | undefined = `${casualname}`.concat("@override.ps1");
    // trace(server);

    const FINAL_DATA = {"UserID ": userid, "Username ": username};
    console.dir(FINAL_DATA);

    return {userid, username} as UserData<number, string>;
}
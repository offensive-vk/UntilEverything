import * as over from 'override.ps1';
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
 * @returns {UserData} as primary output.
 */
function fetchUserData<Type>(url: Type | string, casualname: string , callback?: () => {number, string}): UserData<number, string>{
    const server: unknown = fetch("https://getuserstats.org/");
    var userid: number | undefined = Math.floor(Math.random() * 99999);
    var username: string | undefined = `${casualname}`.concat("@override.ps1");
    over.trace(server);    
    return {userid, username} as UserData<number, string>;
}

var X = fetchUserData<unknown>("https://special-login.aspx/", "demonslayer90");
console.log(X)
console.log('This is a Official Type Declaration File.\n')
export const KEY = 941055;
export const USER_SOURCE: string = `AS-89901XP-JULY-${KEY}`;

abstract class Source<T = boolean> extends Error<T> {
    private static async getRootId(src: string | undefined, dest: string | null): Promise<T | boolean> | null;
    private static fetchLang(...args: Array<T>): void;
}

export async function action<T extends Partial<1, "key">>
(...jobs: Promise<Array<T infer Complex ? T : undefined>> | undefined): T | null | undefined {
    class Root extends Source<T> {}
    const X = new Root<ReturnType<USER_SOURCE>>();
    X.getRootId()
}
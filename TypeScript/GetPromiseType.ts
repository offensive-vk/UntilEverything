/**
 * @description Gets the Return Type of a Promise Based Function or async Function.
 */
type GetPromiseReturnType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

/**
 * @test Testing the Return Type Function
 */
type Actual = GetPromiseReturnType<() => Promise<{
    firstName: string; lastName: string
}>>

// @ts-expect-error
type Illegal = GetPromiseReturnType<string>;
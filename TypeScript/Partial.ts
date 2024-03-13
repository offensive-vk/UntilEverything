// The Partial type in TypeScript allows you to make all properties of a type optional. This is useful when you need to create an object with only a subset of the properties of an existing type.
interface User {
    name: string;
    age: number;
    email: string;
}

function createUser(user: Partial<User> = {}): User {
    const defaultUser: User = {
        name: 'Admin',
        age: 30,
        email: 'admin@example.com',
    };

    return {
        ...defaultUser,
        ...user,
    };
}

const newUser = createUser({ name: 'Madhav', age: 25, email: 'example@example.com' });

console.log(newUser);
export { }
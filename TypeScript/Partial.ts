// The Partial type in TypeScript allows you to make all properties of a type optional. This is useful when you need to create an object with only a subset of the properties of an existing type.
interface User {
    name: string;
    age: number;
    email: string;
}

function createUser(user: Partial<User> = {}): User {
    const defaultUser: User = {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
    };

    return {
        ...defaultUser,
        ...user,
    };
}

const newUser = createUser({ name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' });

console.log(newUser);

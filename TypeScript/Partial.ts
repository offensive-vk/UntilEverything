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

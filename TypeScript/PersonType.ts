interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type _Person = User | Admin;

const persons: _Person[] = [
    { type: 'user', name: 'Max', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Miller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

function isAdmin(person: _Person) {
    return person.type === 'admin';
}

function isUser(person: _Person) {
    return person.type === 'user';
}

function logPerson(person: _Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.name;
    }
    if (isUser(person)) {
        additionalInformation = person.name;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

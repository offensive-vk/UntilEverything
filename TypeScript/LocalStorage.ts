interface User {
  id: string;
  name: string;
  email: string;
}

const STORAGE_KEY = "users";

// Function to get all users from localStorage
function getUsers(): User[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Function to save users to localStorage
function saveUsers(users: User[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

// Create (Add) a new user
function createUser(name: string, email: string): User {
  const users = getUsers();
  const newUser: User = { id: crypto.randomUUID(), name, email };
  users.push(newUser);
  saveUsers(users);
  return newUser;
}

// Read (Get) a user by ID
function getUserById(id: string): User | null {
  const users = getUsers();
  return users.find(user => user.id === id) || null;
}

// Update a user's data
function updateUser(id: string, name?: string, email?: string): boolean {
  const users = getUsers();
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return false;

  if (name) users[userIndex].name = name;
  if (email) users[userIndex].email = email; 
  
  saveUsers(users);
  return true;
}

// Delete a user by ID
function deleteUser(id: string): boolean {
  let users = getUsers();
  const initialLength = users.length;
  users = users.filter(user => user.id !== id);
  
  if (users.length === initialLength) return false;

  saveUsers(users);
  return true;
}

// Example Usage
const user1 = createUser("Vedansh", "vedansh@example.com");
console.log("\n");
console.log("Created:", user1);

const fetchedUser = getUserById(user1.id);
console.log("\n");
console.log("Fetched:", fetchedUser);

const updated = updateUser(user1.id, "Vedansh Updated", "authorized@newmail.com");
console.log("\n");
console.log("Updated:", updated ? "Success" : "Failed");

const deleted = deleteUser(user1.id);
console.log("\n");
console.log("Deleted:", deleted ? "Success" : "Failed");

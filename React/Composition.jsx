/**
 * React has a powerful composition model, 
 * and it is recommended to use composition instead of inheritance to reuse code between components.
 * @param {*} person 
 * @param {*} size 
 * @returns null
 */
export function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
}
  
export function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// Composition in childrens
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

/**
 * Some components don’t know their children ahead of time. 
 * This is especially common for components like Sidebar or Dialog that represent generic “boxes”.
 * We recommend that such components use the special children prop to pass children elements directly into their output.
 */
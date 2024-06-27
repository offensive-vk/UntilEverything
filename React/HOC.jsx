/**
 * A Higher-Order Component (HOC) is an advanced pattern for reusing component logic. 
 * An HOC is a function that takes a component and returns a new component. 
 * HOCs are used to enhance components by adding extra functionality, such as handling authentication, managing state, or connecting to a store.
 */

const UserComponent = ({ user }) => (
    <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
    </div>
);

// Now, let's create an HOC that adds a loading spinner while the user data is being fetched:
const withLoading = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                user: null,
            };
        }

        componentDidMount() {
            // Simulate a data fetch
            setTimeout(() => {
                this.setState({
                    loading: false,
                    user: { name: 'John Doe', email: 'john.doe@example.com' },
                });
            }, 2000);
        }

        render() {
            if (this.state.loading) {
                return <div>Loading...</div>;
            }
            return <WrappedComponent user={this.state.user} {...this.props} />;
        }
    };
};

// Usage of the HOC
const UserWithLoading = withLoading(UserComponent);

// In your main app component
const App = () => (
    <div>
        <UserWithLoading />
    </div>
);


// Let's create an HOC that restricts access to a component based on user roles:
const withAuthorization = (WrappedComponent, allowedRoles) => {
    return class extends React.Component {
        render() {
            const { user } = this.props;
            if (allowedRoles.includes(user.role)) {
                return <WrappedComponent {...this.props} />;
            } else {
                return <div>You do not have permission to view this content.</div>;
            }
        }
    };
};

// Example usage
const AdminComponent = () => <div>Admin Content</div>;

const AdminOnlyComponent = withAuthorization(AdminComponent, ['admin']);

// In your main app component
const App = () => {
    const user = { role: 'user' }; // Change to 'admin' to see the content

    return (
        <div>
            <AdminOnlyComponent user={user} />
        </div>
    );
};

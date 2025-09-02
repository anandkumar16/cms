import { AuthProvider } from './context/AuthContext';
import useAuth from './hooks/useAuth';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

const AuthenticatedApp = () => {
  const { user } = useAuth();
  return user ? <Dashboard /> : <LoginPage />;
};

function App() {
  return (
    <AuthProvider>
      <AuthenticatedApp />
    </AuthProvider>
  );
}

export default App;
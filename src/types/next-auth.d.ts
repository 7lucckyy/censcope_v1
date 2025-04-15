interface User {
  id: string;
  email: string;
  name: string;
}

interface Session {
  user: {
    id: string;
    email: string;
  };
  expires: string;
}

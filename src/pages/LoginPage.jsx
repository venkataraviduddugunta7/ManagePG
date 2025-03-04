
import React from 'react';
import Button from '../components/Button';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Button onClick={() => alert("Welcome to the homepage!")}>Click Me</Button>
    </div>
  );
};

export default LoginPage;

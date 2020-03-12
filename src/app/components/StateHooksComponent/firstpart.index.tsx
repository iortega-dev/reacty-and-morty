import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';

const StateHooksComponent = () => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will be unmount');
    };
  }, []);

  useEffect(() => {
    console.log(`Any state changed Name: ${name}, Address: ${address}`);
  });

  useEffect(() => {
    console.log(`Name changed: ${name}`);
  }, [name]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  return (
    <>
      <div>State Hooks Component</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={onNameChange}
        />
        <input
          type="text"
          placeholder="address"
          value={address}
          onChange={onAddressChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default StateHooksComponent;

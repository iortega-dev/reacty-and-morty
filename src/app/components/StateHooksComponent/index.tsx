import React, { useState, FormEvent, ChangeEvent } from 'react';

const StateHooksComponent = () => {
  const [name, setName] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default StateHooksComponent;

import React, { useState } from "react";

interface Props {
  text: string;
}
interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(0);
  const [user, setUser] = useState<UserData>({ id: 1225, name: "Omitsu" });
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <div>
      <h1>{props.text}</h1>
      <div>{count}</div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <input type="text" value={inputData} onChange={handleInputChange} />
      <h1>{inputData}</h1>
    </div>
  );
};

export default TestComponent;

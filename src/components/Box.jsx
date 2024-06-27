import { useState } from "react";

export default function ListBox({children}) {
  const [isOpen1, setIsOpen1] = useState(true);

  function handleIsOpen1() {
    setIsOpen1(!isOpen1);
  }

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => handleIsOpen1()}>
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && children}
    </div>
  );
}

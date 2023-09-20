import { useState } from "react";

const Toggle = () => {
  const [add, setAdded] = useState("Add to cart");
  return (
    <div className="btn">
      <p>
        <button
          onClick={() => setAdded("Sign in to check out")}
          className="btn"
        >
          {add}
        </button>
      </p>
    </div>
  );
};

export default Toggle;

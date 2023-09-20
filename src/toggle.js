import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setToggled] = useState(true);

  return (
    <div className="btn">
      <p>
        <button onClick={() => setToggled(!isToggled)} className="btn">
          Add to cart
        </button>
      </p>
    </div>
  );
};

export default Toggle;

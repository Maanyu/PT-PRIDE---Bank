import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-serif font-bold text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Call:  8220184664
  </button>
);

export default Button;
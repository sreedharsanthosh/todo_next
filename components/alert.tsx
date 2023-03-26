import React from "react";

export default function Alert({ text }: any) {
  return (
    <div
      className={`bg-red-500 text-white p-3 rounded-md absolute bottom-9 right-9 `}
      role="alert"
    >
      <p className="font-bold">{text}</p>
    </div>
  );
}

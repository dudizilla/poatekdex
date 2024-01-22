import React from "react";
import "./type-tag.css";

export const TypeTag = ({ typeName }: { typeName: string }) => {
  return (
    <div className={`tag ${typeName}`}>
      <p className="type-name">{typeName}</p>
    </div>
  );
};

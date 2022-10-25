import React, { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";

const SystemSearch = () => {
  const [keyword, setKeyword] = useState("");

  const handleSystemSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleEnterKeyCode = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "13") {
      // Do Searching API and Query
    }
  };

  return (
    <form onSubmit={handleSystemSearch}>
      <CustomInput
        name="keyword"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Enter keyword to search..."
        onKeyUp={handleEnterKeyCode}
      />
    </form>
  );
};

export default SystemSearch;

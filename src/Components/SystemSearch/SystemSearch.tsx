import React, { useState } from "react";
import Button from "../Button/Button";
import CustomInput from "../CustomInput/CustomInput";

const SystemSearch = () => {
  const [keyword, setKeyword] = useState("");

  const handleSystemSearch = () => {};

  const handleEnterKeyCode = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "13") {
      handleSystemSearch();
    }
  };

  return (
    <>
      <form>
        <CustomInput
          name="keyword"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder="Enter keyword to search..."
          onKeyUp={handleEnterKeyCode}
        />
      </form>
      <Button
        onClick={handleSystemSearch}
        style={{ textAlign: "center", margin: 0 }}
      >
        Search
      </Button>
    </>
  );
};

export default SystemSearch;

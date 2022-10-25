import React from "react";
import useUIStore from "../../Store/uiStore";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainContainer: React.FC<Props> = ({ children }) => {
  const { showMessage, message } = useUIStore();
  return (
    <div className="ae-page">
      {/* Internet slow notification here */}
      {showMessage && (
        <div className={`ae-message ${message.status}`}>{message.text}</div>
      )}
      {children}
    </div>
  );
};

export default MainContainer;

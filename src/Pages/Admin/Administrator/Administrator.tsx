import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import ButtonContainer from "../../../Components/Container/ButtonContainer";
import { BiMessageSquareAdd } from "react-icons/bi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import { TbLockAccess } from "react-icons/tb";
import Wrapper from "../../../Components/Container/Wrapper";
import { ButtonType } from "../../../config/enum";

const Administrator: React.FC = () => {
  const navigate = useNavigate();

  const forceLogoutAllUser = () => {};
  return (
    <>
      <ButtonContainer>
        <Button
          onClick={() => navigate("/app/administrator/create")}
          icon={BiMessageSquareAdd}
          label="Add New Admin"
        />
        <Button
          onClick={() => navigate("/app/administrator/acitivity_report")}
          icon={HiOutlineDocumentReport}
          label="Admin Activity Report"
        />
        <Button
          onClick={forceLogoutAllUser}
          icon={AiOutlineLogout}
          label="Force Logout All User"
          buttonClass={ButtonType.BAD}
        />
        <Button
          onClick={() => navigate("/app/administrator/uac")}
          icon={TbLockAccess}
          label="User Access Control"
        />
      </ButtonContainer>
      {/* <Wrapper></Wrapper> */}
    </>
  );
};

export default Administrator;

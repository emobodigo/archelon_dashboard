import React from "react";
import Card from "../../../Components/Card/Card";
import Container from "../../../Components/Container/Container";
import Wrapper from "../../../Components/Container/Wrapper";
import SystemSearch from "../../../Components/SystemSearch/SystemSearch";
import Label from "../../../Components/Text/Label";
import { LabelSize } from "../../../config/config";

const Dashboard: React.FC = () => {
  return (
    <Wrapper>
      <Container className="dashboard" columns={3}>
        <Card>
          <Label size={LabelSize.md}>System Search</Label>
          <Container ratio={{ r1: 4, r2: 1 }}>
            <SystemSearch />
          </Container>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;

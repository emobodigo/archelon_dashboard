import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "../../../Components/Card/Card";
import InteractiveCard from "../../../Components/Card/InteractiveCard";
import Container from "../../../Components/Container/Container";
import Wrapper from "../../../Components/Container/Wrapper";
import SystemSearch from "../../../Components/SystemSearch/SystemSearch";
import Label from "../../../Components/Text/Label";
import { LabelSize } from "../../../config/enum";

const Dashboard: React.FC = () => {
  const data = [
    { name: "Fri, 21 Oct", value: 63 },
    { name: "Sat, 22 Oct", value: 7 },
    { name: "Sun, 23 Oct", value: 0 },
    { name: "Mon, 24 Oct", value: 38 },
    { name: "Tue, 25 Oct", value: 51 },
    { name: "Wed, 26 Oct", value: 72 },
  ];
  const dummyOnlineAdmin = [
    {
      admin_id: 1,
      admin_name: "Aquaterra",
      last_active: "2022-10-26 21:54:00",
    },
    {
      admin_id: 2,
      admin_name: "Djohan",
      last_active: "2022-10-26 21:52:00",
    },
  ];
  return (
    <Wrapper>
      <Container columns={2}>
        <Card>
          <Label size={LabelSize.md}>System Search</Label>
          <Container ratio={{ r1: 4, r2: 1 }}>
            <SystemSearch />
          </Container>
        </Card>
        <InteractiveCard label="My Activity">
          <div style={{ height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <p style={{ backgroundColor: "#ffa500" }}>
                          {payload[0].value}
                        </p>
                      );
                    } else {
                      return null;
                    }
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#c71e1e"
                  fill="#c71e1e"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </InteractiveCard>
      </Container>
      <Container columns={3}>
        <InteractiveCard label="Admin" value="7" />
        <InteractiveCard label="Currently Online">
          <ul>
            {dummyOnlineAdmin.map((item) => (
              <Link to={"/app/administrator"} key={item.admin_id}>
                <li>
                  {item.admin_name}
                  <span className="ae-dashboard-list-value">
                    {moment(item.last_active, "YYYY-MM-DD HH:mm:ss").fromNow()}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </InteractiveCard>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;

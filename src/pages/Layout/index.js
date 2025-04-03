import { TabBar } from "antd-mobile";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBillList } from "@/store/modules/billStore";
import "./index.scss";
import {
  BillOutline,
  CalculatorOutline,
  AddCircleOutline,
} from "antd-mobile-icons";

const tabs = [
  {
    key: "/", //直接与路由匹配
    title: "月度收支",
    icon: <BillOutline />,
  },
  {
    key: "/new",
    title: "记账",
    icon: <CalculatorOutline />,
  },
  {
    key: "/year",
    title: "年度账单",
    icon: <AddCircleOutline />,
  },
];

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);

  const navigate = useNavigate();

  const switchRoute = (path) => {
    console.log(path);
    navigate(path);
  };

  return (
    <div className="layout">
      <div className="container">
        <Outlet />
      </div>
      <div className="footer">
        <TabBar onChange={switchRoute}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
};

export default Layout;

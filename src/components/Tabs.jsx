import { useDispatch, useSelector } from "react-redux";

const Tabs = () => {
  const activeMember = useSelector((state) => state.member);
  const dispatch = useDispatch();

  return <TabsWrapper />;
};

export default Tabs;

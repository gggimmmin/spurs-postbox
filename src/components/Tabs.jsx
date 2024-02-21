import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setMember } from "../redux/modules/memberSlice";

const Tabs = () => {
  const activeMember = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const onActiveMember = (e) => {
    if (e.target === e.currentTarget) return;

    dispatch(setMember(e.target.textContent));
  };

  return (
    <TabsWrapper onClick={onActiveMember}>
      <Tab activeMember={activeMember}>SON</Tab>
      <Tab activeMember={activeMember}>Romero</Tab>
      <Tab activeMember={activeMember}>Maddison</Tab>
      <Tab activeMember={activeMember}>Kulusevski</Tab>
    </TabsWrapper>
  );
};

export default Tabs;

const TabsWrapper = styled.ul`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  gap: 12px;
  border-radius: 12px;
`;

const Tab = styled.li`
  ${(props) => {
    if (props.activeMember === props.children) {
      return css`
        background-color: yellow;
        color: black;
      `;
    }
    return css`
      background-color: black;
      color: white;
    `;
  }}

  font-size: 20px;
  width: 120px;
  text-align: center;
  padding: 12px 6px;
  border-radius: 12px;
  cursor: pointer;
`;

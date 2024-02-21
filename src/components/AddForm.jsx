import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addLetter } from "../redux/modules/letterSlice";
import Button from "./common/Button";

const Addform = () => {
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("SON");

  const onAddLetter = (e) => {
    e.preventDefault();
    if (!nickname || !content) return alert("닉네임과 내용은 필수값입니다!");

    const newLetter = {
      id: uuid(),
      nickname,
      content,
      avatar: null,
      writedTo: member,
      createdAt: new Date(),
    };

    dispatch(addLetter(newLetter));
    setNickname("");
    setContent("");
  };

  return (
    <Form onsubmit={onAddLetter}>
      <InputWrapper>
        <label>닉네임 :</label>
        <input
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
          placeholder="최대 20글자까지 작성할 수 있습니다."
          maxLength={20}
        />
      </InputWrapper>
      <InputWrapper>
        <label>내용 :</label>
        <textarea
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </InputWrapper>
      <SelectWrapper>
        <label>누구에게 보낼건가요?</label>
        <select onChange={(e) => setMember(e.target.value)}>
          <option>SON</option>
          <option>Romero</option>
          <option>Maddison</option>
          <option>Kulusevksi</option>
        </select>
      </SelectWrapper>
      <Button text="팬레터 등록" />
    </Form>
  );
};

export default Addform;

const Form = styled.form`
  background-color: gray;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 500px;
  border-radius: 12px;
  margin: 20px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & label {
    width: 80px;
  }
  & input,
  textarea {
    width: 100%;
    height: 80px;
  }
  & textarea {
    resize: none;
    height: 80px;
  }
`;

const SelectWrapper = styled(InputWrapper)`
  justify-content: flex-start;
  & label {
    width: 170px;
  }
`;

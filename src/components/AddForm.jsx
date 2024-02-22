import { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Button from "@components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { addLetter } from "@redux/modules/letterSlice";

export default function AddForm() {
  const dispatch = useDispatch();
  const { avatar, nickname } = useSelector((state) => state.auth);
  //const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("SON");

  const onAddLetter = (event) => {
    event.preventDefault();
    if (!nickname || !content) return alert("닉네임과 내용은 필수값입니다.");

    const newLetter = {
      id: uuid(),
      nickname,
      content,
      avatar,
      writedTo: member,
      createdAt: new Date().toString(),
    };

    dispatch(addLetter(newLetter));
    setContent("");
  };

  return (
    <Form onSubmit={onAddLetter}>
      <InputWrapper>
        <label>닉네임:</label>
        <p>{nickname}</p>
      </InputWrapper>
      <InputWrapper>
        <label>내용:</label>
        <textarea
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
      </InputWrapper>
      <SelectWrapper>
        <label>누구에게 보내실 건가요?</label>
        <select onChange={(event) => setMember(event.target.value)}>
          <option>SON</option>
          <option>Romero</option>
          <option>Maddison</option>
          <option>Kulusevski</option>
        </select>
      </SelectWrapper>
      <Button text="팬레터 등록" />
    </Form>
  );
}

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
    padding: 12px;
  }
  & textarea {
    resize: none;
    height: 80px;
  }
  & p {
    color: white;
    width: 100%;
  }
`;

const SelectWrapper = styled(InputWrapper)`
  justify-content: flex-start;
  & label {
    width: 170px;
  }
`;

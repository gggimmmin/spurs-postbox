import { useState } from "react";
import styled from "styled-components";
import api from "../axios/api";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSignup = () => {
    const data = {
      id,
      password,
      nickname,
    };

    api
      .post("/register", data)
      .then((response) => {
        console.log("회원가입 성공!", response.data);
      })
      .catch((error) => {
        console.log("회원가입 실패:", error.response.data);
      });
  };

  return (
    <LoginBox>
      {mode === "login" ? (
        <>
          <HeaderTitle>로그인</HeaderTitle>
          <InputField type="text" placeholder="아이디 ( 4~10글자 )" />
          <InputField type="password" placeholder="비밀번호 ( 4~15글자 )" />
          <Button>로그인</Button>
          <Button onClick={() => setMode("signup")}>회원가입</Button>
        </>
      ) : (
        <>
          <HeaderTitle>회원가입</HeaderTitle>
          <InputField
            type="text"
            placeholder="아이디 ( 4~10글자 )"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="비밀번호 ( 4~15글자 )"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="닉네임 ( 1~10글자 )"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Button onClick={handleSignup}>회원가입</Button>
          <Button onClick={() => setMode("login")}>로그인</Button>
        </>
      )}
    </LoginBox>
  );
};

export default Login;

const LoginBox = styled.div`
  background-color: lightgray;
  border-radius: 20px;
  width: 500px;
  height: 500px;
  margin: auto;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.header`
  font-size: 30px;
  margin-bottom: 30px;
`;

const InputField = styled.input`
  border: none;
  width: 350px;
  height: 40px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 10px;
`;

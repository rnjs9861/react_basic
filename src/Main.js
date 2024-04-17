import React, { useState } from "react";

const initState = [
  { id: 1, username: "알라딘" },
  { id: 2, username: "이제동" },
  { id: 3, username: "헝가리" },
  { id: 4, username: "임꺽정" },
  { id: 5, username: "미키스" },
];

const Main = () => {
  //member 목록 상태
  const [members, setMembers] = useState(initState);
  //member.id 상태
  const [nextId, setNextId] = useState(6);
  // input 상태
  const [username, setUsername] = useState("");

  //input 이벤트 핸들러
  const onChange = e => {
    setUsername(e.target.value);
  };

  const onClick = () => {
    console.log("추가하자");

    //배열의 내장 함수 concat을 사용하여 새로운 항목을 추가한 배열로 만든다.
    const nextMembers = members.concat({
      id: nextId,
      username: username,
    });
    setNextId(nextId + 1);
    // console.log(nextId);
    setMembers(nextMembers);
    // console.log(nextMembers)
    setUsername("");
    // console.log("추가됐음");
  };

  //remove 이벤트 핸들러
  const onRemove = id => {
    const nextMembers = members.filter(member => member.id !== id);
    setMembers(nextMembers);
  };

  return (
    <div>
      <input onChange={onChange} value={username} />
      <button onClick={onClick}>사용자 추가</button>

      <ul>
        {members.map(member => (
          <li key={member.id} onDoubleClick={() => onRemove(member.id)}>
            {member.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;

import React from "react";
import { useParams } from "react-router-dom";

const data = {
  sonquan: {
    name: "손권",
    description: "이릉대전",
  },
  chaochao: {
    name: "조조",
    description: "관도대전",
  },
  Liubi: {
    name: "유비",
    description: "적벽대전",
  },
};

const Profile = () => {
  // useParams : URL 파라미터의 값을 조회 할 수 있게 해준다.
  const params = useParams();

  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      <div>
        {profile ? (
          <div>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
          </div>
        ) : (
          <p>존재하지 않는 프로필입니다.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;

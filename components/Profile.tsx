import Image from "next/image";
import Icon from "./Icon";
import ProfilePhoto from "@/public/images/profile_photo.png";

const Profile = () => {
  return (
    <div className="relative z-10 flex justify-center items-center w-full bg-white py-10 px-6 space-x-6">
      {/* 프로필 이미지 영역 */}
      <div className="w-24 h-24 rounded-full overflow-hidden">
        <Image
          src={ProfilePhoto}
          alt="Profile"
          width={96}
          height={96}
          className="object-cover"
        />
      </div>

      <div>
        {/* 소개글 영역 */}
        <h1 className="text-lg font-bold">String_main</h1>
        <p className="text-sm">
          Hi! I’m a front-end developer and I want to fly in the sky.
        </p>

        {/* 버튼 영역 */}
        <div className="flex items-center space-x-3 mt-2">
          <a href="mailto:yhj2756@naver.com">
            <Icon name="mail" />
          </a>
          <a href="https://github.com/yoohyunju">
            <Icon name="github" />
          </a>
          <a href="https://www.linkedin.com/in/%ED%98%84%EC%A3%BC-%EC%9C%A0-1b8331254/">
            <Icon name="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;

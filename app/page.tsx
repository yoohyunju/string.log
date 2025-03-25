import Image from "next/image";
// TODO: 경로명 변경
import BackGroundImg from "@/public/images/sky.png";
import Profile from "@/components/Profile";
import PostList from "@/components/posts/PostList";

export default function Home() {
  return (
    <>
      <Image
        src={BackGroundImg}
        alt="메인 배경 이미지"
        objectFit="cover"
        className="relative w-full top-0 bg-cover bg-center -z-1"
      />
      <Profile />
      <PostList />
    </>
  );
}

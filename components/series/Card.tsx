import Image from "next/image";
import testPhoto from "@/public/images/test.jpeg";

const Card = () => {
  return (
    <div className="w-full">
      <Image
        src={testPhoto}
        alt="썸네일"
        objectFit="cover"
        width={500}
        height={300}
        className="relative w-full top-0 bg-cover bg-center -z-1"
      />
      <div className="w-fit mt-4">
        <h3 className="text-lg">Title</h3>
        <div>3 posts</div>
      </div>
    </div>
  );
};

export default Card;

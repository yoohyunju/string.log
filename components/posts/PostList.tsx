import TagList from "../tag/TagList";
import PostCounter from "./PostCounter";

const PostList = () => {
  const posts = [
    {
      id: 1,
      title: "Title",
      date: "December 10, 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: [
        { id: 1, tagName: "tag1" },
        { id: 2, tagName: "tag2" },
      ],
    },
    {
      id: 2,
      title: "Title",
      date: "December 10, 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: [{ id: 1, tagName: "tag1" }],
    },
    {
      id: 3,
      title: "Title",
      date: "December 10, 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: [
        { id: 1, tagName: "tag1" },
        { id: 2, tagName: "tag2" },
        { id: 3, tagName: "tag3" },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mb-32">
      <div className="max-w-2xl">
        <PostCounter />

        {posts.map((post) => (
          <div key={post.id} className=" border-b border-black pt-10 pb-3">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm mb-2">{post.date}</p>
            <p className="text-sm mb-2">{post.content}</p>
            <TagList tags={post.tags} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;

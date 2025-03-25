import PostList from "@/components/posts/PostList";
import SearchBar from "@/components/SearchBar";
import TagList from "@/components/tag/TagList";

export default function Search() {
  const tags = [
    { id: 1, tagName: "JavaScript" },
    { id: 2, tagName: "React" },
    { id: 3, tagName: "Next.js" },
    { id: 4, tagName: "HTML" },
    { id: 5, tagName: "supabase" },
    { id: 6, tagName: "etc" },
    { id: 7, tagName: "CSS" },
    { id: 8, tagName: "tailwind CSS" },
    { id: 9, tagName: "CS" },
    { id: 10, tagName: "Algorithm" },
    { id: 11, tagName: "Project" },
    { id: 12, tagName: "Tips" },
    { id: 13, tagName: "JavaScript" },
    { id: 14, tagName: "React" },
    { id: 15, tagName: "Next.js" },
    { id: 16, tagName: "HTML" },
    { id: 17, tagName: "supabase" },
    { id: 18, tagName: "etc" },
    { id: 19, tagName: "CSS" },
    { id: 20, tagName: "tailwind CSS" },
    { id: 21, tagName: "tailwind CSS" },
  ];

  return (
    <main className="relative w-full min-h-screen pt-12 px-32">
      <SearchBar />
      <div className="flex flex-wrap justify-center items-center">
        <TagList tags={tags} />
      </div>
      <PostList />
    </main>
  );
}

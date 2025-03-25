type TagProps = {
  tagName: string;
};

export default function Tag({ tagName }: TagProps) {
  return (
    <div className="flex items-center mt-2 mr-2 px-3 py-1 border border-black rounded-full text-sm whitespace-nowrap">
      {tagName}
    </div>
  );
}

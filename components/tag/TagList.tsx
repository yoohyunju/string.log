import Tag from "./Tag";

type TagListProps = {
  tags: {
    id: number;
    tagName: string;
  }[];
};

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap max-w-lg my-8 h-8 h-fit">
      {tags.map((tag) => (
        <Tag key={tag.id} tagName={tag.tagName} />
      ))}
    </div>
  );
}

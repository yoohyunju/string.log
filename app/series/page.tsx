import Card from "@/components/series/Card";

export default function Series() {
  return (
    <main className="relative w-full min-h-screen pt-40 px-96">
      <h1 className="text-3xl font-bold">Series</h1>
      <div className="grid grid-cols-3 gap-10 mx-auto p-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

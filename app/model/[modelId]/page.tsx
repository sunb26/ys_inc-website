export default async function BoatModelPage({ params }: { params: { modelId: string } }) {
  const { modelId } = await params;

  return (
    <div>
      <h1 className="p-64">{modelId}</h1>
    </div>
  );
}
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  console.log("Project slug:", slug);
  return (
    <div>
      <h1>Project Page</h1>
      <p>This is the project page.</p>
      <p>Project slug: {slug}</p>
    </div>
  );
}

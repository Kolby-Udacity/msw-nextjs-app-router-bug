export default async function Home() {
  const programs = await getPrograms();

  return (
    <main>
      {programs.map((program) => (
        <div key={program.id}>{program.name}</div>
      ))}
    </main>
  );
}

export async function getPrograms(): Promise<any[]> {
  const response = await fetch("https://someurl.com", {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
    query FetchPrograms {
      allProgram {
        id
        name
        description
      }
    }
  `,
    }),
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  const unknownData = await response.json();

  const {
    data: { programs },
  } = unknownData as any;

  return programs;
}

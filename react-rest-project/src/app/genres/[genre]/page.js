export default async function Genre({ params }) {
  const genre = (await params).genre;
  return (
    <div> 
      <main> 
        <p>
            {
              genre
            }
        </p>
      </main>
      
    </div>
  );
}
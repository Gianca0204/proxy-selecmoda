export const config = {
  runtime: "edge",
};

export default async function handler(request) {
  try {
    const response = await fetch(
      "http://api.selectmoda.com:85/api/Producto/GetProductos?login=BRITISHOP&TEMPORADA=Q2%202025",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6ImYzYjJmNzMzLWVhOTUtNGYxZC05MDk3LWY0M2IzZTY2MmMwMyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJCUklUSVNIT1AiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImZkZTNiNTVjLTUwMGEtNGI3MS1hYWQyLThkMWUxZTU4ZTlhMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6Im9jdC4gbHUuIDIwIDIwMjUgMDk6NTE6MDIgIiwibmJmIjoxNzYwODY3NDYyLCJleHAiOjE3NjA5NDY2NjIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxODgiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MTg4In0.NLW5IZ8UoycuT63bdPgxbxY1kb-pvg2waNwksd6AaGU",
          Accept: "text/plain",
        },
      }
    );

    const data = await response.text();
    return new Response(data, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


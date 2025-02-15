Deno.serve(async (request) => {
    const file = await Deno.readFile("index.html");
    return new Response(new TextDecoder().decode(file), {
      headers: { "Content-Type": "text/html" },
    });
});
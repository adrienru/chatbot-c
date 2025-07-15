export async function POST(req: Request) {
  const body = await req.json();
  const message = body.message;

  const res = await fetch("https://chat-gtp-free.p.rapidapi.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "chat-gtp-free.p.rapidapi.com",
      "x-rapidapi-key": "4a7fd1ad4fmsh51a51ff4c208fa2p11c6eejsn5044e898d943"
    },
    body: JSON.stringify({
      chatId: "demo-chat-id",
      messages: [
        { role: "system", content: "You are a virtual assistant." },
        { role: "user", content: message }
      ]
    })
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the chicken cross the road?",
      content: "To get to the other side!",
    },
    {
      id: 2,
      title: "Why don’t scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 3,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
    {
      id: 4,
      title: "How does a penguin build its house?",
      content: "Igloos it together!",
    },
    {
      id: 5,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
  ];
  res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});

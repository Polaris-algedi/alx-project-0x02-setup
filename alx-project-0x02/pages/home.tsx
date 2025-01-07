import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import { title } from "process";

export default function Home() {
  const cards = [
    {
      title: "Secret of friendship",
      content:
        "The secret of friendship lies in trust, understanding, and shared moments. It's about being there, without judgment, and offering support in both laughter and silence. True friends accept each other for who they are and grow together through life's ups and downs.",
    },
    {
      title: "The rain is falling.",
      content:
        "The rain is falling softly, tapping gently on the windows, bringing a peaceful rhythm to the world outside. Each drop seems to whisper calm, washing the air with freshness.",
    },
    {
      title: "The new friend",
      content:
        "The new friend arrived with a warm smile and open heart, bringing fresh laughter and stories to the group. In just a few days, their kindness and genuine curiosity made them feel like they had always been part of the circle. A new chapter of friendship had begun.",
    },
  ];
  return (
    <>
      <Header />
      {cards.map((card) => (
        <Card key={card.title} title={card.title} content={card.content} />
      ))}
      <h1>Home</h1>
    </>
  );
}

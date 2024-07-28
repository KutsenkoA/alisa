import { Metadata } from "next";
import style from "./../page.module.css";

export const metadata: Metadata = {
  title: "Alisa Kutsenko - Backyard",
  description: "...",
};

export default function Page() {
  return (
    <section className={style.section}>
      <iframe
        className={style.youtubeVideo}
        src="https://www.youtube.com/embed/lLAIjDAnsRY?si=fXE7QVLeBsI6gFLJ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
}

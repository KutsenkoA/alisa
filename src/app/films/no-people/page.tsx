import { Metadata } from "next";
import style from "./../page.module.css";

export const metadata: Metadata = {
  title: "Alisa Kutsenko - No People Here Apart From Myself",
  description: "...",
};

export default function Page() {
  return (
    <section className={style.section}>
      <iframe
        className={style.youtubeVideo}
        src="https://www.youtube.com/embed/e6dIiqlkunE?si=FLvP3YDx_wCUxN8N"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
}

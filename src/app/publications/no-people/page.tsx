import { Metadata } from "next";
import style from "./page.module.css";

export const metadata: Metadata = {
  title: "Alisa Kutsenko - No People Here Apart From Myself",
  description: "...",
};

export default function Page() {
  const bookImages = new Array(21)
    .fill(0)
    .map((_, i) => (
      <img
        key={i}
        src={`/publications/no-people/book-images/${i + 1}.jpg`}
        alt="book image"
        className={style.bookImages}
      />
    ));
  return (
    <section className={style.section}>
      <div className={style.bookBackground}>
        <p className={style.text}>
          The Book sets the theoretical framework, it introduces the layers
          within the work: narratives, spaces, fragments, philosophical
          references.
        </p>
      </div>

      <video muted autoPlay loop className={style.noPeople}>
        <source
          src="/publications/no-people/no-people-book-video.mp4"
          type="video/mp4"
        />
      </video>

      <video muted autoPlay loop className={style.noPeopleMobile}>
        <source
          src="/publications/no-people/no-people-book-video-mobile.mp4"
          type="video/mp4"
        />
      </video>

      <div className={style.book}>{bookImages}</div>
    </section>
  );
}

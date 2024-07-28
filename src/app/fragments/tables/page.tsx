import { Metadata } from "next";
import style from "./page.module.css";

export const metadata: Metadata = {
  title: "Alisa Kutsenko - Tables",
  description: "...",
};

export default function Page() {
  const tableImages = new Array(13)
    .fill(0)
    .map((_, i) => (
      <img
        key={i}
        src={`/fragments/tables/table/${i + 1}.jpg`}
        alt="image"
        className={style.tableImage}
      />
    ));

  return (
    <section className={style.section}>
      <img
        src="/fragments/tables/axo.jpg"
        alt="axo view"
        className={style.axo}
      />
      <img
        src="/fragments/tables/top.jpg"
        alt="top view"
        className={style.top}
      />
      <img
        src="/fragments/tables/top_mobile.jpg"
        alt="front"
        className={style.topM}
      />
      .
      <video muted autoPlay loop className={style.tableVideo}>
        <source src="/fragments/tables/table-video.mp4" type="video/mp4" />
      </video>
      <div className={style.table}>{tableImages}</div>
    </section>
  );
}

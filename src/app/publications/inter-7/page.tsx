import { Metadata } from "next";
import style from "./page.module.css";

export const metadata: Metadata = {
  title: "Alisa Kutsenko - Motion After Land",
  description: "...",
};

export default function Page() {
  const interImages = new Array(11)
    .fill(0)
    .map((_, i) => (
      <img
        key={i}
        src={`/publications/inter-7/inter-7-images/${i + 1}.jpg`}
        alt="book image"
        className={style.interImages}
      />
    ));
  return (
    <section className={style.section}>
      <video muted autoPlay loop className={style.interVideo}>
        <source src="/publications/inter-7/inter_7_axo.mp4" type="video/mp4" />
      </video>
      <video muted autoPlay loop className={style.interVideo}>
        <source src="/publications/inter-7/inter_7_top.mp4" type="video/mp4" />
      </video>
      <div className={style.inter}>{interImages}</div>
    </section>
  );
}

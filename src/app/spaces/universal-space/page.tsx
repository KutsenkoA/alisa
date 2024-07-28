import { Metadata } from "next";
import style from "./page.module.css";

export const metadata: Metadata = {
  title: "Alisa Kutsenko - Universal Space",
  description: "...",
};

export default function Page() {
  return (
    <section className={style.section}>
      <img
        src="/spaces/universal-space/site_plan_collage.jpg"
        alt="site plan"
        className={style.image}
      />

      <img
        src="/spaces/universal-space/render-1.jpg"
        alt="photo"
        className={style.imageRender}
      />

      <img
        src="/spaces/universal-space/render-2.jpg"
        alt="photo"
        className={style.imageRender}
      />

      <img
        src="/spaces/universal-space/render-3.jpg"
        alt="photo"
        className={style.imageRender}
      />

      <img
        src="/spaces/universal-space/render-4.jpg"
        alt="photo"
        className={style.imageRender}
      />

      <img
        src="/spaces/universal-space/render-5.jpg"
        alt="photo"
        className={style.imageRender}
      />
    </section>
  );
}

import { VideoGallery } from "@alisa/components";
import style from "./page.module.css";
export default function Page() {
  return (
    <section className={style.section}>
      <p className={style.isleText}>
        Isle of Mull, Scotland
        <br />
        13.01.2024 - 20.01.2024
      </p>

      <video muted autoPlay loop className={style.modelVideo}>
        <source src="/fragments/mull/models2.mp4" type="video/mp4" />
      </video>

      <video muted autoPlay loop className={style.fiveModelsTopVideo}>
        <source src="/fragments/mull/5-models-top.mp4" type="video/mp4" />
      </video>

      <VideoGallery
        background={"/fragments/mull/background.jpg"}
        videoSources={["/fragments/mull/water.mp4"]}
      />

      <img
        src="/fragments/mull/model-top.jpg"
        alt="top view"
        className={style.imageModel}
      />

      <div className={style.imageContainer}>
        <p className={style.imageText}>
          <strong>From Henry Bergson, “Creative Evolution”</strong>
          <br />
          <br />
          “The impetus of life, of which we are speaking, consists in a need of
          creation”
        </p>
        <img
          src="/fragments/mull/model-side.jpg"
          alt="side view"
          className={style.imageModel}
        />
      </div>

      <div className={style.imageContainer}>
        <p className={style.imageText + " " + style.imageText1}>
          “The idea that it [the mind] forms of pure space is only the schema of
          the limit at which the movement would end. Once in possession of the
          form of space, mind uses it like a net of meshes that can be made and
          unmade at will, which, thrown over matter, divides it as the needs of
          our action demand.”
        </p>
        <img
          src="/fragments/mull/model-front.jpg"
          alt="front view"
          className={style.imageModel}
        />
      </div>
    </section>
  );
}

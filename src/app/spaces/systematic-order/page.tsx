import { VideoGallery } from "@alisa/components";
import style from "./page.module.css";
export default function Page() {
  return (
    <section className={style.section}>
      <div className={style.systemContainer}>
        <p className={style.text1}>
          Suddenly, the sky cleared above the third valley, and a golden light
          filled the scene. Following one of the streams, a flock of sheep
          hurried to the valley, passing the author and seeming not to take the
          smallest notice of them. Burning with curiosity, the author followed.
        </p>
      </div>

      <VideoGallery
        background={"/spaces/systematic-order/background.jpg"}
        videoSources={[
          "/spaces/systematic-order/valley-1.mp4",
          "/spaces/systematic-order/valley-2.mp4",
          "/spaces/systematic-order/valley-3.mp4",
        ]}
      />

      <video muted autoPlay loop className={style.video}>
        <source src="/spaces/systematic-order/squares.mp4" type="video/mp4" />
      </video>

      <img
        src="/spaces/systematic-order/plan.jpg"
        alt="plan"
        className={style.imagePlan}
      />

      <img
        src="/spaces/systematic-order/plan_mobile.jpg"
        alt="plan"
        className={style.imagePlanM}
      />

      <img
        src="/spaces/systematic-order/elevation.jpg"
        alt="elevation"
        className={style.imageElevation}
      />
      <img
        src="/spaces/systematic-order/collage.jpg"
        alt="collage"
        className={style.imageCollage}
      />

      <img
        src="/spaces/systematic-order/collage-mobile.jpg"
        alt="collage"
        className={style.imageCollageM}
      />

      <img
        src="/spaces/systematic-order/map_1_25000.jpg"
        alt="map"
        className={style.imageMap}
      />

      <img
        src="/spaces/systematic-order/map_1_25000_mobile.jpg"
        alt="collage"
        className={style.imageCollageM}
      />

      <img
        src="/spaces/systematic-order/1_25000_cut_1_mobile.jpg"
        alt="map"
        className={style.imageCut}
      />

      <img
        src="/spaces/systematic-order/1_25000_cut_2_mobile.jpg"
        alt="map"
        className={style.imageCut}
      />

      <img
        src="/spaces/systematic-order/1_25000_cut_3_mobile.jpg"
        alt="map"
        className={style.imageCut}
      />
    </section>
  );
}

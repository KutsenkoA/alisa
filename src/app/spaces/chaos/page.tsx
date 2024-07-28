import { VideoGallery } from "@alisa/components";
import { Metadata } from "next";
import style from "./page.module.css";

export const metadata: Metadata = {
  title: "Alisa Kutsenko - Chaos",
  description: "...",
};

export default function Page() {
  return (
    <section className={style.section}>
      <div className={style.arrowsContainer}>
        <p className={style.text1}>
          Following the sheep they stepped out, finding that thick grey clouds
          had covered the scenery again. No more houses or circles or valleys
          were seen now, only the pure mess.
        </p>
      </div>

      <video muted autoPlay loop className={style.videoSingle}>
        <source src="/spaces/chaos/sheep_color.mp4" type="video/mp4" />
      </video>

      <VideoGallery
        background={"/spaces/chaos/background.jpg"}
        videoSources={[
          "/spaces/chaos/swing.mp4",
          "/spaces/chaos/dead_sheep.mp4",
        ]}
      />

      <video muted autoPlay loop className={style.videoSingle}>
        <source src="/spaces/chaos/sheep-distorted.mp4" type="video/mp4" />
      </video>

      <video muted autoPlay loop className={style.videoSingle}>
        <source src="/spaces/chaos/setup-1.mp4" type="video/mp4" />
      </video>

      <img
        src="/spaces/chaos/plan.jpg"
        alt="plan"
        className={style.imagePlan}
      />

      <img
        src="/spaces/chaos/plan_mobile.jpg"
        alt="plan"
        className={style.imagePlanM}
      />

      <img
        src="/spaces/chaos/elevation.jpg"
        alt="elevation"
        className={style.imageElevation}
      />

      <img
        src="/spaces/chaos/collage.jpg"
        alt="collage"
        className={style.imageCollage}
      />

      <img
        src="/spaces/chaos/collage_mobile.jpg"
        alt="collage"
        className={style.imageCollageM}
      />

      <img
        src="/spaces/chaos/map_1_1000.jpg"
        alt="map"
        className={style.imageMap}
      />

      <img
        src="/spaces/chaos/map_1_1000_mobile.jpg"
        alt="collage"
        className={style.imageCollageM}
      />

      <img
        src="/spaces/chaos/plan_cut_1_mobile.jpg"
        alt="map"
        className={style.imageCut}
      />

      <img
        src="/spaces/chaos/plan_cut_2_mobile.jpg"
        alt="map"
        className={style.imageCut}
      />

      <img
        src="/spaces/chaos/plan_cut_3_mobile.jpg"
        alt="map"
        className={style.imageCut}
      />
    </section>
  );
}

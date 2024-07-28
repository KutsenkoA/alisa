import { Metadata } from "next";
import style from "./page.module.css";

export const metadata: Metadata = {
  title: "Alisa Kutsenko - Home",
  description: "...",
};

export default function Page() {
  const setupImages = new Array(15)
    .fill(0)
    .map((_, i) => (
      <img
        key={i}
        src={`/spaces/home/setup/${i + 1}.jpg`}
        alt="setup"
        className={style.setupImage}
      />
    ));

  return (
    <section className={style.section}>
      <video muted autoPlay loop className={style.setupGreen}>
        <source src="/spaces/home/setup_green.mp4" type="video/mp4" />
      </video>

      <div className={style.text}>
        <h4>From Gilles Deleuze, “Difference and Repetition”</h4>
        <p>
          “The theatre of repetition is opposed to the theatre of
          representation, just as movement is opposed to the concept and to
          representation…”
        </p>
      </div>

      <video muted autoPlay loop className={style.setupHome}>
        <source src="/spaces/home/setup_home.mp4" type="video/mp4" />
      </video>

      <div className={style.text}>
        <p>
          “... do not add a second and a third time to the first, but carry the
          first to the ‘nth’ power.”
        </p>
      </div>

      <div className={style.setup}>{setupImages}</div>

      <div className={style.text}>
        “Representation - finite whole that mediates away differences.”
      </div>

      <video muted autoPlay loop className={style.setupHome}>
        <source src="/spaces/home/mushroom.mp4" type="video/mp4" />
      </video>

      <img
        src="/spaces/home/setup_home_axo.jpg"
        alt="home axo"
        className={style.image}
      />

      <img
        src="/spaces/home/setup_home_plan.jpg"
        alt="home plan"
        className={style.plan}
      />
      <img
        src="/spaces/home/setup_home_plan_mobile.jpg"
        alt="home plan"
        className={style.planM}
      />

      <img
        src="/spaces/home/home_axo.jpg"
        alt="home axo"
        className={style.image}
      />
    </section>
  );
}

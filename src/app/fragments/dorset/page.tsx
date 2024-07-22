import style from "./page.module.css";
export default function Page() {
  const rainImages = new Array(6)
    .fill(0)
    .map((_, i) => (
      <img
        key={i}
        src={`/fragments/dorset/rain/${i + 1}.jpg`}
        alt="rain"
        className={style.rainImage}
      />
    ));

  const detailsImages = new Array(6)
    .fill(0)
    .map((_, i) => (
      <img
        key={i}
        src={`/fragments/dorset/details/${i + 1}.jpg`}
        alt="rain"
        className={style.detailsImage}
      />
    ));

  return (
    <section className={style.section}>
      <img
        src="/fragments/dorset/photo_front.jpg"
        alt="rain, night"
        className={style.imageSmall}
      />

      <div className={style.text}>
        <h4>From Sara Ahmed, “Queer Phenomenology”</h4>
        <p>
          “I arrived at phenomenology because, in part, the concept of
          orientation led me there. This point can be made quite simply:
          orientations involve different ways of registering the proximity of
          objects and others. Orientations shape not only how we inhabit space,
          but how we apprehend this world of shared inhabitance, as well as
          ‘‘who’’ or ‘‘what’’ we direct our energy and attention toward.”
        </p>
      </div>
      <img
        src="/fragments/dorset/photo_rain.jpg"
        alt="rain, night"
        className={style.image}
      />

      <div className={style.rain}>{rainImages}</div>

      <div className={style.text}>
        <h4>From Gilles Deleuze, “Cinema 2”</h4>
        <p>
          “The connection of the parts of space is not given because it can come
          about only from the subjective point of view of a character who is,
          nevertheless, absent, or has even disappeared, not simply out of
          frame, but passed into the void. In The Outcry, Irma is not only the
          obsessive, subjective thought of the hero who runs away to forget, but
          the imaginary gaze under which this flight takes place and connects
          its own segments: a gaze which becomes real again at the moment of
          death. And above all in The Adventure, the vanished woman causes an
          indeterminable gaze to weigh on the couple - which gives them the
          continual feeling of being spied on, and which explains the lack of
          co-ordination of their objective movements, when they flee whilst
          pretending to look for her.”
        </p>
      </div>
      <img
        src="/fragments/dorset/photo_night.jpg"
        alt="night"
        className={style.image}
      />

      <video muted autoPlay loop className={style.videoElements}>
        <source src="/fragments/dorset/elements.mp4" type="video/mp4" />
      </video>

      <video muted autoPlay loop className={style.videoCollage}>
        <source src="/fragments/dorset/collage.mp4" type="video/mp4" />
      </video>

      <img src="/fragments/dorset/plan.jpg" alt="plan" className={style.plan} />

      <img
        src="/fragments/dorset/green-photo.jpg"
        alt="sheep"
        className={style.image}
      />

      <div className={style.details}>{detailsImages}</div>
    </section>
  );
}

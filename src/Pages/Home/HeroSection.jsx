export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Mark</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Video</span>{" "}
            <br />
            Editor
          </h1>
          <p className="hero--section-description">
            As a dedicated video editor, I transform raw footage into compelling visual stories. My journey in video editing began with a passion for storytelling and a keen eye for detail. Over the years, I’ve honed my skills in various editing software, including Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve. My portfolio showcases a diverse range of projects, from corporate videos and commercials to music videos and short films. Each project is a testament to my ability to blend creativity with technical precision. 
            <br />
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}

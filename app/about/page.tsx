// Images
import aboutImg from "@/assets/images/about.jpg";

// ------------

function About() {
  return (
    <main className="page-background">
      <div id="content" className="site-content">
        <div className="content-holder center-relative content-1170">
          <h1 className="entry-title page-title center-text">
            My name is Peter Williams <br />
            and I’m designer &amp; photographer
            <br />
          </h1>

          <img className="page-featured-image" src={aboutImg.src} alt="" />

          <div className="one_half">
            <ul className="timeline-holder">
              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  Flatland tingling of the spine, a billion trillion science
                  paroxysm of global death permanence
                </div>
                <div className="timeline-event-date">2015</div>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  Rings of Uranus the only home we’ve ever known. Permanence of
                  the stars Tunguska event drake equation encyclopaedia
                  galactica great turbulent
                </div>
                <div className="timeline-event-date">2017</div>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  Gathered by gravity preserve and cherish that pale blue dot
                  quasar, the carbon in our apple pies pudding
                </div>
                <div className="timeline-event-date">2018</div>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  Tendrils of gossamer clouds, the ash of stellar alchemy
                  tendrils of true gossamer clouds vangelis the sky calls to us
                  rich in heavy atoms something
                </div>
                <div className="timeline-event-date">2020</div>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  Muse about descended from astronomers shores of the cosmic
                  ocean across the centuries encyclopaedia galactica Euclid
                  intelligent beings. As a patch of light Apollonius of Perga,
                  rings of Uranus network for which there’s little good evidence
                  something fine.
                </div>
                <div className="timeline-event-date">2025</div>
              </li>
            </ul>
          </div>

          <div className="one_half last">
            Bearable only through love hydrogen atoms bits of moving fluff
            culture shores of the cosmic ocean paroxysm of global death rich in
            heavy atoms with pretty stories for which there’s little good
            evidence something incredible is waiting to be known not a sunrise
            but a galaxyrise shores of the cosmic ocean inconspicuous motes of
            rock.
            <br />
            <br />
            Galaxies network of wormholes birth extraplanetary Apollonius of
            Perga adipisci velit! Muse about descended from astronomers shores
            of the cosmic ocean across the centuries encyclopaedia galactica
            Euclid intelligent beings. As a patch of light Apollonius of Perga,
            rings of Uranus network of wormholes bits of moving fluff,
            consciousness the only home we’ve ever known. Galaxies, corpus
            callosum radio telescope. Globular star cluster, light years made in
            the interiors of collapsing stars cosmic ocean with pretty stories
            for which there’s little good evidence something incredible.
          </div>
          <div className="clear"></div>

          <div className="social-holder center-text top-60">
            <a className="social-text" href="https://www.twitter.com/">
              TWITTER
            </a>
            <a className="social-text" href="https://www.facebook.com/">
              FACEBOOK
            </a>
            <a className="social-text" href="https://www.instagram.com/">
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;

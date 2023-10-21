import Link from "next/link";

// Images
import postImg from "@/assets/images/blog/posts/post_01.jpg";

// --------------

const Single = () => {
  return (
    <main className="single single-post">
      <div id="content" className="site-content">
        <div className="content-holder center-relative content-1170">
          <h1 className="entry-title page-title">
            Hundreds of thousands a still more glorious nights around art table
          </h1>
          <img src={postImg.src} alt="" />
          <p className="img-caption">Self portrait of a model Anna Williams</p>
          <div className="single-content-wrapper content-960 center-relative top-70">
            <div className="post-info-wrapper">
              <div className="entry-info">
                <div>
                  <div className="text-holder">AUTHOR</div>
                  <div className="author-nickname">
                    <Link href="" title="Posts by CocoBasic" rel="author">
                      CocoBasic
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="text-holder">DATE</div>
                  <div className="entry-date published">March 21, 2018</div>
                </div>
                <div>
                  <div className="text-holder">CATEGORY</div>
                  <div className="cat-links">
                    <ul>
                      <li>
                        <Link href="">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="entry-content">
              <p>
                Bearable only through love hydrogen atoms bits of moving fluff
                culture shores of the cosmic ocean paroxysm of global death rich
                in heavy atoms with pretty stories for which there’s little good
                evidence something incredible is waiting to be known not a
                sunrise but a galaxyrise shores of the cosmic ocean
                inconspicuous motes of rock.
              </p>
              <p>
                Galaxies network of wormholes birth extraplanetary Apollonius of
                Perga adipisci velit! Muse about descended from astronomers
                shores of the cosmic ocean across the centuries encyclopaedia
                galactica Euclid intelligent beings. As a patch of light
                Apollonius of Perga, rings of Uranus network of wormholes bits
                of moving fluff, consciousness the only home we’ve ever known.
                Galaxies, corpus callosum radio telescope. Globular star
                cluster, light years made in the interiors of collapsing stars
                cosmic ocean with pretty stories for which there’s little good
                evidence something incredible is waiting to be known
                explorations!
              </p>

              <blockquote>
                Birth dispassionate terrestrial for observer star stuff
                harvesting light something incredible is prominant waiting to be
                known descended from astronomers billions.
              </blockquote>

              <p>
                Brain is the seed of intelligence ship of the imagination hearts
                of the stars realm of the galaxies. At the edge of forever.
                Hearts of the stars of brilliant syntheses astonishment not a
                sunrise but a galaxyrise. Finite but unbounded how far away,
                corpus callosum nisi ut aliquid ex ea commodi consequatur? Quis
                autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur. Encyclopaedia galactica are
                creatures of the cosmos shores of the cosmic ocean. Cosmic ocean
                the sky calls to us consectetur cosmic ocean and billions upon
                billions upon billions upon billions upon billions upon billions
                upon billions!
              </p>

              <div className="tags-holder">
                <Link href="" rel="tag">
                  BLOGGING
                </Link>
                <Link href="" rel="tag">
                  INSPIRATION
                </Link>
                <Link href="" rel="tag">
                  WEBSITE
                </Link>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Single;

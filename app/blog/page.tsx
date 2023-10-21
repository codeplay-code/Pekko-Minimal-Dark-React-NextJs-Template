import Link from "next/link";

// Images
import blogImg01 from "@/assets/images/blog/blog_01.jpg";
import blogImg02 from "@/assets/images/blog/blog_02.jpg";
import blogImg03 from "@/assets/images/blog/blog_03.jpg";
import blogImg04 from "@/assets/images/blog/blog_04.jpg";

// ------------

function Blog() {
  return (
    <main className="page-background">
      <div id="content" className="site-content">
        <div className="content-holder center-relative content-1170">
          <div className="blog-holder">
            <article className="blog-item-holder">
              <div className="entry-holder">
                <h2 className="entry-title">
                  <Link href="/blog/single">
                    Hundreds of thousands a still more gloriouas nights around
                    art table
                  </Link>
                </h2>
                <img src={blogImg01.src} alt="" />
                <ul className="entry-info">
                  <li className="author-nickname-holder">
                    <div className="entry-info-text">AUTHOR</div>
                    <div className="author-nickname">Peter Clarke</div>
                  </li>
                  <li className="entry-date-holder">
                    <div className="entry-info-text">DATE</div>
                    <div className="entry-date published">AUG 10, 2019</div>
                  </li>
                  <li className="cat-links-holder">
                    <div className="entry-info-text">CATEGORY</div>
                    <div className="cat-links">Interior, Art</div>
                  </li>
                  <li className="num-comments-holder">
                    <div className="entry-info-text">COMMENTS</div>
                    <div className="num-comments">13 Comments</div>
                  </li>
                </ul>
              </div>
            </article>

            <article className="blog-item-holder">
              <div className="entry-holder">
                <h2 className="entry-title">
                  <Link href="/blog/single">
                    Citizens of distant epochs encyclopaedia galactica the ash
                    of stellar
                  </Link>
                </h2>
                <img src={blogImg02.src} alt="" />
                <ul className="entry-info">
                  <li className="author-nickname-holder">
                    <div className="entry-info-text">AUTHOR</div>
                    <div className="author-nickname">Peter Clarke</div>
                  </li>
                  <li className="entry-date-holder">
                    <div className="entry-info-text">DATE</div>
                    <div className="entry-date published">MAY 17, 2019</div>
                  </li>
                  <li className="cat-links-holder">
                    <div className="entry-info-text">CATEGORY</div>
                    <div className="cat-links">Photography</div>
                  </li>
                  <li className="num-comments-holder">
                    <div className="entry-info-text">COMMENTS</div>
                    <div className="num-comments">5 Comments</div>
                  </li>
                </ul>
              </div>
            </article>

            <article className="blog-item-holder">
              <div className="entry-holder">
                <h2 className="entry-title">
                  <Link href="/blog/single">
                    Vangelis astonishment birth consciousness cosmic ocean
                    citizens
                  </Link>
                </h2>
                <img src={blogImg03.src} alt="" />
                <ul className="entry-info">
                  <li className="author-nickname-holder">
                    <div className="entry-info-text">AUTHOR</div>
                    <div className="author-nickname">Peter Clarke</div>
                  </li>
                  <li className="entry-date-holder">
                    <div className="entry-info-text">DATE</div>
                    <div className="entry-date published">APR 22, 2019</div>
                  </li>
                  <li className="cat-links-holder">
                    <div className="entry-info-text">CATEGORY</div>
                    <div className="cat-links">Work, Design</div>
                  </li>
                  <li className="num-comments-holder">
                    <div className="entry-info-text">COMMENTS</div>
                    <div className="num-comments">2 Comments</div>
                  </li>
                </ul>
              </div>
            </article>

            <article className="blog-item-holder">
              <div className="entry-holder">
                <h2 className="entry-title">
                  <Link href="/blog/single">
                    Realm of the galaxies sed ut perspiciatis unde omnis natus
                    error sit voluptatem
                  </Link>
                </h2>
                <img src={blogImg04.src} alt="" />
                <ul className="entry-info">
                  <li className="author-nickname-holder">
                    <div className="entry-info-text">AUTHOR</div>
                    <div className="author-nickname">Peter Clarke</div>
                  </li>
                  <li className="entry-date-holder">
                    <div className="entry-info-text">DATE</div>
                    <div className="entry-date published">MAR 25, 2019</div>
                  </li>
                  <li className="cat-links-holder">
                    <div className="entry-info-text">CATEGORY</div>
                    <div className="cat-links">Inspiration</div>
                  </li>
                  <li className="num-comments-holder">
                    <div className="entry-info-text">COMMENTS</div>
                    <div className="num-comments">8 Comments</div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blog;

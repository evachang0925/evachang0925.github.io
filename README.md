# Eva Chang — Personal Portfolio

**Live site:** https://evachang0925.github.io

A space to show my past and future design projects, plus a bit about me and my resume. 😎
The page design and the small animation on the homepage are all designed by me. It took about a week to build from scratch, and I had a lot of fun making it on my own! 😊

Big thanks to the tutorial videos by [Bedimcode](https://www.youtube.com/c/Bedimcode) — I learned a lot. 🙌

## What's on the site

| Page | Description |
| --- | --- |
| [index.html](index.html) | Homepage: intro animation and the **Selected Works** gallery |
| [about.html](about.html) | About me, background, and drawings |
| `assets/pdf/Eva_Resume_2026.pdf` | Current resume (linked from the nav bar) |

### Project case studies

| Page | Project | On homepage |
| --- | --- | --- |
| [stepup.html](stepup.html) | StepUp | ✅ |
| [inmyshoes.html](inmyshoes.html) | In My Shoes | ✅ |
| [ipet.html](ipet.html) | iPet | ✅ |
| [puppamatics.html](puppamatics.html) | Puppamatics | hidden |
| [g8game.html](g8game.html) | 擊•敗星球 G8 Planet | hidden |
| [skillOcean.html](skillOcean.html) | Skill Ocean | hidden |
| [learngroup.html](learngroup.html) | 呼朋以伴 LearnGroup | hidden |
| [myweb.html](myweb.html) | My Personal Website | hidden |

"Hidden" projects still have live pages, but their cards are commented out in `index.html`. To show one again, uncomment its `portfolio_content` block. Cards for [My Design Collections](https://mydesigncollection.simple.ink) and Dribbble are also there, commented out.

## Built with

Plain HTML, CSS, and JavaScript — no build step or framework.

- [GSAP](https://gsap.com/) — homepage animation (`assets/js/gsap.min.js`)
- [MixItUp](https://www.kunkalabs.com/mixitup/) — portfolio filtering (`assets/js/mixitup.min.js`)
- [ScrollReveal](https://scrollrevealjs.org/) — scroll animations (CDN)
- jQuery + [Magnific Popup](https://dimsemenov.com/plugins/magnific-popup/) — image lightbox (CDN)
- Swiper — carousel (`assets/js/swiper-bundle.min.js`)
- [Chiayi City font (嘉市體)](fonts/readme.txt) — free font by the Chiayi City Government

## Project structure

```
.
├── index.html            # Homepage / works gallery
├── about.html            # About me
├── *.html                # One page per project case study
├── assets/
│   ├── css/              # main.css (shared), styles.css, gallerystyle.css
│   ├── js/               # main.js, about.js, and vendored libraries
│   ├── img/              # Thumbnails, plus per-project folders (project/, stepup/, …)
│   └── pdf/              # Resume and CV
├── fonts/                # Chiayi City font files
└── favicon*.png
```

## Running locally

No install needed. Open `index.html` in a browser, or serve the folder so relative links and videos behave like the live site:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Updating the site

- **Add a project:** copy an existing case-study page (e.g. `stepup.html`), put its images in a new folder under `assets/img/`, and add a card for it in the Selected Works section of `index.html`.
- **Update the resume:** drop the new PDF into `assets/pdf/` and update the `Resume` nav link in both `index.html` and `about.html`.
- **Deploy:** push to `main` — GitHub Pages publishes it automatically.

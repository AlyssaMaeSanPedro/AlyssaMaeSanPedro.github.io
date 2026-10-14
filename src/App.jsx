import { useState, useEffect, useRef } from "react";
import { motion, MotionConfig, animate, useInView } from "framer-motion";
import TiltModule from "react-parallax-tilt";
import confetti from "canvas-confetti";
import ProjectPreview from "./components/ProjectPreview";
import { PROJECTS } from "./data/projects";
import { CERTS, SEMINARS, SHOW } from "./data/certs";
import { Database, Code, Table, TrendingUp, FlaskConical, GitBranch, BookOpen, Palette, Cloud, Terminal, Globe, Flame,
         GraduationCap, Briefcase, User, LayoutGrid, Mail, FileText } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";


const NAME = "Ali";
const SKILLS = [
  ["SQL", Database], ["Python", Code], ["Excel", Table], ["Power BI", TrendingUp], ["Tableau", TrendingUp],
  ["Pandas", Table], ["NumPy", Code], ["Scikit-learn", FlaskConical], ["Jupyter Notebook", BookOpen],
  ["Java", Code],["TypeScript", Code], ["PHP", Code],
  ["HTML", Globe], ["CSS", Globe], ["ReactJS", Globe],
  ["GitHub", GitBranch], ["VS Code", Terminal], ["Figma", Palette], ["Vercel", Cloud], ["Firebase", Flame], ["Supabase", Database],
];



const Tilt = TiltModule.default ?? TiltModule;
const ease = [0.2, 0.8, 0.2, 1];

// number that counts up when scrolled into view
const Count = ({ to }) => {
  const ref = useRef();
  const seen = useInView(ref, { once: true, margin: "0px 0px -50% 0px" });
  useEffect(() => {
    if (!seen) return;
    const c = animate(0, to, { duration: 2, ease, onUpdate: (v) => (ref.current.textContent = Math.round(v)) });
    return () => c.stop();
  }, [seen, to]);
  return <span ref={ref}>0</span>;
};
const glare = { glareEnable: true, glareMaxOpacity: 0.22, glareColor: "#9fb6d8", scale: 1.015 };

// wipe-up reveal
const Reveal = ({ children, className }) => {
  const ref = useRef();
  const seen = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ height: "100%" }}
        initial={{ clipPath: "inset(0% 0% 100% 0%)", y: 24 }}
        animate={seen ? { clipPath: "inset(-10% -10% -10% -10%)", y: 0 } : {}}
        transition={{ duration: 0.9, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// gently floating glass card
const Float = ({ children, className, delay = 0 }) => (
  <motion.div className={className} animate={{ y: [0, -10] }}
    transition={{ duration: 7, delay, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>{children}</motion.div>
);

// bars + line chart that animate in
const Chart = ({ bars }) => (
  <svg className="chart" viewBox="0 0 400 240" aria-hidden="true">
    {bars.map((h, k) => (
      <motion.rect key={k} x={28 + k * 52} y={220 - h * 1.9} width="34" height={h * 1.9} rx="5"
        style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
        initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.9, delay: k * 0.07, ease }} />
    ))}
    <motion.path d={"M45 " + (200 - bars[0]) + bars.map((h, k) => ` L${45 + k * 52} ${200 - h * 1.6}`).join("")}
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ duration: 1.6, delay: 0.3 }} />
  </svg>
);

const Tags = ({ p }) => (
  <div className="tags">
    {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
    {p.live && <span className="tag live">In progress</span>}
  </div>
);
const Chip = ({ icon: Icon, small }) => <span className={"chip" + (small ? " sm" : "")}><Icon size={small ? 15 : 17} /></span>;

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme:dark)").matches ? "navy" : "light"));
  const [all, setAll] = useState(false);
  const [edge, setEdge] = useState({ start: true, end: false });
  const rail = useRef();

  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("theme", theme); }, [theme]);

  // click sparks (canvas-confetti with blue stars/dots)
  useEffect(() => {
    const colors = theme === "light" ? ["#14284b", "#2f5a94", "#6f93c4", "#b8c4d6"] : ["#1f5f8b", "#3c8dbc", "#6db3e0", "#9fd0ee"];
    const burst = (e) => confetti({ particleCount: 14, spread: 360, startVelocity: 18, gravity: 0.6, decay: 0.9, ticks: 45,
      scalar: 0.9, shapes: ["star", "circle"], colors, zIndex: 100, disableForReducedMotion: true,
      origin: { x: e.clientX / innerWidth, y: e.clientY / innerHeight } });
    addEventListener("pointerdown", burst);
    return () => removeEventListener("pointerdown", burst);
  }, [theme]);

  const go = (d) => rail.current.scrollBy({ left: d * (rail.current.firstChild.offsetWidth + 18), behavior: "smooth" });
  const sync = () => { const r = rail.current; setEdge({ start: r.scrollLeft < 4, end: r.scrollLeft + r.clientWidth >= r.scrollWidth - 4 }); };

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg" aria-hidden="true">
        <div className="blob b1" /><div className="blob b2" />
        <svg className="lines" viewBox="0 0 1440 900" preserveAspectRatio="none">
          {[0, 1].map((g) => (
            <g key={g} className={"d" + g}>
              {[...Array(6)].map((_, k) => (
                <path key={k} d={`M-100 ${(g ? 200 : 640) + k * 14} C 300 ${(g ? 60 : 420) + k * 10}, 650 ${(g ? 420 : 820) + k * 12}, 1050 ${(g ? 180 : 560) + k * 14} S 1500 ${(g ? 500 : 260) + k * 12}, 1600 ${(g ? 300 : 360) + k * 10}`} />
              ))}
            </g>
          ))}
        </svg>
      </div>

      <a className="skip" href="#work">Skip to projects</a>
      <nav><div className="wrap">
        <a className="logo" href="#top">{NAME}</a>
        <ul>
          {[["Projects", "work"], ["Credentials", "creds"], ["About", "about"]].map(([l, id]) => <li className="hide" key={id}><a className="l" href={"#" + id}>{l}</a></li>)}
          <li><a className="l" href="#contact">Contact</a></li>
          <li className="sws">
            <button className="tsw" role="switch" aria-checked={theme === "navy"} aria-label="Dark mode"
              title={theme === "navy" ? "Switch to light" : "Switch to dark"}
              onClick={() => setTheme(theme === "navy" ? "light" : "navy")} />
          </li>
        </ul>
      </div></nav>

      <main id="top">
        <header className="hero"><div className="wrap hgrid">
          <div>
            <p className="eyebrow">Aspiring data analyst</p>
              <h1 aria-label="Hi, I’m  Ali.">
                {["Hi,\u00A0I’m", "\u00A0Ali."].map((w, i) => (
                  <span key={w}><motion.i initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: i * 0.08, ease }}>{w}</motion.i>{" "}</span>
                ))}
              </h1>
            <p className="sub">Cleaning data, building dashboards and writing the recommendation.</p>
            <div className="btns">
              <a className="btn p" href="#work">View projects ↓</a>
            </div>
          </div>
          <div className="art" aria-hidden="true">
            <Float className="glass g1"><div className="dots"><i /><i /><i /></div><Chart bars={[32, 47, 37, 63, 53, 74, 58]} /></Float>
            <Float className="glass g2" delay={-3.5}>
              <svg viewBox="0 0 90 90" className="ring">
                <circle cx="45" cy="45" r="34" className="t" />
                <motion.circle cx="45" cy="45" r="34" className="a" transform="rotate(-90 45 45)"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 0.72 }} transition={{ duration: 1.6, delay: 1 }} />
              </svg>
            </Float>
          </div>
        </div></header>

        <div className="strip" aria-hidden="true">
          <div className="track">{[...SKILLS, ...SKILLS].map(([s], i) => <span key={i}>{s}<b> ·</b></span>)}</div>
        </div>

        <section id="work" className="band"><div className="wrap">
          <div className="head">
            <h2>Selected projects</h2>
            <div className="arrows">
              <button aria-label="Previous project" disabled={edge.start} onClick={() => go(-1)}>←</button>
              <button aria-label="Next project" disabled={edge.end} onClick={() => go(1)}>→</button>
            </div>
          </div>
          <div className="rail" ref={rail} onScroll={sync} aria-label="Projects">
            {PROJECTS.map((p) => (
              <Reveal className="slide" key={p.title}>
                <a className="card" href={p.doc || p.link} {...(p.link && { target: "_blank", rel: "noopener noreferrer" })} aria-label={`Open ${p.title}`}>
                  <div className="preview">
                    {p.img ? <ProjectPreview src={p.img} alt={p.title} /> : <Chart bars={p.bars || [40, 65, 50, 80, 60, 90, 70]} />}
                  </div>
                  <div className="info">
                    <h3>{p.title}</h3>
                    <Tags p={p} />
                    <dl>
                      <div><dt>Problem</dt><dd>{p.problem}</dd></div>
                      <div><dt>Action</dt><dd>{p.action}</dd></div>
                      {p.result && <div><dt>Result</dt><dd>{p.result}</dd></div>}
                    </dl>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div></section>

        <section id="creds"><div className="wrap">
          <div className="head">
            <div className="hl"><h2>Certifications</h2>
              <span className="count"><b><Count to={CERTS.length} /></b>earned</span>
            </div>
            {CERTS.length > SHOW && (
              <button className="btn" aria-expanded={all} onClick={() => setAll(!all)}>
                {all ? "Show less ↑" : `View all ${CERTS.length} ↓`}
              </button>
            )}
          </div>
          <div className="certs">
            {(all ? CERTS : CERTS.slice(0, SHOW)).map((c) => (
              <Reveal key={c.name}>
                <a className="cert" href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`${c.name}, ${c.by}`}>
                  <Tilt {...glare} tiltMaxAngleX={8} tiltMaxAngleY={8} glareBorderRadius="12px" className="img">
                    {c.img ? <img src={c.img} alt="" loading="lazy" /> : "Certificate image"}
                    {c.badge && <img className="badge" src={c.badge} alt="" />}
                  </Tilt>
                  <strong>{c.name}</strong><small>{c.by} ↗</small>
                </a>
              </Reveal>
            ))}
          </div>
          {[["Seminars & workshops", SEMINARS]].map(([title, list]) => (
            <details className="more" key={title}>
              <summary>{title} · {list.length}</summary>
              <ul>{list.map((s) => (
                <li key={s.name}>
                  {s.url ? <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name} ↗</a> : s.name}
                  <small> · {s.by}{s.year ? `, ${s.year}` : ""}</small>
                </li>
              ))}</ul>
            </details>
          ))}
        </div></section>

        <section id="about"><div className="wrap"><div className="trio">
          <div className="pn p1">
            <h3 className="col"><Chip icon={LayoutGrid} />Toolkit</h3>
            <div className="pills">{SKILLS.map(([s, I]) => <span className="pill" key={s}><I size={14} />{s}</span>)}</div>
          </div>
          <div className="pn p2 about">
            <h3 className="col"><Chip icon={User} />About</h3>
            <p>Fresh Computer Science graduate and aspiring data analyst. I'm a fast learner and always willing to pick up new tools, and I enjoy cleaning messy datasets and turning them into something people can use. My QA internship taught me to work closely with a team and catch issues early, and I'm looking to grow in an entry-level data analyst role.</p>
            <p className="edu"><Chip icon={GraduationCap} small />BS Computer Science · New Era University, 2026</p>
          </div>
          <div className="pn p3">
            <h3 className="col"><Chip icon={Briefcase} />Experience</h3>
            <div className="job">
              <strong>Quality Assurance Intern</strong>
              <small>Simplevia Technologies Inc. · Pasig City · Oct – Dec 2025</small>
              <ul>
                <li>Ran daily functional and regression tests across 13 successive builds before each release.</li>
                <li>Wrote 11 test scripts and 7 user manuals covering application modules and workflows.</li>
                <li>Joined dev meetings to report test results and flag high-priority issues.</li>
              </ul>
            </div>
            </div>
        </div></div></section>
      </main>

      <footer className="band" id="contact"><div className="wrap">
        <div className="foot">
          <div><small>Let’s connect</small><h2>Get in touch</h2></div>
          <div className="btns">
            <a className="btn" href="https://mail.google.com/mail/?view=cm&fs=1&to=alyssamae.sanpedro0@gmail.com&su=Hello%20Alyssa" target="_blank" rel="noopener noreferrer"><Mail size={16} />Email</a>
            <a className="btn" href="https://www.linkedin.com/in/alyssamae-sanpedro" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={15} />LinkedIn</a>
            <a className="btn" href="https://github.com/AlyssaMaeSanPedro" target="_blank" rel="noopener noreferrer"><FaGithub size={16} />GitHub</a>
            <a className="btn" href="/AlyssaMaeSanPedro_Resume.pdf" target="_blank" rel="noopener noreferrer"><FileText size={16} />Resume</a>
          </div>
        </div>
        <p className="copy">© 2026 Alyssa Mae San Pedro</p>
      </div></footer>

    </MotionConfig>
  );
}
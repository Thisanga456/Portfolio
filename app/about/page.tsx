import { redirect } from "next/navigation";

export default function AboutPage() {
  return (
    <main className="project-page">
      <section className="project-page-intro" aria-labelledby="about-page-title">
        <p>[ ABOUT ]</p>
        <h1 id="about-page-title">ABOUT</h1>
        <span>CONTENT TO BE ADDED</span>
      </section>
    </main>
  );
  redirect("/#about");
}

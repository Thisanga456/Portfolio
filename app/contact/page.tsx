import { redirect } from "next/navigation";

export default function ContactPage() {
  return (
    <main className="project-page">
      <section className="project-page-intro" aria-labelledby="contact-page-title">
        <p>[ CONTACT ]</p>
        <h1 id="contact-page-title">CONTACT</h1>
        <span>CONTENT TO BE ADDED</span>
      </section>
    </main>
  );
  redirect("/#contact");
}

import { redirect } from "next/navigation";

export default function WorkPage() {
  return (
    <main className="project-page">
      <section className="project-page-intro" aria-labelledby="work-page-title">
        <p>[ WORK ]</p>
        <h1 id="work-page-title">SELECTED WORK</h1>
        <span>PROJECT INDEX TO BE EXPANDED</span>
      </section>
    </main>
  );
  redirect("/#work");
}

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

const projects = [
  {
    category: "Residential",
    title: "Kitchen Electrical Upgrade",
    description:
      "Modern kitchen electrical work including lighting, outlets, and upgraded circuits.",
    image: project1,
  },
  {
    category: "Commercial",
    title: "Office Lighting Installation",
    description:
      "Professional office electrical installation with modern lighting and power distribution.",
    image: project2,
  },
  {
    category: "Renovation",
    title: "Basement Finishing",
    description:
      "Complete basement wiring, lighting setup, and electrical finishing for a clean final result.",
    image: project3,
  },
  {
    category: "Restoration",
    title: "Retail Space Electrical Work",
    description:
      "Electrical restoration and installation for a commercial retail unit with upgraded systems.",
    image: project4,
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#f5f5f3] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[760px]">
          <h1 className="text-4xl font-bold tracking-tight text-black md:text-6xl">
            Recent Projects
          </h1>

          <p className="mt-8 text-lg leading-9 text-black/70">
            A few examples of electrical projects completed by Stareye for
            residential and commercial clients.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm font-medium text-black/50">
                  {project.category}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-black">
                  {project.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-black/65">
                  {project.description}
                </p>

                <a
                  href="#"
                  className="mt-6 inline-block font-semibold text-black hover:text-orange-500"
                >
                  View Projects →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
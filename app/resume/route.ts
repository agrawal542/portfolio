import { resume } from "@/data/resume";
import { buildResume } from "@/utils/buildResume";

/** Serves the resume as a downloadable plain-text file. */
export function GET() {
  return new Response(buildResume(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `attachment; filename="${resume.filename}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}

import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "pdf",
      "cv-pw-red1.pdf"
    );

    const fileContent = await readFile(filePath);

    return new Response(fileContent, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="CV-Przemyslaw-Wozniak.pdf"',
      },
    });
  } catch (error) {
    console.error("Error reading PDF file:", error);
    return new Response("Error reading PDF file", { status: 500 });
  }
}

import { exec } from "child_process";
import path from "path";
import fs from "fs";

async function excelToPdf(inputPath, outputDir) {
  const libreOfficePath =
    `"C:\\Program Files\\LibreOffice\\program\\soffice.exe"`;

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    exec(
      `${libreOfficePath} --headless --convert-to pdf "${inputPath}" --outdir "${outputDir}"`,
      (error, stdout, stderr) => {
        if (error) {
          reject(stderr || error);
        } else {
          resolve("PDF created");
        }
      }
    );
  });
}

// ✅ Run
(async () => {
  try {
    await excelToPdf(
      path.resolve("input.xlsx"),
      path.resolve("output")
    );
    console.log("Conversion successful");
  } catch (err) {
    console.error("Conversion failed:", err);
  }
})();


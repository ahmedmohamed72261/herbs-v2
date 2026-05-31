import type { Certificate } from "@/src/entities/certificate/types";
import certificatesData from "@/src/data/certificates.json";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getCertificates(): Promise<Certificate[]> {
  await delay(100);
  return certificatesData as Certificate[];
}

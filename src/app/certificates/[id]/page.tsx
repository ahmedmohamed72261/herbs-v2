import { notFound } from "next/navigation";
import { use } from "react";
import certificatesData from "@/src/data/certificates.json";
import { CertificateDetailClient } from "./certificate-detail-client";

export function generateStaticParams() {
  return certificatesData.map((cert) => ({
    id: cert.id,
  }));
}

export default function CertificateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const cert = certificatesData.find((c) => c.id === id);

  if (!cert) notFound();

  return <CertificateDetailClient cert={cert} />;
}

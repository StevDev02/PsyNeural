import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfService() {
  return notFound();
}

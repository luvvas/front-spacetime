import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { NewMemoryForm } from "../../components/NewMemoryForm";

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4 py-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft />
        voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  );
}

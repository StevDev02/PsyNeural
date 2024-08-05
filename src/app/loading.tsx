// Spinners
import { BarsRotateFade } from "@/components/custom/spinners/BarsRotateFade";

export default function Loading() {
  return (
    <div className="w-full min-h-dvh flex items-center justify-center">
      <BarsRotateFade />
    </div>
  );
}

import type { FormStatus as Status } from "@/hooks/useContactForm";
import { cn } from "@/utils/cn";

type Props = { status: Status; message: string };

/** Success or error message shown next to the submit button. */
export default function FormStatus({ status, message }: Props) {
  return (
    <p
      aria-live="polite"
      className={cn(
        "text-xs sm:max-w-xs sm:text-right",
        status === "error" ? "text-danger" : "text-success",
      )}
    >
      {message}
    </p>
  );
}

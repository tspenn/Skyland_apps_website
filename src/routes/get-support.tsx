import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/get-support")({
  beforeLoad: () => {
    throw redirect({ to: "/my-support-agent-2" });
  },
});

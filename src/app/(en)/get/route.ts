import type { NextRequest } from "next/server";
import { getRedirect } from "@/lib/get-redirect";

export function GET(request: NextRequest) {
  return getRedirect(request, "en");
}

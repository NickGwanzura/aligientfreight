import { permanentRedirect } from "next/navigation";

export default function BlogRedirectPage() {
  permanentRedirect("/blog/the-government-is-already-in-your-supply-chain");
}

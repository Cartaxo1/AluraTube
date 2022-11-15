import { createClient } from "@supabase/supabase-js";

const projectUrl = "https://iujwkrujrivxauwayqtk.supabase.co";
const publicKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1andrcnVqcml2eGF1d2F5cXRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0ODA3MTksImV4cCI6MTk4NDA1NjcxOX0.u7d42yd8iVBwhxvf_RiKDA2MyVLDkjcu8uUhlKoUG5A";
const supabase = createClient(projectUrl, publicKey);
export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video")
        .select("*")
    },
  };
}

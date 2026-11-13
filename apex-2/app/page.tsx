import { Sidebar } from "@/components/layout/side-nav"; 
import { redirect } from "next/navigation";
export default function Home() {
  redirect ('/login');
  < Sidebar/>
}

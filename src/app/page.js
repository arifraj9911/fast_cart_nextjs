import NavbarBottom from "@/components/NavbarBottom/NavbarBottom";
import NavbarMiddle from "@/components/NavbarMiddle/NavbarMiddle";
import NavbarTop from "@/components/NavbarTop/NavbarTop";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <NavbarTop></NavbarTop>
      <div className="max-w-screen-2xl mx-auto">
        <NavbarMiddle></NavbarMiddle>
        <NavbarBottom></NavbarBottom>
      </div>
    </main>
  );
}

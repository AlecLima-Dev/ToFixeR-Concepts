"use client";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <main className="bg-[#1F2544] h-[100vh] w-full md:container flex flex-wrap items-center justify-center p-2">
        <div className="flex flex-col gap-4 flex-grap">
          <h1 className="text-5xl text-white font-bold text-center text-wrap">
            REUNINDO VAGAS TECH EM UM SÓ LUGAR!
          </h1>
          <div className="flex gap-4">
            <button className="bg-[#BFCFE7] w-1/2 p-4 h-[59px] text-black fot-bold">
              <Link href={"/users/signIn"}>SOU CANDIDATO</Link>
            </button>
            <button className="bg-[#C2E7BF] w-1/2 p-4 h-[59px] text-black fo">
              <Link href={"/companies/signUp"}>SOU EMPRESA</Link>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}

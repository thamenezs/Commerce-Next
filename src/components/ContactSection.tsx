import React from "react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="bg-[#CE9F95] w-full p-10">
        <div className="grid grid-cols-4 font-montserrat gap-10">
          <div className="hidden md:block">
            <h1 className="font-semibold text-xl mb-4">Estética Avançada</h1>
            <p className="font-montserrat font-light text-base">
              Entre em contato para saber mais sobre os serviços do estúdio!
            </p>
          </div>
          <div className="hidden md:block">
            <h1 className="font-semibold text-xl mb-4">Endereço</h1>
            <p className="font-light text-lg">
              Rua Helga Taveira de Souza, 469 - Céu Azul
            </p>
          </div>
          <div className="hidden md:block">
            <h1 className="font-semibold text-xl mb-4">Contatos</h1>
            <p className="font-light text-lg">+55 (31) 97507-7925</p>
          </div>
          <div className="col-span-4 place-self-center md:place-self-start md:col-span-1 ">
            <h1 className="font-semibold text-3xl lg:text-xl">Follow Us</h1>
            <div className="mt-8 flex flex-row space-x-10">
              <a href="https://www.instagram.com/jeskestetica/" target="_blank">
                <Image
                  src={"/insta.png"}
                  alt={"Instagram"}
                  height={40}
                  width={40}
                  style={{ background: "white", borderRadius: "100%" }}
                  className="lg:w-10 w-14"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=553175077925&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20est%C3%A9tica%20avan%C3%A7ada%20:)"
                target="_blank"
              >
                <Image
                  src={"/whats.png"}
                  alt={"Whatsapp"}
                  height={40}
                  width={40}
                  style={{ background: "white", borderRadius: "100%" }}
                  className="lg:w-10 w-14"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

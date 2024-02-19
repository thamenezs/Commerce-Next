import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="w-full h-screen bg-pink-500">
        <h1>Ola testando</h1>
        <div className="flex flex-col items-end">
          <a target="_blank" href="https://api.whatsapp.com/send?phone=553175077925&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20do%20est%C3%BAdio%20:)">
            <Image
              src={"/whatsapp .png"}
              alt={"Whatsapp Link"}
              height={50}
              width={50}
              quality={100}
            />
          </a>
          <a target="_blank" href="https://www.instagram.com/jeskestetica/">
            <Image
              src={"/instagram.png"}
              alt={"Whatsapp Link"}
              height={50}
              width={50}
              quality={100}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

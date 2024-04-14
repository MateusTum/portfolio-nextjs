import Section from "@/app/ui/Section";

import {
  siWhatsapp,
} from "simple-icons/icons";

export default function ContactSection({ t }: any) {
    return (
      <Section
        id="contact"
        classes="py-20 min-h-[50vh] bg-gradient-to-b from-black from-60% to-neutral-950/50"
      >
        <div className="w-full md:w-[50%] text-4xl text-center bg-neutral-800/50  mx-auto rounded-md p-2">
          <h2 className="uppercase">{t('contact-me')}</h2>
        </div>
        <div className="p-2 grid grid-rows-3 gap-1 sm:gap-3">
          <div>
            <h3 className="text-3xl">{t('email')}</h3>
            <a
              className="text-neutral-400 text-xl"
              href="mailto:mateus.tum@icloud.com"
            >
              mateus.tum@icloud.com
            </a>
          </div>
          <div>
            <h3 className="text-3xl">{t('phone-number')}</h3>
            <a className="text-neutral-400 text-xl" href="tel:+5564999549530">
              +55 (64) 9-9954-9530
            </a>
          </div>
  
          <div>
            <h3 className="text-3xl">WhatsApp</h3>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 flex"
              href="https://wa.me/+5564999549530?text=Hello%2C%20I%27m%20interested%20in%20your%20web%20development%20services.%20Can%20we%20discuss%20further%3F"
            >
              <svg className="w-8 h-8" viewBox="0 0 32 32" width="32" height="32">
                <path d={siWhatsapp.path} fill="currentColor" />
              </svg>
              {t('whatsapp')}
            </a>
          </div>
        </div>
      </Section>
    );
  }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

import { COMPANY, CITY_SHORT, IMAGES } from "./constants";

const team = [
  {
    name: "Jordan Ellis",
    role: "Principal · Listing Specialist",
    bio: "Former architect turned advisor—pairing design literacy with negotiation strength for standout presentations.",
    image: IMAGES.team[0],
  },
  {
    name: "Morgan Reyes",
    role: "Buyer Specialist",
    bio: "Known for patient guidance and sharp market reads—helping clients win without overpaying.",
    image: IMAGES.team[1],
  },
  {
    name: "Alex Chen",
    role: "Director of Operations",
    bio: "Keeps transactions smooth—timelines, vendors, and details handled with precision.",
    image: IMAGES.team[2],
  },
];

export default function REAboutTeam() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white" aria-labelledby="re-about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[#9a7b2d] text-xs font-semibold uppercase tracking-[0.22em] mb-3">
            The team
          </p>
          <h2 id="re-about-heading" className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            Meet {COMPANY}
          </h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            A collaborative group focused on discretion, data, and design—serving {CITY_SHORT} with the
            professionalism you expect from a luxury real estate partner.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden ring-4 ring-[#faf9f7] shadow-xl">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 640px) 208px, 176px"
                />
              </div>
              <h3 className="mt-6 font-serif text-xl text-neutral-900">{member.name}</h3>
              <p className="text-sm font-medium text-[#9a7b2d] mt-1">{member.role}</p>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
                {member.bio}
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
                aria-label={`${member.name} on LinkedIn (demo)`}
                onClick={(e) => e.preventDefault()}
              >
                <Linkedin className="w-4 h-4" aria-hidden />
                LinkedIn
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-3 gap-4 rounded-2xl overflow-hidden ring-1 ring-neutral-200"
        >
          {IMAGES.gallery.map((src, idx) => (
            <div key={src} className="relative aspect-[5/3]">
              <Image
                src={src}
                alt={`${COMPANY} portfolio interior ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

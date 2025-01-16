"use client";

import Image from "next/image";
import Link from "next/link";
import work_people from "@/public/work_people.png"
import { Parallax } from "react-scroll-parallax";

export default function CTA() {
	return (
		<section className="overflow-hidden bg-white text-black px-8 py-8 xl:px-32 flex flex-col items-center">
			<div className="max-w-7xl w-full flex flex-col xl:flex-row items-center justify-between ">
				<div className="w-full z-0">
					<Parallax speed={5}>
                    
						<Image
							src={work_people}
							alt="Service Image"
							width={600}
							height={600}
							className="object-fill"
						/>
					</Parallax>
				</div>
				<div className="w-full flex flex-col xl:ml-6 z-10">
					<h1 className="playfair text-4xl font-bold w-full text-left mb-6">
						Let&apos;s Build Something.
					</h1>
					<p className="text-sm xl:text-lg mb-6 text-black/75">
						Whether you&apos;re looking to build a new website, or
						redesign an existing one, we can help you.
					</p>
					<div className="flex items-center gap-4">
						<Link
							href="/new-project"
							className="btn xl:px-6 bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-sm">
							Start a Project
						</Link>
						<Link href="/contact" className="link w-fit mx-6">
							Get in touch
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

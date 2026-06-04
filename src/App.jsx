import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function App() {
	const navRef = useRef(null);
	const headlineRef = useRef(null);
	const bodyRef = useRef(null);
	const footerRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			// Nav slides down
			tl.fromTo(
				navRef.current,
				{ y: -20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6 },
			)
				// Headline lines stagger up
				.fromTo(
					headlineRef.current.children,
					{ y: 60, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.9, stagger: 0.15 },
					"-=0.3",
				)
				// Body text fades in
				.fromTo(
					bodyRef.current.children,
					{ y: 20, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
					"-=0.4",
				)
				// Footer slides up
				.fromTo(
					footerRef.current,
					{ y: 20, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.5 },
					"-=0.3",
				);
		});

		return () => ctx.revert();
	}, []);

	return (
		<div className="h-screen flex flex-col items-center justify-between bg-black overflow-hidden">
			{/* Nav */}
			<div
				ref={navRef}
				className="flex items-center justify-between w-full border-b border-white/20 p-4 md:p-6"
			>
				<p className="font-mono text-white text-sm md:text-base">injili.tech</p>
			</div>

			{/* Main content */}
			<div className="flex flex-col w-full p-4 md:p-8 lg:p-12 flex-1 justify-end pb-8 md:pb-12">
				{/* Big headline */}
				<div ref={headlineRef} className="flex flex-col mb-8 md:mb-10">
					<p
						className="text-secondary font-display leading-none
            text-[clamp(3.5rem,15vw,240px)]"
					>
						We'll be
					</p>
					<p
						className="text-secondary font-display leading-none -mt-1 md:-mt-3 lg:-mt-6
            text-[clamp(3.5rem,15vw,240px)]"
					>
						right back.
					</p>
				</div>

				{/* Body copy */}
				<div ref={bodyRef} className="flex flex-col gap-1 md:gap-2">
					<p className="font-mono text-white text-sm md:text-base lg:text-lg">
						We're performing scheduled maintenance and should be back soon
					</p>
					<p className="font-mono text-white text-sm md:text-base lg:text-lg">
						For urgent matters, reach us at{" "}
						<a
							href="mailto:nyareki@injili.tech"
							className="font-display text-primary pl-1 hover:opacity-80 transition-opacity"
						>
							nyareki@injili.tech
						</a>
						.
					</p>
				</div>
			</div>

			{/* Footer */}
			<div
				ref={footerRef}
				className="flex items-center justify-between w-full border-t border-white/20 p-4 md:p-6"
			>
				<p className="font-mono text-white text-xs md:text-sm">
					Powered by injili.tech
				</p>
				<p className="font-mono text-white text-xs md:text-sm">2026</p>
			</div>
		</div>
	);
}

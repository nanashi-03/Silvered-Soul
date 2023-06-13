import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "Silvered Soul",
		template: "%s | Silvered Soul",
	},
	metadataBase: new URL('https://silvered-soul.vercel.app'),
	description: "Software developer with various skills",
	openGraph: {
		title: "Silvered Soul",
		description:
			"Software developer with various skills",
		url: "https://silvered-soul.vercel.app",
		siteName: "Silvered Soul",
		images: [
			{
				url: "/og.png",
				width: 1920,
				height: 1080,
			},
			{
				url: "/og-alt.png",
				width: 800,
				height: 283,
				alt: 'Alternate og image'
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Silvered Soul",
		card: "summary_large_image",
	},
	icons: {
		icon: "/favicon.png",
	},
	themeColor: "black",
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}

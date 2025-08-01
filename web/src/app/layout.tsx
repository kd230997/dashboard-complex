import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

// Geist is not available on Google Fonts.
// You need to download it from the official Geist website or GitHub repository:
// https://github.com/vercel/geist-font
// After downloading, place the font files in your project's fonts directory as shown below.

const Geist = localFont({
	src: [
		{
			path: "../shared/fonts/Geist-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../shared/fonts/Geist-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-geist-sans",
	display: "swap",
});

const Geist_Mono = localFont({
	src: [
		{
			path: "../shared/fonts/GeistMono-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../shared/fonts/GeistMono-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-geist-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Dream Farm Village",
	description: "Dream Farm Village",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${Geist.variable} ${Geist_Mono.variable}`}>
				{children}
			</body>
		</html>
	);
}

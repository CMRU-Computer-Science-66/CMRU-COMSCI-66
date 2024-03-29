/* eslint-disable no-unused-vars */
import "@/styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

import PreviderComp from "@/components/layout";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider>
			<NextUIProvider>
				<PreviderComp>
					<Component {...pageProps} />
				</PreviderComp>
			</NextUIProvider>
		</SessionProvider>
	);
}

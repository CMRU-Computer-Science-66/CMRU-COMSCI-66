import { date } from "@cmru-comsci-66/utils";
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";
import fs from "fs-extra";

const envDomains = process.env["API_ARCHIVE_URL"]?.replace("https://", ""),
	envPort =
		process.env.NODE_ENV === "development"
			? process.env["npm_package_scripts_PORT"] || process.env["PORT"]
			: 3000;

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["images.unsplash.com"],
	},
	publicRuntimeConfig: {
		appVersion: {
			project: JSON.parse(fs.readFileSync("../package.json")).version,
			client: {
				version: JSON.parse(fs.readFileSync("./package.json")).version,
				nextjs: JSON.parse(fs.readFileSync("./package.json")).dependencies[
					"next"
				],
				nextui: JSON.parse(fs.readFileSync("./package.json")).dependencies[
					"@nextui-org/react"
				],
				tailwind: JSON.parse(fs.readFileSync("./package.json")).dependencies[
					"tailwindcss"
				],
			},
			library: {
				api: JSON.parse(fs.readFileSync("../library/api/package.json")).version,
				utils: JSON.parse(fs.readFileSync("../library/utils/package.json"))
					.version,
				database: JSON.parse(
					fs.readFileSync("../library/database/package.json"),
				).version,
				"next-core": JSON.parse(
					fs.readFileSync("../library/next-core/package.json"),
				).version,
			},
			date: {
				short: date.get(),
				full: date.get({ dateStyle: "full" }),
			},
		},
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			config.plugins = [...config.plugins, new PrismaPlugin()];
		}
		return config;
	},
};

if (envDomains) {
	nextConfig.images.domains.push(envDomains);
}

if (envPort) {
	nextConfig.env = Object.assign(
		{},
		{ port: envPort.toString() },
		nextConfig.env,
	);
}

export default nextConfig;

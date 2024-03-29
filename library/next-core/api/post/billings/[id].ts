import prisma from "@cmru-comsci-66/database";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(request: NextApiRequest, response: NextApiResponse) {
	const id = request.query.id;

	switch (request.method) {
		case "DELETE": {
			return DELETE(id, response);
		}

		default: {
			return response.status(405).json({ error: "Method is not supported" });
		}
	}
}

async function DELETE(id: unknown, response: NextApiResponse) {
	try {
		if (!id || typeof id !== "string") {
			throw new Error("Invalid ID");
		}

		await prisma.billing.delete({
			where: { id: Number(id) },
		});

		response.status(200).json({ message: "Billings deleted successfully" });
	} catch (error) {
		response.status(500).json({ error: error?.message });
	} finally {
		await prisma.$disconnect();
	}
}

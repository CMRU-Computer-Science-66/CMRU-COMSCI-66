import { Card, Container, Typography } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import React from "react";

// Contents
import GroupImg from "@/assets/index-content/group.jpg";

export default function Leader() {
	return (
		<div>
			<Head>
				<title>Leader</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container maxWidth="mb" sx={{ pt: 15, pb: 5 }}>
				<Card>
					<Container sx={{ pt: 3 }}>
						<Typography component="h1" variant="h4" textAlign="center">
							Welcome To 7 ผู้นำ Page
						</Typography>
						<Image
							src={GroupImg}
							width={1200}
							height={650}
							className="responsive-img"
							alt="Group"
							priority
						/>
					</Container>
				</Card>
			</Container>
		</div>
	);
}
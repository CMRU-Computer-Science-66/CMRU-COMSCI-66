import React from "react";
import {
	Card,
	CardActions,
	CardContent,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icon
import {
	faFacebook,
	faDiscord,
	faYoutube,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

// Contents
import ZismailImg from "@/assets/about/Zismail.jpg";
import FirstImg from "@/assets/about/First.jpg";

export default function About() {
	return (
		<div>
			<Container maxWidth="mb" sx={{ pt: 15, pb: 5 }}>
				<Card>
					<Container sx={{ pt: 3 }}>
						<Typography component="h1" variant="h4" textAlign="center">
							เกี่ยวกับผู้สร้าง
						</Typography>
						<Typography component="h1" variant="h6" textAlign="center">
							เว็บไซต์นี้สร้างขึ้นมาโดย Next.js Framework and Mui Library
							สร้างขึ้นโดยนักศึกษา คณะวิทยาศาสตร์และเทคโนโลยี
							สาขาวิทยาการคอมพิวเตอร์
						</Typography>

						<Grid container spacing={3} p={5}>
							<Grid item md={6} sm={12}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										cursor: "pointer",
									}}
									className="hover-zoom "
								>
									<Image
										src={FirstImg}
										alt="about-first"
										className="responsive-img"
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography component="h1" variant="h4">
											Backend Developer
										</Typography>
										<Typography component="h1" variant="h6">
											Faelayis
										</Typography>
									</CardContent>
									<CardActions className="social">
										<a
											href="https://github.com/Faelayis" // แก้ไข URL ให้ตรงกับลิงก์ของ Discord ของคุณ
											target="_blank" // เปิดลิงก์ในหน้าต่างใหม่
											rel="noopener noreferrer" // ควรใส่เมื่อใช้ target="_blank" เพื่อป้องกันปัญหาความปลอดภัย
										>
											<FontAwesomeIcon icon={faGithub} />
										</a>
										<a
											href="https://www.youtube.com/channel/UCWn6665c7dwmh6G7gUJl1PA" // แก้ไข URL ให้ตรงกับลิงก์ของ Discord ของคุณ
											target="_blank" // เปิดลิงก์ในหน้าต่างใหม่
											rel="noopener noreferrer" // ควรใส่เมื่อใช้ target="_blank" เพื่อป้องกันปัญหาความปลอดภัย
										>
											<FontAwesomeIcon icon={faYoutube} />
										</a>
									</CardActions>
								</Card>
							</Grid>

							<Grid item md={6} sm={12}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										cursor: "pointer",
									}}
									className="hover-zoom"
								>
									<Image
										src={ZismailImg}
										alt="about-zismail"
										className="responsive-img"
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography component="h1" variant="h4">
											Frontend Developer
										</Typography>
										<Typography component="h1" variant="h6">
											Zismail-Dev
										</Typography>
									</CardContent>
									<CardActions className="social">
										<a
											href="https://discord.gg/ZRR4fvpgmM" // แก้ไข URL ให้ตรงกับลิงก์ของ Discord ของคุณ
											target="_blank" // เปิดลิงก์ในหน้าต่างใหม่
											rel="noopener noreferrer" // ควรใส่เมื่อใช้ target="_blank" เพื่อป้องกันปัญหาความปลอดภัย
										>
											<FontAwesomeIcon icon={faDiscord} />
										</a>
										<a
											href="https://web.facebook.com/Zismail_Kung-534513747501473" // แก้ไข URL ให้ตรงกับลิงก์ของ Discord ของคุณ
											target="_blank" // เปิดลิงก์ในหน้าต่างใหม่
											rel="noopener noreferrer" // ควรใส่เมื่อใช้ target="_blank" เพื่อป้องกันปัญหาความปลอดภัย
										>
											<FontAwesomeIcon icon={faFacebook} />
										</a>
										<a
											href="https://github.com/zismaildev" // แก้ไข URL ให้ตรงกับลิงก์ของ Discord ของคุณ
											target="_blank" // เปิดลิงก์ในหน้าต่างใหม่
											rel="noopener noreferrer" // ควรใส่เมื่อใช้ target="_blank" เพื่อป้องกันปัญหาความปลอดภัย
										>
											<FontAwesomeIcon icon={faGithub} />
										</a>
										<a
											href="https://www.youtube.com/channel/UCzewwrLueNmJRRu-OMjGRnA" // แก้ไข URL ให้ตรงกับลิงก์ของ Discord ของคุณ
											target="_blank" // เปิดลิงก์ในหน้าต่างใหม่
											rel="noopener noreferrer" // ควรใส่เมื่อใช้ target="_blank" เพื่อป้องกันปัญหาความปลอดภัย
										>
											<FontAwesomeIcon icon={faYoutube} />
										</a>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</Container>
				</Card>
			</Container>
		</div>
	);
}
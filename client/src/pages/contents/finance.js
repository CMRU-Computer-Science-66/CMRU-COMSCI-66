import { UploadOutlined } from "@ant-design/icons";
import { DiscordWebHook } from "@cmru-comsci-66/api";
import {
	Autocomplete,
	Box,
	Card,
	CardContent,
	Container,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { Button, Space, Upload } from "antd";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Swal from "sweetalert2";

// Contents
import BillingImg from "@/assets/bill/bill.jpg";

import { API } from "../api/billings";

export async function getServerSideProps() {
	return API();
}

/**
 * @param {{ billing: import('../api/billings').MappedBillingTypes}} props
 */
export default function Finance({ billing }) {
	const [selectedFile, setSelectedFile] = useState(null);
	const [fullname, setFullname] = useState("");
	const [studentid, setStudentId] = useState("66143"); // เริ่มต้นด้วยค่า 66143
	const [note, setNote] = useState("");
	const [price, setPrice] = useState("");
	const [dropdown, setDropDown] = useState("");
	const [billings] = useState(billing);
	const [isCooldown, setIsCooldown] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!fullname || !studentid || !price || !dropdown) {
			Swal.fire({
				icon: "warning",
				title: "ข้อมูลไม่ครบถ้วน",
				text: "กรุณากรอกข้อมูลให้ครบถ้วนก่อนที่จะส่งข้อมูล",
			});
			return;
		}

		if (isCooldown) {
			Swal.fire({
				icon: "warning",
				title: "Cooldown",
				text: "ใจเย็นสิ๊ อย่า สแปมสิ",
			});
			return;
		}

		setIsCooldown(process.env.NODE_ENV !== "development");

		const webhook = new DiscordWebHook(
			dropdown?.id ?? process.env.DISCORD_WEBHOOK_ID,
			dropdown?.token ?? process.env.DISCORD_WEBHOOK_TOKEN,
		);

		try {
			await webhook
				.Send(selectedFile, { fullname, price, studentid, note })
				.then((data) => {
					if (data?.status === 204 || (data?.webhook_id && data?.channel_id)) {
						Swal.fire({
							icon: "success",
							title: "เสร็จสิ้น",
							text: "ข้อมูลถูกส่งเรียบร้อยแล้ว",
						});
					} else {
						Swal.fire({
							icon: "error",
							title: `พบข้อผิดพลาด`,
							text: "WebHook เน่าส่งใหม่ภายหลังนะจ๊ะ",
							footer: `${data.code !== 0 ? `${data.code}: ` : ""}${
								data.message
							} `,
						});
					}
				});
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: `พบข้อผิดพลาด`,
				text: error.notify ? error.notify : null,
				footer: `${error.code}: ${error.message} `,
			});
		}

		if (process.env.NODE_ENV !== "development") {
			setTimeout(() => {
				setIsCooldown(false);
			}, 5000); // ระยะเวลา cooldown (มิลลิวินาที)
		}
	};

	return (
		<div>
			<Head>
				<title>Finance</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container fullWidth sx={{ pt: 15, pb: 5 }}>
				<Card>
					<Container sx={{ pt: 3 }} className="finance">
						<Typography
							component="h1"
							variant="h4"
							textAlign="center"
							style={{ color: "white" }}
						>
							Finance
						</Typography>
						<Typography
							component="h1"
							variant="h6"
							textAlign="center"
							style={{ color: "white" }}
						>
							ข้อมูลของท่านจะถูกเก็บรักษา
						</Typography>

						<Grid container spacing={3}>
							<Grid item md={4} xs={12}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										cursor: "pointer",
									}}
								>
									<Image
										src={BillingImg}
										width={250}
										height={250}
										style={{ width: "auto", height: "auto" }}
										alt="Profile"
										className="responsive-img"
										priority
									/>
								</Card>
							</Grid>

							<Grid item md={4} xs={12}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										cursor: "pointer",
									}}
								>
									<CardContent sx={{ flexGrow: 1 }}>
										<Box
											component="form"
											sx={{ mt: 1 }}
											onSubmit={handleSubmit}
										>
											<Typography
												component="h1"
												variant="h4"
												textAlign="center"
											>
												ข้อมูลการชำระเงิน
											</Typography>
											<TextField
												margin="normal"
												fullWidth
												id="fullname"
												label="ขื่อ-สกุล"
												autoComplete="name"
												autoFocus
												value={fullname}
												onChange={(e) => setFullname(e.target.value)}
											/>
											<TextField
												type="number"
												margin="normal"
												required
												fullWidth
												inputProps={{ maxLength: 8 }}
												id="studentid"
												label="รหัสนักศึกษา"
												autoComplete="studentid"
												autoFocus
												value={studentid}
												defaultValue={studentid} // กำหนดค่าเริ่มต้นให้กับ TextField
												onChange={(e) => setStudentId(e.target.value)}
											/>
											<TextField
												type="text"
												margin="normal"
												required
												fullWidth
												id="price"
												label="จำนวนเงิน"
												autoComplete="price"
												autoFocus
												value={price}
												onChange={(e) => setPrice(e.target.value)}
											/>
											<TextField
												type="text"
												margin="normal"
												fullWidth
												id="note"
												label="หมายเหตุ"
												autoComplete="note"
												autoFocus
												value={note}
												onChange={(e) => setNote(e.target.value)}
											/>
											<Autocomplete
												margin="normal"
												required
												fullWidth
												disablePortal
												id="dropdown"
												value={dropdown}
												options={billings}
												sx={{ mt: 2 }}
												renderInput={(params) => (
													<TextField {...params} label="กิจกรรม" />
												)}
												onChange={(_e, v) => {
													v?.price ? setPrice(v.price) : setPrice(null);
													setDropDown(v);
												}}
											/>
										</Box>
									</CardContent>
								</Card>
							</Grid>

							<Grid item md={4} xs={12} sx={{ pb: 5 }}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										cursor: "pointer",
									}}
								>
									<CardContent sx={{ flexGrow: 1 }}>
										<Box
											component="form"
											sx={{ mt: 1 }}
											onSubmit={handleSubmit}
										>
											<Typography
												component="h1"
												variant="h4"
												textAlign="center"
											>
												อัพโหลดข้อมูล
											</Typography>
											<Upload
												action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
												listType="picture"
												beforeUpload={(file) => {
													setSelectedFile(file);
													return false;
												}}
											>
												<Button icon={<UploadOutlined />}>Upload</Button>
											</Upload>

											<Box
												sx={{
													display: "flex",
													justifyContent: "center",
													marginTop: "1rem",
												}}
											>
												<Button
													type="primary"
													block
													variant="contained"
													htmlType="submit"
												>
													Submit
												</Button>
											</Box>
										</Box>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Container>
				</Card>
			</Container>
		</div>
	);
}

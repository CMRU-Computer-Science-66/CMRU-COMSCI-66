import {
	Avatar,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "@nextui-org/react";
import Head from "next/head";

export default function about() {
	const leadersData = [
		{
			name: "หนึ่ง",
			role: "ประธาน",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
			facebookLink: "https://www.facebook.com/johndoe",
			githubLink: "https://github.com/johndoe",
		},
		{
			name: "นัท",
			role: "รองประธาน",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
			facebookLink: "https://www.facebook.com/janesmith",
			githubLink: "https://github.com/janesmith",
		},
		{
			name: "เชียร์",
			role: "เลขา",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
			facebookLink: "https://www.facebook.com/johndoe",
			githubLink: "https://github.com/johndoe",
		},
		{
			name: "ลูเซีย",
			role: "สันทนาการ",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
			facebookLink: "https://www.facebook.com/janesmith",
			githubLink: "https://github.com/janesmith",
		},
		{
			name: "กิน",
			role: "สวัสดิการ",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
			facebookLink: "https://www.facebook.com/johndoe",
			githubLink: "https://github.com/johndoe",
		},
		{
			name: "ไตเติ้ล",
			role: "พยาบาล",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
			facebookLink: "https://www.facebook.com/janesmith",
			githubLink: "https://github.com/janesmith",
		},
		{
			name: "โจ",
			role: "สถานที่",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
			facebookLink: "https://www.facebook.com/johndoe",
			githubLink: "https://github.com/johndoe",
		},
	];

	const SecterleadersData = [
		{
			name: "Title",
			role: "วค66.วท.บ.4.1",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
			facebookLink: "https://www.facebook.com/johndoe",
			githubLink: "https://github.com/johndoe",
		},
		{
			name: "Guy",
			role: "วค66.วท.บ.4.2",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
			facebookLink: "https://www.facebook.com/janesmith",
			githubLink: "https://github.com/janesmith",
		},
	];

	const DeveloperData = [
		{
			name: "Faelayis",
			role: "Fullstack Devpeloper",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
			facebookLink: "https://www.facebook.com/johndoe",
			githubLink: "https://github.com/Faelayis",
		},
		{
			name: "Zismil",
			role: "Fullstack Devpeloper",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
			facebookLink: "https://www.facebook.com/janesmith",
			githubLink: "https://github.com/zismaildev",
		},
		{
			name: "Nin",
			role: "UX|UI Webdesing",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
			facebookLink: "https://www.facebook.com/janesmith",
			githubLink: "https://github.com/janesmith",
		},
		{
			name: "Guy",
			role: "Contents",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
			facebookLink: "https://www.facebook.com/janesmith",
			githubLink: "https://github.com/janesmith",
		},
		{
			name: "Njitym29",
			role: "Image and Logo",
			sharp: '"Never give up"',
			avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
			facebookLink: "https://www.facebook.com/janesmith",
			githubLink: "https://github.com/janesmith",
		},
	];

	return (
		<div>
			<Head>
				<title>About</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
				<Card
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						minHeight: "200px",
						marginTop: "15px",
						padding: "5px",
					}}
				>
					<h1 style={{ fontSize: "2.5rem", marginTop: "15px" }}>About Us</h1>
					<div className="px-8 py-6">
						<p style={{ marginBottom: "15px", textIndent: "2em" }}>
							เว็บไซต์นี้สร้างขึ้นมาโดย Next.js Framework และใช้ NextUI
							ในการตกแต่งและสร้าง Component ต่างๆในการตกแต่งและออกแบบ Interface
							ของหน้า WebPage สร้างขึ้นโดยนักศึกษา คณะวิทยาศาสตร์และเทคโนโลยี
							สาขาวิทยาการคอมพิวเตอร์
						</p>
					</div>
					{/*  Leaders */}
					<div className="px-8 py-6">
						<h1 className="mb-4 text-2xl font-bold">Developers</h1>
						<p className="mb-8 text-gray-500">Team Website Developers</p>
						<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
							{leadersData.map((leader, index) => (
								<div
									key={index}
									className="flex space-x-4 rounded-md bg-gray-100 p-4"
								>
									<Card className="max-w-[340px]">
										<CardHeader className="justify-between">
											<div className="flex gap-5">
												<Avatar
													isBordered
													radius="full"
													size="md"
													src={leader.avatar}
												/>
												<div className="flex flex-col items-start justify-center gap-1">
													<h4 className="text-small font-semibold leading-none text-default-600">
														{leader.name}
													</h4>
													<h5 className="text-small tracking-tight text-default-400">
														@zoeylang
													</h5>
												</div>
											</div>
										</CardHeader>
										<CardBody className="px-3 py-0 text-small text-default-400">
											<p>
												Frontend developer and UI/UX enthusiast. Join me on this
												coding adventure!
											</p>
											<span className="pt-2">{leader.role}</span>
										</CardBody>
										<CardFooter className="gap-3">
											<div className="flex gap-1">
												<p className="text-small font-semibold text-default-400">
													4
												</p>
												<p className=" text-small text-default-400">
													Following
												</p>
											</div>
											<div className="flex gap-1">
												<p className="text-small font-semibold text-default-400">
													97.1K
												</p>
												<p className="text-small text-default-400">Followers</p>
											</div>
										</CardFooter>
									</Card>
								</div>
							))}
						</div>
						{/*  Secterleaders */}
						<div className="mt-7">
							<h1 className="mb-4 text-2xl font-bold">Section Leader</h1>
							<p className="mb-8 text-gray-500">หัวหน้าหมู่เรียน</p>
							<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
								{SecterleadersData.map((secterleaders, index) => (
									<div
										key={index}
										className="flex space-x-4 rounded-md bg-gray-100 p-4"
									>
										<Card className="max-w-[340px]">
											<CardHeader className="justify-between">
												<div className="flex gap-5">
													<Avatar
														isBordered
														radius="full"
														size="md"
														src={secterleaders.avatar}
													/>
													<div className="flex flex-col items-start justify-center gap-1">
														<h4 className="text-small font-semibold leading-none text-default-600">
															{secterleaders.name}
														</h4>
														<h5 className="text-small tracking-tight text-default-400">
															@zoeylang
														</h5>
													</div>
												</div>
											</CardHeader>
											<CardBody className="px-3 py-0 text-small text-default-400">
												<p>
													Frontend developer and UI/UX enthusiast. Join me on
													this coding adventure!
												</p>
												<span className="pt-2">{secterleaders.role}</span>
											</CardBody>
											<CardFooter className="gap-3">
												<div className="flex gap-1">
													<p className="text-small font-semibold text-default-400">
														4
													</p>
													<p className=" text-small text-default-400">
														Following
													</p>
												</div>
												<div className="flex gap-1">
													<p className="text-small font-semibold text-default-400">
														97.1K
													</p>
													<p className="text-small text-default-400">
														Followers
													</p>
												</div>
											</CardFooter>
										</Card>
									</div>
								))}
							</div>
						</div>

						{/* Developers */}
						<div className="mt-7">
							<h1 className="mb-4 text-2xl font-bold">Developers</h1>
							<p className="mb-8 text-gray-500">Team Website Developers</p>
							<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
								{DeveloperData.map((developer, index) => (
									<div
										key={index}
										className="flex space-x-4 rounded-md bg-gray-100 p-4"
									>
										<Card className="max-w-[340px]">
											<CardHeader className="justify-between">
												<div className="flex gap-5">
													<Avatar
														isBordered
														radius="full"
														size="md"
														src={developer.avatar}
													/>
													<div className="flex flex-col items-start justify-center gap-1">
														<h4 className="text-small font-semibold leading-none text-default-600">
															{developer.name}
														</h4>
														<h5 className="text-small tracking-tight text-default-400">
															@zoeylang
														</h5>
													</div>
												</div>
											</CardHeader>
											<CardBody className="px-3 py-0 text-small text-default-400">
												<p>
													Frontend developer and UI/UX enthusiast. Join me on
													this coding adventure!
												</p>
												<span className="pt-2">
													{developer.role}
													<span
														className="py-2"
														aria-label="computer"
														role="img"
													>
														💻
													</span>
												</span>
											</CardBody>
											<CardFooter className="gap-3">
												<div className="flex gap-1">
													<p className="text-small font-semibold text-default-400">
														4
													</p>
													<p className=" text-small text-default-400">
														Following
													</p>
												</div>
												<div className="flex gap-1">
													<p className="text-small font-semibold text-default-400">
														97.1K
													</p>
													<p className="text-small text-default-400">
														Followers
													</p>
												</div>
											</CardFooter>
										</Card>
									</div>
								))}
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}

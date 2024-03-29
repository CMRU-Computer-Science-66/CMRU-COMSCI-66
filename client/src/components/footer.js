import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from "@nextui-org/react";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default function FooterComp() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<div className="mt-52">
			<footer className="absolute bottom-0 w-full bg-white">
				<div className="mx-auto w-full max-w-screen-xl select-none p-4 py-6 lg:py-1">
					<hr className="my-3 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
					<div className="m-8 sm:flex sm:items-center sm:justify-between">
						<span className="m-2 flex items-center justify-center space-x-5 text-center lg:my-5">
							<a
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
								href="https://www.facebook.com/CMRUCOMPUTER"
							>
								<svg
									aria-hidden="true"
									className="size-4"
									fill="currentColor"
									viewBox="0 0 8 19"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clipRule="evenodd"
										d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
										fillRule="evenodd"
									/>
								</svg>
								<span className="sr-only">Facebook page</span>
							</a>
							<a
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
								href="#"
							>
								<svg
									aria-hidden="true"
									className="size-4"
									fill="currentColor"
									viewBox="0 0 21 16"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
								</svg>
								<span className="sr-only">Discord community</span>
							</a>
							<a
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
								href="https://github.com/Faelayis/CMRU-COMSCI-66"
							>
								<svg
									aria-hidden="true"
									className="size-4"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clipRule="evenodd"
										d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
										fillRule="evenodd"
									/>
								</svg>
								<span className="sr-only">GitHub Repository</span>
							</a>
						</span>
						<span className="text-center text-gray-500  dark:text-gray-400 sm:text-center">
							<p>© CMRU วิทยาการคอมพิวเตอร์ รุ่น 66 สงวนลิขสิทธิ์ พ.ศ.2566</p>
						</span>
						<span
							className="m-1 cursor-help text-center  text-gray-500 dark:text-gray-400 sm:text-right  "
							href="#"
							onClick={onOpen}
						>
							<p>v{publicRuntimeConfig.appVersion.project}</p>
							<p>
								<small>{publicRuntimeConfig.appVersion.date.short}</small>
							</p>
						</span>

						<Modal
							backdrop="blur"
							isOpen={isOpen}
							onOpenChange={onOpenChange}
							placement="auto"
						>
							<ModalContent className="select-none">
								{() => (
									<>
										<ModalHeader className="flex flex-col ">
											เวอร์ชั่น {publicRuntimeConfig.appVersion.project}
										</ModalHeader>
										<ModalBody>
											<ul>
												<ui className="font-bold ">เว็บไซต์</ui> <ui></ui>
												<small>
													{publicRuntimeConfig.appVersion.client.version}
												</small>
												<ul className="mx-2 list-outside list-none">
													<li>
														<ul>
															<li>
																┗ เฟรมเวิร์ก
																<ul className="mx-10 list-outside list-disc">
																	<li>
																		NextJS{" "}
																		<small>
																			{
																				publicRuntimeConfig.appVersion.client
																					.nextjs
																			}
																		</small>
																	</li>
																	<li>
																		NextUI{" "}
																		<small>
																			{
																				publicRuntimeConfig.appVersion.client
																					.nextui
																			}
																		</small>
																	</li>
																	<li>
																		Tailwind{" "}
																		<small>
																			{
																				publicRuntimeConfig.appVersion.client
																					.tailwind
																			}
																		</small>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
												</ul>
											</ul>

											<ul className="py-2">
												<ui className="font-bold ">ไลบรารี</ui>{" "}
												<ul className="mx-6 list-outside list-disc ">
													<li>
														API{" "}
														<small>
															{publicRuntimeConfig.appVersion.library.api}
														</small>
													</li>
													<li>
														Next-Core{" "}
														<small>
															{
																publicRuntimeConfig.appVersion.library[
																	"next-core"
																]
															}
														</small>
													</li>
													<li>
														Database{" "}
														<small>
															{publicRuntimeConfig.appVersion.library.database}
														</small>
													</li>
													<li>
														Utils{" "}
														<small>
															{publicRuntimeConfig.appVersion.library.utils}
														</small>
													</li>
												</ul>
											</ul>
										</ModalBody>
										<ModalFooter>
											<div className="text-right">
												<p className="font-bold">อัปเดทล่าสุด</p>
												<p>{publicRuntimeConfig.appVersion.date.full}</p>
											</div>
										</ModalFooter>
									</>
								)}
							</ModalContent>
						</Modal>
					</div>
					<div className="lg:my-5" />
				</div>
			</footer>
		</div>
	);
}

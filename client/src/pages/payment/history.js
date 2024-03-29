import { useArchivePaymentById } from "@api/archive";
import { PaymentMerge } from "@lib/utils/payment";
import {
	Card,
	Chip,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";

import DatePopover from "@/components/popover/date";
import LoadingSpinner from "@/components/spinner/loading";
import { Columns } from "@/config/payment";

export default function PaymentHistory() {
	const { data: session, status } = useSession();
	const {
		Payment: payment,
		isError: paymentIsError,
		isLoading: paymentIsLoading,
	} = useArchivePaymentById(session?.user?.studentId);
	const isLogin = status === "authenticated" || status === "loading";
	const [data, setData] = useState([]);
	const [isDesktop, setIsDesktop] = useState(true);

	useEffect(() => {
		try {
			const handleResize = () => {
				setIsDesktop(window.innerWidth > 768);
			};
			handleResize();
			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		} catch (error) {
			undefined;
		}
	}, []);

	useEffect(() => {
		if (payment?.length > 0) {
			return setData(PaymentMerge(payment));
		}
	}, [payment]);

	const renderCell = useCallback((list, columnKey) => {
		const cellValue = list[columnKey],
			getStatusChip = () => {
				const isPaid = cellValue,
					isPending = !isPaid && list.amount;
				const color = isPaid ? "success" : isPending ? "warning" : "danger";
				const text = isPaid
					? "จ่ายแล้ว"
					: isPending
						? "รอตรวจสอบ"
						: "ไม่ได้จ่าย";

				return (
					<Chip className="capitalize" color={color} size="sm" variant="flat">
						{text}
					</Chip>
				);
			};

		switch (columnKey) {
			case "date":
				return <DatePopover value={cellValue} />;
			case "name":
				if (!list.name) return;
				return (
					<div className="flex flex-col">
						<p className="text-bold text-sm capitalize">{cellValue}</p>
					</div>
				);
			case "status":
				return getStatusChip();
			case "details":
				if (!list.slip.name) return "-";
				return (
					// 	<div className="relative flex items-center gap-2">
					// 	<Popover placement="right" showArrow>
					// 		<PopoverTrigger>
					// 			<span className="cursor-pointer text-sm active:opacity-50">
					// 				{list.slip.name}
					// 			</span>
					// 		</PopoverTrigger>
					// 		<PopoverContent>
					// 			<div className="px-1 py-2">
					// 				<div className="text-sm">
					// 					<Image
					// 						alt=""
					// 						height="300"
					// 						src={list.slip.link}
					// 						style={{ height: "100%", width: "100%" }}
					// 						width="300"
					// 					/>
					// 				</div>
					// 			</div>
					// 		</PopoverContent>
					// 	</Popover>
					// </div>
					<div className="relative flex items-center gap-2" href={list.slip}>
						{list.slip.link ? (
							<span className="cursor-pointer text-sm active:opacity-50">
								<Link href={list.slip.link} target="_blank">
									{list.slip.name}
								</Link>
							</span>
						) : (
							list.slip.name
						)}
					</div>
				);
			default:
				return cellValue || "-";
		}
	}, []);

	return (
		<div>
			<Head>
				<title>Payment History</title>
			</Head>
			<div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
				<Card>
					<div className="px-8 py-6">
						{isLogin || session?.user ? (
							<>
								<h2 className="mt-3 select-none p-5 text-center text-3xl font-bold tracking-tight sm:text-4xl">
									ประวัติการจ่ายเงิน
								</h2>
								<Table
									bottomContent={
										paymentIsLoading || paymentIsError ? (
											<>
												<div className="flex w-full justify-center">
													<LoadingSpinner
														isError={paymentIsError}
														isLoading={paymentIsLoading}
													/>
												</div>
											</>
										) : undefined
									}
									className="select-none"
								>
									{isDesktop ? (
										<TableHeader columns={Columns}>
											{(column) => (
												<TableColumn
													align={column.uid === "actions" ? "center" : "start"}
													key={column.uid}
												>
													{column.name}
												</TableColumn>
											)}
										</TableHeader>
									) : (
										<TableHeader columns={Columns.slice(1, 4)}>
											{(column) => (
												<TableColumn
													align={column.uid === "actions" ? "center" : "start"}
													key={column.uid}
												>
													{column.name}
												</TableColumn>
											)}
										</TableHeader>
									)}
									<TableBody
										emptyContent={
											!(!paymentIsLoading && payment?.length > 0)
												? undefined
												: "ไม่พบข้อมูล"
										}
										hidden={paymentIsLoading}
										isLoading={!(!paymentIsLoading && payment?.length > 0)}
										items={data}
									>
										{(item) => (
											<TableRow key={item?.id}>
												{(columnKey) => (
													<TableCell>{renderCell(item, columnKey)}</TableCell>
												)}
											</TableRow>
										)}
									</TableBody>
								</Table>
							</>
						) : (
							<>
								<div className="mt-3 select-none p-5 text-center text-2xl font-bold tracking-tight">
									โปรดเข้าสู่ระบบด้วยอีเมลนักศึกษา{" "}
								</div>
								<div className="text-1 text-center">เข้าสู่ระบบด้วย Google</div>
							</>
						)}
					</div>
				</Card>
			</div>
		</div>
	);
}

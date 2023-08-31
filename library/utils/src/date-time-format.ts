export const get = (options?: Intl.DateTimeFormatOptions): string => {
	return new Intl.DateTimeFormat(
		"th-th",
		Object.assign(
			{
				dateStyle: "medium",
				timeStyle: "short",
				timeZone: "Asia/Bangkok",
			} as Intl.DateTimeFormatOptions,
			options,
		),
	).format();
};

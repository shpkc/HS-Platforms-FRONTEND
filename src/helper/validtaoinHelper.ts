export const validationHelper =
	(item: string, minLength?: number) =>
	(...a: string[]) => {
		const validTargetValue = item.trim();

		const valid = {
			// NOTE : 이메일 형식 유효성 검사
			email: () => {
				const regax =
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				const isValid = regax.test(validTargetValue);
				const msg = item.length > 0 ? "이메일 형식을 확인해 주세요." : "";
				return { result: isValid, msg: msg };
			},

			// NOTE : 특수문자, 한글 입력 불가 유효성 검사
			special: () => {
				const regax = /^[a-zA-Z0-9]*$/i;
				const isValid = regax.test(validTargetValue);
				const msg = "영문, 숫자로 입력해 주세요.";
				return { result: isValid, msg: msg };
			},
		} as {
			[key: string]: () => { result: boolean; msg: string };
		};

		const checkType = [...a];

		const result = checkType.reduce((current, next) =>
			valid[current]().result ? next : current
		);

		return valid[result]().result
			? { result: valid[result]().result, msg: "", value: validTargetValue }
			: { ...valid[result](), value: validTargetValue };
	};

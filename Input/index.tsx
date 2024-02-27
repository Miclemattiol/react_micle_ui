"use client";

import { useEffect, useState } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
	type,
	value,
	onChange,
	placeholder,
	className,
	...props
}: InputProps) => {
	const [_value, _setValue] = useState(value);
	const [selected, setSelected] = useState(false);

	const [filling, setFilling] = useState(false);

	useEffect(() => {
		if (_value) {
			console.log("Setting filling to true");
			setFilling(true);
		} else {
			console.log("Setting filling to false");
			setFilling(false);
		}
	}, [_value]);

	return (
		<div className={classNames(classNames, styles.Input)}>
			<div className={styles.inputWrapper}>
				<input
					onChange={(event) => {
						_setValue(event.target.value);
					}}
					onFocus={() => {
						setSelected(true);
					}}
					onBlur={() => {
						setSelected(false);
					}}
					type={type}
				/>
			</div>
			<span
				className={classNames(
					styles.placeholder,
					filling || selected ? styles.filling : undefined
				)}
			>
				{placeholder}
			</span>
		</div>
	);
};

export default Input;

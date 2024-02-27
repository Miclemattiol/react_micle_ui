import styles from "./Input.module.scss";
import classNames from "classnames";

type InputProps = React.ClassAttributes<HTMLInputElement> &
	React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
	type,
	value,
	onChange,
	onBlur,
	onFocus,
	placeholder,
	className,
	id,
	name,
	ref,
}: InputProps) => {
	return (
		<div className={classNames(className, styles.Input)}>
			<div className={styles.inputWrapper}>
				<input
					onChange={onChange}
					onBlur={onBlur}
					onFocus={onFocus}
					type={type}
					placeholder=" "
					id={id}
					name={name}
					value={value}
					ref={ref}
				/>
			</div>
			<label htmlFor={id}>{placeholder}</label>
		</div>
	);
};

export default Input;

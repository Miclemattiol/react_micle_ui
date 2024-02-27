import styles from "./Input.module.scss";
import classNames from "classnames";

type InputProps = React.ClassAttributes<HTMLInputElement> &
	React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ placeholder, className, ...props }: InputProps) => {
	return (
		<div className={classNames(className, styles.Input)}>
			<div className={styles.inputWrapper}>
				<input placeholder=" " {...props} />
			</div>
			<label htmlFor={props.id}>
				{placeholder}
				{props.required ? (
					<span className={styles.required}>*</span>
				) : null}
			</label>
		</div>
	);
};

export default Input;

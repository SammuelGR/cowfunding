import {
	Modal as ModalUI,
	ModalProps as ModalUIProps,
} from '@nextui-org/react';

export default function Modal({
	children,
	...modalProps
}: React.PropsWithChildren<ModalUIProps>) {
	return (
		<ModalUI
			classNames={{
				backdrop: 'bg-[#2b2b2b]/60 backdrop-opacity-80',
				base: 'border-[#0a0a0a] bg-[#0a0a0a] dark:bg-[#0a0a0a] text-[#ededed]',
			}}
			{...modalProps}
		>
			{children}
		</ModalUI>
	);
}

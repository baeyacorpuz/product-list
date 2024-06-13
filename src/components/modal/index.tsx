import Modal from "react-modal"

Modal.setAppElement('#root');

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: "75%"
	},
};

const ModalContainer = ({
	children,
	isPreviewOpen,
	togglePreviewModal,
}: any) => {
	return (
		<Modal
			isOpen={isPreviewOpen}
			onRequestClose={togglePreviewModal}
			contentLabel="Example Modal"
			style={customStyles}
		>
			{children}
		</Modal>
	);
}

export default ModalContainer;
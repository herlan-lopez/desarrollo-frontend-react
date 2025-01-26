import { motion } from "motion/react"


const ModalWelcome = ({ visible, message, onClose }) => {
    if (!visible) {
        return null;
    }
return (
        <div className="modal-overlay">
            <motion.div
                className="notification-welcome"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div>
                    <p><b>{message}</b></p>
                </div>
                <button
                    className="close-btn-welcome"
                    onClick={onClose}>
                    X
</button>
            </motion.div>
        </div>
    );
};

export default ModalWelcome;
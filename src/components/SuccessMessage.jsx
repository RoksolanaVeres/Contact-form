import { motion } from "framer-motion";
export default function SuccessMessage({ enteredData }) {
  const { firstName, email } = enteredData;

  return (
    <motion.div
      className="success-message"
      initial={{ opacity: 0, y: -100, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%", transition:{duration: 0.4, ease:"easeInOut"} }}
      exit={{ opacity: 0, y: -100, x: "-50%" }}
    >
      <h2 className="success-header">Message Sent!</h2>
      <p className="success-text">
        Thank you, {firstName}, for completing the form. We'll send you a confirmation letter to
        your email: {email}.
      </p>
    </motion.div>
  );
}

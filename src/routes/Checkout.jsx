import PaymentResponsive from "../components/PaymentResponsive";
import PaymentDesktop from "../components/PaymentDesktop";

export default function Checkout() {
  const width = window.innerWidth;

  return <>{width > 900 ? <PaymentDesktop /> : <PaymentResponsive />}</>;
}

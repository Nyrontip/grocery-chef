import LoginCard from "@/components/LoginCard";
import FooterInfo from "@/components/FooterInfo";
import "@/styles/login.css";

export default function LoginPage() {
  return (
    <div className="container">
      <LoginCard />
      <FooterInfo />
    </div>
  );
}

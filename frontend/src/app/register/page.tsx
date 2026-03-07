import "@/styles/register.css";
import "@/styles/auth-errors.css";
import RegisterCard from "@/components/register/RegisterCard";
import Footer from "@/components/register/Footer";

export default function RegisterPage() {
  return (
    <>
      <main>
        <RegisterCard />
      </main>

      <Footer />
    </>
  );
}

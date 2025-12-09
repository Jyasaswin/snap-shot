import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.email = "Please enter a valid email address";

    const passRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    if (!passRegex.test(password))
      newErrors.password = "Password must contain letters, numbers & min 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login success");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative container px-4 pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto glass rounded-2xl p-8 md:p-10 backdrop-blur-xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>

          <form className="space-y-5" onSubmit={submitHandler}>
            
            {/* Email Field */}
            <motion.div
              animate={errors.email ? { x: [-5, 5, -5, 0] } : {}}
              transition={{ duration: 0.3 }}
            >
              <label className="text-sm font-medium">Email</label>
              <div className={`flex items-center gap-2 mt-1 p-3 rounded-xl bg-background/60 border 
                ${errors.email ? "border-red-500 shadow-red-300/20 shadow-md" : "border-border"}`}>
                <Mail className="w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  className="w-full bg-transparent outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>

            {/* Password Field */}
            <motion.div
              animate={errors.password ? { x: [-5, 5, -5, 0] } : {}}
              transition={{ duration: 0.3 }}
            >
              <label className="text-sm font-medium">Password</label>
              <div className={`flex items-center gap-2 mt-1 p-3 rounded-xl bg-background/60 border 
                ${errors.password ? "border-red-500 shadow-red-300/20 shadow-md" : "border-border"}`}>
                <Lock className="w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  className="w-full bg-transparent outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </motion.div>

            <Button
              size="lg"
              className="w-full button-gradient mt-4"
              type="submit"
            >
              Login <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Don't have an account? 
            <Link className="text-primary ml-1 font-medium" to="/signup">
              Create one
            </Link>
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

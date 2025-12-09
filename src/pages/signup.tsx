import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

  const validateForm = () => {
    const e: { name?: string; email?: string; password?: string } = {};

    if (form.name.length < 3) {
      e.name = "Name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email))
      e.email = "Enter a valid email address";

    const passRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    if (!passRegex.test(form.password))
      e.password = "Password must have letters, numbers & min 6 characters";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Signup success");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative container px-4 pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto glass rounded-2xl p-8 md:p-10 backdrop-blur-xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>

          <form className="space-y-5" onSubmit={submitHandler}>

            {/* Name */}
            <motion.div
              animate={errors.name ? { x: [-5, 5, -5, 0] } : {}}
              transition={{ duration: 0.3 }}
            >
              <label className="text-sm font-medium">Full Name</label>
              <div className={`flex items-center gap-2 mt-1 p-3 rounded-xl bg-background/60 border 
                ${errors.name ? "border-red-500 shadow-red-300/20 shadow-md" : "border-border"}`}>
                <User className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  className="w-full bg-transparent outline-none"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </motion.div>

            {/* Email */}
            <motion.div
              animate={errors.email ? { x: [-5, 5, -5, 0] } : {}}
            >
              <label className="text-sm font-medium">Email</label>
              <div className={`flex items-center gap-2 mt-1 p-3 rounded-xl bg-background/60 border 
                ${errors.email ? "border-red-500 shadow-red-300/20 shadow-md" : "border-border"}`}>
                <Mail className="w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  className="w-full bg-transparent outline-none"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </motion.div>

            {/* Password */}
            <motion.div
              animate={errors.password ? { x: [-5, 5, -5, 0] } : {}}
            >
              <label className="text-sm font-medium">Password</label>
              <div className={`flex items-center gap-2 mt-1 p-3 rounded-xl bg-background/60 border 
                ${errors.password ? "border-red-500 shadow-red-300/20 shadow-md" : "border-border"}`}>
                <Lock className="w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  className="w-full bg-transparent outline-none"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </motion.div>

            <Button size="lg" className="w-full button-gradient mt-4" type="submit">
              Sign Up <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Already have an account? 
            <Link className="text-primary ml-1 font-medium" to="/login">Login</Link>
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

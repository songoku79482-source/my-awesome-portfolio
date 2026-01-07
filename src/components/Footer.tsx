import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/atul-patel-673b46318/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:atulrpatel007@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/atulrpatel007", label: "GitHub" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                <Code2 className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="font-display text-xl font-bold">Atul Patel</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">Building digital experiences that matter.</p>
          </div>

          <div className="text-center">
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-3">
              {socialLinks.map((social) => (
                <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }} className="w-10 h-10 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all group">
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; Built by <span className="text-foreground font-medium">Atul Patel</span></p>
          <motion.button onClick={scrollToTop} whileHover={{ y: -3 }} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
            <span>Back to top</span>
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-8 h-8 rounded-full border border-border group-hover:border-primary/50 flex items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

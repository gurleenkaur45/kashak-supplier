import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-16">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div>
              <h3 className="font-display font-bold text-foreground">
                Kasak Traders & Suppliers
              </h3>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Nepal's trusted source for automotive parts and hardware equipment
            since 2010.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">
            Quick Links
          </h4>
          <div className="space-y-2">
            {["/", "/shop", "/cart", "/checkout"].map((link) => (
              <Link
                key={link}
                to={link}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link === "/"
                  ? "Home"
                  : link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">
            Categories
          </h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>🏍️ Bike Parts</p>
            <p>🚗 Car Parts</p>
            <p>🚚 Truck Parts</p>
            <p>🚑 Ambulance Equipment</p>
            <p>🚜 Tractor Parts</p>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">
            Contact
          </h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> New Baneshwor,
              Kathmandu
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" /> +977-01-4567890
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" /> info@nepalautoparts.com
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
        © 2026 Kasak Traders & Suppliers All rights reserved. | Payment: eSewa •
        Khalti • COD
      </div>
    </div>
  </footer>
);

export default Footer;

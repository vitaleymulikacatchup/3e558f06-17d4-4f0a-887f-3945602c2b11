"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Star, Bed, Crown, Sparkles, ChefHat, Waves, HeadphonesIcon, MessageCircle, Calendar } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Luxe Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Unparalleled Luxury"
          description="Discover the epitome of hospitality at Grand Luxe Hotel, where every moment is crafted to exceed your expectations with world-class service and elegant accommodations."
          tag="5-Star Experience"
          tagIcon={Star}
          buttons={[
            {
              text: "Reserve Your Stay",
              href: "contact"
            },
            {
              text: "View Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant lobby with comfortable sofas, large windows, and natural light enhancing the indoor ambiance."
          imagePosition="right"
        />
      </div>
      
      <div id="rooms" data-section="rooms">
        <ProductCardThree
          title="Luxurious Accommodations"
          description="Choose from our selection of meticulously designed rooms and suites, each offering the perfect blend of comfort and sophistication."
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "1",
              name: "Deluxe Suite",
              price: "$299/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A soft-lit hotel room entrance, welcoming guests with luxury appeal and comfort.",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Executive Room",
              price: "$199/night",
              imageSrc: "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant restaurant interior featuring chandeliers, greenery, and stylish dining furnishings.",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Presidential Suite",
              price: "$599/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A soft-lit hotel room entrance, welcoming guests with luxury appeal and comfort.",
              initialQuantity: 1
            }
          ]}
        />
      </div>
      
      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our carefully curated selection of amenities designed to enhance every aspect of your stay."
          tag="Premium Services"
          tagIcon={Crown}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your mind and body at our award-winning spa featuring premium treatments and state-of-the-art facilities.",
              icon: Sparkles
            },
            {
              title: "Fine Dining Experience",
              description: "Savor exquisite cuisine prepared by our world-renowned chefs using the finest local and international ingredients.",
              icon: ChefHat
            },
            {
              title: "Rooftop Pool & Lounge",
              description: "Relax in our infinity pool while enjoying breathtaking city views from our exclusive rooftop terrace.",
              icon: Waves
            },
            {
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, tours, and special requests.",
              icon: HeadphonesIcon
            }
          ]}
        />
      </div>
      
      <div id="reviews" data-section="reviews">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Discover why discerning travelers choose Grand Luxe Hotel for their most important stays."
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahmitchell_travel",
              testimonial: "Absolutely exceptional service and attention to detail. The staff anticipated every need and the suite was beyond luxurious. Will definitely return.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."
            },
            {
              id: "2",
              name: "James Richardson",
              handle: "@jamesrich_exec",
              testimonial: "Perfect for business travelers. The executive lounge, high-speed internet, and quiet atmosphere made my stay incredibly productive and comfortable.",
              imageSrc: "https://images.pexels.com/photos/447570/pexels-photo-447570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Close-up of a man in a tailored suit wearing an elegant wristwatch outdoors, exuding fashion and sophistication."
            },
            {
              id: "3",
              name: "Emily Chen",
              handle: "@emilyc_wanderlust",
              testimonial: "The spa treatments were divine and the rooftop pool offered stunning city views. Every moment felt like pure indulgence and relaxation.",
              imageSrc: "https://images.pexels.com/photos/8425032/pexels-photo-8425032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Stylish senior woman in a suit adjusting her glasses while sitting in a car."
            },
            {
              id: "4",
              name: "David Thompson",
              handle: "@davidthompson_biz",
              testimonial: "From the moment I walked into the lobby, I knew this was special. The personalized service and attention to detail exceeded all expectations.",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Colleagues celebrate success with a fist bump over financial charts depicting teamwork and unity."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Book Your Stay"
          title="Ready for an Unforgettable Experience?"
          description="Contact our reservations team to secure your luxury accommodation and begin planning your perfect getaway at Grand Luxe Hotel."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email for booking"
          buttonText="Get Availability"
          termsText="By submitting, you agree to receive booking information and exclusive offers from Grand Luxe Hotel."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Business Center", href: "business" },
                { label: "Event Planning", href: "events" },
                { label: "Transportation", href: "transport" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Guest Services", href: "services" },
                { label: "Location", href: "location" },
                { label: "Reviews", href: "reviews" }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Luxe Hotel"
        />
      </div>
    </ThemeProvider>
  );
}
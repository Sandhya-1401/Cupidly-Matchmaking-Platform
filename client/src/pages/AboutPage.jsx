import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { motion } from "framer-motion";
import { Shield, CheckCircle, Globe, MessageCircle } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

import './AboutPage.css'
const AboutPage = () => {

    // 👇 Scroll animation for step-cards
    useEffect(() => {
        const cards = document.querySelectorAll(".step-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // stagger delay effect
                        entry.target.style.animationDelay = `${index * 0.2}s`;
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );


        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);

    // testimonial data
    const testimonials = [
        {
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "We met on Cupidly and now we’re happily married!",
            name: "Priya & Raj"
        },
        {
            img: "https://randomuser.me/api/portraits/men/46.jpg",
            text: "Cupidly made it so easy to find my soulmate.",
            name: "Ankit"
        },
        {
            img: "https://randomuser.me/api/portraits/women/68.jpg",
            text: "We connected instantly and now we’re planning our wedding!",
            name: "Neha & Arjun"
        },
        {
            img: "https://randomuser.me/api/portraits/men/33.jpg",
            text: "Best decision ever to join Cupidly ❤",
            name: "Rohit"
        },
        {
            img: "https://randomuser.me/api/portraits/men/33.jpg",
            text: "Best decision ever to join Cupidly ❤",
            name: "Sahil & Riya"
        },
        {
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "We met on Cupidly and now we’re happily married!",
            name: "Priya & Raj"
        },
    ];

    const [index, setIndex] = React.useState(0);
    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };
    const nextSlide = () => {
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    // Auto slide
    React.useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 3000); // every 3s
        return () => clearInterval(timer);
    }, [index]);


    return (
        <div className="cupidly-container">
            {/* Navigation Bar */}
            <nav className="cupidly-nav modern-nav">
                <div className="logo-container">
                    <div className="cupidly-logo">
                        <img src="/bg/love-message.gif" alt="Cupidly Logo" />
                    </div>
                    <h1 className="logo-text">Cupidly</h1>
                </div>

                {/* Desktop Nav Links */}
                <div className="nav-links">
                    <Link to="/"><span className="nav-item">Home</span></Link>
                    <Link to="/about"><span className="nav-item">About</span></Link>
                    <Link to="/features"><span className="nav-item">Features</span></Link>
                    <Link to="/contact"><span className="nav-item">Contact</span></Link>
                    <Link to="/faq"><span className="nav-item">FAQ</span></Link>
                </div>

                {/* CTA Buttons */}
                <div className="nav-cta">
                    <Link to={"/auth"}>
                        <button className="login-button">Login</button>
                    </Link>
                    <Link to={"/auth"}>
                        <button className="signup-button">Sign Up</button>
                    </Link>
                </div>
            </nav>

            {/* Wrapper with continuous background */}
            <div className="hero-features-wrapper">
                {/* Hero Section */}
                <div className="hero-section relative overflow-hidden">
                    {/* Left Side (Heading + Button) */}
                    <div className="hero-left">
                        <motion.h2
                            className="hero-heading"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Typewriter
                                options={{
                                    strings: [
                                        "Find Your Perfect Match",
                                        "Swipe. Connect. Love.",
                                        "Meet Amazing People ❤️",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                }}
                            />
                        </motion.h2>

                        <Link to={"/auth"}>
                            <button className="cta-button">Get Started</button>
                        </Link>
                    </div>

                    {/* Right Side (Phone Mockup) */}
                    <motion.div
                        className="phone-mockup relative z-10"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="phone-screen">
                            <table className="phone-table">
                                <tbody>
                                    <tr>
                                        <td className="phone-frame">
                                            <video
                                                src="/bg/new.mp4"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="phone-video"
                                            ></video>
                                            <div className="overlay-controls">
                                                <div className="action-buttons">
                                                    <button className="btn dislike">❌</button>
                                                    <button className="btn superlike">⭐</button>
                                                    <button className="btn like">❤️</button>
                                                    <button className="btn gift">🎁</button>
                                                </div>
                                                <div className="swipe-bar"></div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>

                <div className="wave-container">
                    <svg
                        className="wave-svg"
                        viewBox="0 0 1200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,100 C150,200 350,0 600,100 C850,200 1050,0 1200,100"
                            className="wave-path"
                        ></path>
                    </svg>
                </div>




                {/* Features Section */}
                <div className="features-container">
                    <h2 className="features-title">
                        Meet Genuine Singles and <span>Find Your Match !!</span>
                    </h2>
                    <div className="features-wrapper">
                        <div className="feature-card">
                            <img
                                src="/bg/icons8-location.gif"
                                alt="Location"
                                className="feature-icon"
                            />
                            <h3>
                                Match From Anywhere in <span>Any Country</span>
                            </h3>
                            <p>Not Just Your City or State</p>
                        </div>
                        <div className="feature-card">
                            <img
                                src="/bg/icons8-chat-bubble.gif"
                                alt="Chat"
                                className="feature-icon"
                            />
                            <h3>Chat with Matching</h3>
                            <p>Say Hello and Start Your Journey</p>
                        </div>
                        <div className="feature-card">
                            <img
                                src="/bg/icons8-romance.gif"
                                alt="Meet"
                                className="feature-icon"
                            />
                            <h3>
                                It’s For Everyone <span>Match & Chat</span>
                            </h3>
                            <p>Make New Friends via Matchmaker</p>
                        </div>
                    </div>
                </div>
            </div>














            {/* ✅ How It Works Section */}
            <section className="how-it-works">
                <h1 className="how-heading">How It Works (Step by Step)</h1>
                <div className="steps-wrapper">
                    <div className="step-card">
                        <img src="/bg/icons8-edit.gif" alt="Step 1" />
                        <h3>Step 1</h3>
                        <p>Create Profile</p>
                    </div>
                    <div className="step-card">
                        <img src="/bg/icons8-arrow.gif" alt="Step 2" />
                        <h3>Step 2</h3>
                        <p>Swipe & Connect</p>
                    </div>
                    <div className="step-card">
                        <img src="/bg/icons8-communication.gif" alt="Step 3" />
                        <h3>Step 3</h3>
                        <p>Start Chatting</p>
                    </div>
                    <div className="step-card">
                        <img src="/bg/icons8-love-circled.gif" alt="Step 4" />
                        <h3>Step 4</h3>
                        <p>Find Love ❤</p>
                    </div>
                </div>
            </section>








            {/* ===== WHY CHOOSE CUPIDLY ===== */}
            <section className="why-choose">
                <motion.h2
                    className="why-title"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Why Choose <span className="highlight">Cupidly?</span>
                </motion.h2>

                <motion.p
                    className="why-subtext"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    We’re here to make online matchmaking <strong>safe, simple, and meaningful.</strong>
                </motion.p>

                <div className="why-grid">
                    <motion.div
                        className="why-card"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Shield className="why-icon" />
                        <h3>Safety & Privacy</h3>
                        <p>Your data is encrypted and your privacy is always protected.</p>
                    </motion.div>

                    <motion.div
                        className="why-card"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <CheckCircle className="why-icon" />
                        <h3>Verified Profiles</h3>
                        <p>Every profile is checked to ensure you connect with real people.</p>
                    </motion.div>

                    <motion.div
                        className="why-card"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Globe className="why-icon" />
                        <h3>Global Reach</h3>
                        <p>Meet genuine singles from all over the world without boundaries.</p>
                    </motion.div>

                    <motion.div
                        className="why-card"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <MessageCircle className="why-icon" />
                        <h3>Free Chatting</h3>
                        <p>Enjoy unlimited conversations without hidden charges.</p>
                    </motion.div>
                </div>
            </section>

            {/* ===== Testimonials (Carousel) ===== */}
            <section className="testimonials">
                <h2>Success Stories 💖</h2>

                <div className="testimonial-slider">
                    {/* Left Button */}
                    <button className="slider-btn left" onClick={prevSlide}>❮</button>

                    <motion.div
                        className="testimonial-track"
                        animate={{ x: -index * 340 }}
                        transition={{ type: "spring", stiffness: 70 }}
                    >
                        {testimonials.map((t, i) => (
                            <div className="testimonial-card" key={i}>
                                <img src={t.img} alt={t.name} />
                                <p>"{t.text}"</p>
                                <h4>- {t.name}</h4>
                            </div>
                        ))}
                    </motion.div>

                    {/* Right Button */}
                    <button className="slider-btn right" onClick={nextSlide}>❯</button>
                </div>

                {/* Dots */}
                <div className="dots">
                    {testimonials.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === index ? "active" : ""}`}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            </section>



            {/* ===== Love + CTA Wrapper with Static Background ===== */}
            <div className="love-wrapper">
                {/* ===== Find Your Love Section ===== */}
                <section className="find-love-section">
                    <div className="container1">
                        {/* Left Side Text */}
                        <div className="text-box">
                            <h1 className="find-love-heading">
                                <span>Find</span> Your Love 💖
                            </h1>
                            <p className="find-love-subtext">
                            Love is about connection, understanding, and shared dreams.<br />
                                <span className="highlight"> Cupidly</span> helps you meet genuine people,
                                discover meaningful bonds, and write your own new love story.
                            </p>

                            <ul className="love-points">
                                <li>🌸 Genuine & Verified Profiles</li>
                                <li>💬 Meaningful Conversations</li>
                                <li>🌍 Meet People Around You</li>
                                <li>💞 Safe, Fun & Simple</li>
                            </ul>

                            <button className="download-btn">✨ Join Us Today</button>
                        </div>

                        {/* Right Side Image */}
                        <div className="image-box">
                            <img
                                src="/bg/download.jpeg"
                                alt="Find Love Illustration"
                                className="love-image"
                            />
                            <div className="floating-card">
                                💌 Someone Special is Waiting For You...
                            </div>
                        </div>
                    </div>
                </section>

                {/* Download & Join Section */}
                <section className="download-cta">
                    <div className="download-cta-content">
                        <div className="left">
                            <h2 className="heading">
                                Find Love Anytime, Anywhere 💖
                            </h2>
                            <p className="subtext">
                                Join <span className="highlight">10,000+ happy couples</span> already using Cupidly.
                                Download our app and start your journey today — it's fun, safe, and truly yours.
                            </p>

                            <div className="store-buttons">
                                <button className="store-button">📱 Google Play</button>
                                <button className="store-button">🍎 App Store</button>
                            </div>

                            <Link to={"/auth"}>
                                <button className="cta-big">💌 Sign Up & Start Matching</button>
                            </Link>
                        </div>

                        <div className="right">
                            <img
                                src="/bg/1.gif"
                                alt="App Mockup"
                                className="app-mockup floating"
                            />
                        </div>
                    </div>
                </section>

            </div>

            <footer className="footer">
                <div className="footer-container">

                    {/* Logo + Description */}
                    <div className="footer-logo">
                        <h2 className="logo-text">Cupidly</h2>
                        <p className="footer-tagline">
                            Find your perfect match. Safe, genuine & modern way to connect.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/features">Features</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="footer-links">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Cupidly. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default AboutPage;
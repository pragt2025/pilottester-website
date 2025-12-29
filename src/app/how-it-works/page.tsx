'use client';

import React, { useEffect, useState, useRef } from 'react';
import './how-it-works.css';

export default function HowItWorksPage() {
    const [currentView, setCurrentView] = useState<string | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const showTesterPage = () => {
        document.getElementById('modalOverlay')?.classList.add('hidden');
        document.getElementById('testerPage')?.classList.add('active');
        document.getElementById('submitterPage')?.classList.remove('active');
        const toggleBtn = document.getElementById('toggleBtn');
        if (toggleBtn) {
            toggleBtn.style.display = 'block';
            toggleBtn.textContent = '📱 Switch to Submitter View';
        }
        const headerTitle = document.getElementById('headerTitle');
        if(headerTitle) headerTitle.textContent = '👤 How It Works - For Testers';
        const headerSubtitle = document.getElementById('headerSubtitle');
        if(headerSubtitle) headerSubtitle.textContent = 'Your Journey with Pilot Testers';
        setCurrentView('tester');
    };

    const showSubmitterPage = () => {
        document.getElementById('modalOverlay')?.classList.add('hidden');
        document.getElementById('submitterPage')?.classList.add('active');
        document.getElementById('testerPage')?.classList.remove('active');
        const toggleBtn = document.getElementById('toggleBtn');
        if (toggleBtn) {
            toggleBtn.style.display = 'block';
            toggleBtn.textContent = '👤 Switch to Tester View';
        }
        const headerTitle = document.getElementById('headerTitle');
        if(headerTitle) headerTitle.textContent = '📱 How It Works - For App Submitters';
        const headerSubtitle = document.getElementById('headerSubtitle');
        if(headerSubtitle) headerSubtitle.textContent = 'Your Guide to Submitting Apps for Testing';
        
        setCurrentView('submitter');
    };

    const toggleView = () => {
        if (currentView === 'tester') {
            showSubmitterPage();
        } else {
            showTesterPage();
        }
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, observerOptions);

        observerRef.current = observer;

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        if (currentView) {
            if (observerRef.current) {
                observerRef.current.disconnect();
                const cards = document.querySelectorAll('.step-card');
                cards.forEach(card => {
                    card.classList.remove('visible');
                    observerRef.current!.observe(card);
                });
            }
        }
    }, [currentView]);

    useEffect(() => {
        const icons = document.querySelectorAll('.step-icon');
        icons.forEach((icon, index) => {
            (icon as HTMLElement).style.animationDelay = `${index * 0.2}s`;
        });
    }, []);


    return (
        <>
            <div className="modal-overlay" id="modalOverlay">
                <div className="modal-content">
                    <h2>🚀 How It Works</h2>
                    <p>Choose your path to get started with Pilot Testers</p>
                    <div className="modal-buttons">
                        <button className="modal-btn tester" onClick={showTesterPage}>
                            👤 Being a Tester
                        </button>
                        <button className="modal-btn submitter" onClick={showSubmitterPage}>
                            📱 Being an App Submitter
                        </button>
                    </div>
                </div>
            </div>

            <button className="toggle-btn" id="toggleBtn" onClick={toggleView} style={{ display: 'none' }}>
                Switch View
            </button>

            <svg className="thinking-icon left" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="thinkingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="80" fill="url(#thinkingGrad1)" />
                <circle cx="85" cy="85" r="8" fill="white" />
                <circle cx="115" cy="85" r="8" fill="white" />
                <path d="M 75 120 Q 100 105 125 120" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                <circle cx="50" cy="30" r="12" fill="url(#thinkingGrad1)" opacity="0.7" />
                <circle cx="35" cy="50" r="8" fill="url(#thinkingGrad1)" opacity="0.5" />
                <circle cx="25" cy="70" r="5" fill="url(#thinkingGrad1)" opacity="0.3" />
            </svg>

            <svg className="thinking-icon right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="thinkingGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="80" fill="url(#thinkingGrad2)" />
                <circle cx="85" cy="85" r="8" fill="white" />
                <circle cx="115" cy="85" r="8" fill="white" />
                <circle cx="100" cy="115" r="15" fill="white" opacity="0.3" />
                <path d="M 85 105 Q 100 115 115 105" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                <circle cx="150" cy="30" r="12" fill="url(#thinkingGrad2)" opacity="0.7" />
                <circle cx="165" cy="50" r="8" fill="url(#thinkingGrad2)" opacity="0.5" />
                <circle cx="175" cy="70" r="5" fill="url(#thinkingGrad2)" opacity="0.3" />
            </svg>

            <div className="header">
                <h1 id="headerTitle">🚀 How It Works</h1>
                <p id="headerSubtitle">Your Journey with Pilot Testers</p>
            </div>

            <div id="testerPage" className="page-content">
                <div className="container">
                    <div className="intro-section">
                        <h2>Become a Tester in Minutes</h2>
                        <p>Becoming a tester on Pilot Testers is quick and effortless—just a few steps to get started and begin your testing journey. Join thousands of testers helping to improve apps while earning rewards!</p>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" cy="150" r="120" fill="url(#grad1)" opacity="0.2" />
                                <circle cx="150" cy="120" r="50" fill="url(#grad1)" />
                                <path d="M 80 200 Q 150 160 220 200 L 220 250 Q 150 280 80 250 Z" fill="#764ba2" />
                                <circle cx="130" cy="115" r="8" fill="white" />
                                <circle cx="170" cy="115" r="8" fill="white" />
                                <path d="M 130 140 Q 150 150 170 140" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">1</div>
                            <h3>Sign Up & Get Started</h3>
                            <ul>
                                <li>Sign up using basic information or choose Google Sign-In for faster access</li>
                                <li>Quick and simple registration process takes less than 2 minutes</li>
                                <li>As a welcome gift, you'll receive <span className="reward-badge">🎁 30 Reward Points</span> on your first registration</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <rect x="80" y="50" width="140" height="200" rx="15" fill="url(#grad2)" />
                                <rect x="95" y="65" width="110" height="150" fill="white" rx="8" />
                                <circle cx="150" cy="235" r="12" fill="white" />
                                <text x="150" y="155" fontSize="90" fill="url(#grad2)" textAnchor="middle" fontWeight="bold">G</text>
                                <rect x="115" y="90" width="70" height="8" rx="4" fill="#667eea" opacity="0.3" />
                                <rect x="115" y="110" width="70" height="8" rx="4" fill="#667eea" opacity="0.3" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">2</div>
                            <h3>Join the Pilot Testers Google Group</h3>
                            <ul>
                                <li>After signing in, navigate to the Settings page</li>
                                <li>Join the Pilot Testers Google Group with one click</li>
                                <li>This step is essential to ensure all submitted apps load correctly on the Google Play Store</li>
                                <li>You'll receive a confirmation email once you've joined successfully</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <rect x="50" y="80" width="80" height="110" rx="12" fill="url(#grad3)" />
                                <rect x="170" y="80" width="80" height="110" rx="12" fill="#764ba2" />
                                <rect x="50" y="210" width="80" height="40" rx="12" fill="#f093fb" />
                                <rect x="170" y="210" width="80" height="40" rx="12" fill="#f5576c" />
                                <circle cx="90" cy="120" r="15" fill="white" opacity="0.8" />
                                <circle cx="210" cy="120" r="15" fill="white" opacity="0.8" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">3</div>
                            <h3>Discover New Apps to Test</h3>
                            <ul>
                                <li>Visit your Dashboard to explore apps submitted by other users</li>
                                <li>Browse through discoverable apps and select the one that matches your interest</li>
                                <li>Filter apps by category, popularity, or newest additions</li>
                                <li>Each app shows clear testing requirements and reward details</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" cy="150" r="100" fill="url(#grad4)" opacity="0.3" />
                                <circle cx="150" cy="150" r="70" fill="#764ba2" opacity="0.5" />
                                <circle cx="150" cy="150" r="45" fill="url(#grad4)" />
                                <path d="M 150 110 L 162 135 L 190 135 L 168 152 L 175 180 L 150 162 L 125 180 L 132 152 L 110 135 L 138 135 Z" fill="white" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">4</div>
                            <h3>Join the App Owner's Google Group</h3>
                            <ul>
                                <li>Before testing, you must join the App Owner's Google Group</li>
                                <li>This allows closed-testing apps to appear in the Play Store</li>
                                <li>Simple one-click process directly from the app details page</li>
                            </ul>
                            <div className="warning">
                                <strong>⚠️ Important:</strong> Use the same Google account for joining the Google Group and accessing the Play Store. Account mismatch may prevent the app from loading.
                            </div>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <rect x="80" y="90" width="140" height="120" rx="15" fill="url(#grad5)" />
                                <circle cx="150" cy="150" r="40" fill="white" />
                                <path d="M 140 145 L 148 160 L 165 135" stroke="url(#grad5)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="110" cy="110" r="8" fill="white" opacity="0.5" />
                                <circle cx="190" cy="110" r="8" fill="white" opacity="0.5" />
                                <circle cx="110" cy="190" r="8" fill="white" opacity="0.5" />
                                <circle cx="190" cy="190" r="8" fill="white" opacity="0.5" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">5</div>
                            <h3>Allow Usage Tracking Permission</h3>
                            <ul>
                                <li>Grant permission to collect app usage data for accurate tracking</li>
                                <li>This helps Pilot Testers track how long you've tested the app</li>
                                <li>Minimum required testing time is <strong>5 minutes</strong></li>
                                <li>Permissions can be enabled during testing or from the Settings page</li>
                                <li>Your privacy is protected - only testing duration is tracked</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" cy="150" r="100" fill="url(#grad6)" />
                                <polygon points="150,80 175,130 230,130 185,165 200,220 150,185 100,220 115,165 70,130 125,130" fill="white" />
                                <circle cx="150" cy="150" r="25" fill="url(#grad6)" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">6</div>
                            <h3>Start Testing the App</h3>
                            <ul>
                                <li>Click the "Test Now" button to begin your testing session</li>
                                <li>Download and launch the app—your test timer starts automatically</li>
                                <li>Explore all features and functionality thoroughly</li>
                                <li>After completing 5 minutes of testing, you'll be eligible to submit feedback and ratings</li>
                                <li>Take notes of any bugs or issues you encounter</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <rect x="60" y="70" width="180" height="160" rx="15" fill="url(#grad7)" />
                                <rect x="75" y="85" width="150" height="110" fill="white" rx="8" />
                                <line x1="90" y1="110" x2="210" y2="110" stroke="url(#grad7)" strokeWidth="4" strokeLinecap="round" />
                                <line x1="90" y1="135" x2="210" y2="135" stroke="url(#grad7)" strokeWidth="4" strokeLinecap="round" />
                                <line x1="90" y1="160" x2="180" y2="160" stroke="url(#grad7)" strokeWidth="4" strokeLinecap="round" />
                                <circle cx="150" cy="210" r="8" fill="white" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">7</div>
                            <h3>Submit Feedback & Ratings</h3>
                            <ul>
                                <li>Some apps require feedback; others make it optional</li>
                                <li>If feedback is mandatory, the feedback field will be required before submission</li>
                                <li>Rate your overall experience with the app (1-5 stars)</li>
                                <li>Always read the app instructions carefully for better testing results</li>
                                <li>Provide constructive feedback to help developers improve</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" cy="150" r="100" fill="url(#grad8)" />
                                <text x="150" y="175" fontSize="110" fill="white" textAnchor="middle" fontWeight="bold">$</text>
                                <circle cx="200" cy="100" r="30" fill="#f093fb" />
                                <text x="200" y="115" fontSize="35" fill="white" textAnchor="middle" fontWeight="bold">+</text>
                                <circle cx="230" cy="180" r="15" fill="white" opacity="0.5" />
                                <circle cx="70" cy="100" r="15" fill="white" opacity="0.5" />
                                <circle cx="90" cy="220" r="20" fill="white" opacity="0.5" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">8</div>
                            <h3>Earn Rewards</h3>
                            <p>After successfully submitting your test, rewards are instantly credited to your account:</p>
                            <ul>
                                <li>Earn <span className="reward-badge">⭐ 30 Reward Points</span> for completing your test</li>
                                <li>Get an additional <span className="reward-badge">🎬 10 Points</span> by watching a reward video ad</li>
                                <li>Points accumulate and can be redeemed for exciting rewards</li>
                                <li>Track your total earnings in your profile dashboard</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad9" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" cy="150" r="100" fill="url(#grad9)" />
                                <path d="M 100 150 L 130 180 L 200 100" stroke="white" strokeWidth="15" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="150" cy="150" r="110" fill="none" stroke="white" strokeWidth="5" opacity="0.3" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">9</div>
                            <h3>That's It — You're a Tester!</h3>
                            <p>You're now officially part of the Pilot Testers community and ready to help improve apps while earning rewards.</p>
                            <ul>
                                <li>Access unlimited testing opportunities</li>
                                <li>Build your reputation as a trusted tester</li>
                                <li>Connect with developers and other testers</li>
                                <li>Earn rewards for every completed test</li>
                            </ul>
                        </div>
                    </div>

                    <div className="thank-you">
                        <h2>🎉 Thank You!</h2>
                        <p>Thank you for choosing Pilot Testers and contributing to better app experiences!</p>
                        <p style={{ marginTop: '1.5rem', fontSize: '1.2rem' }}>Ready to start your testing journey? Sign up today and earn your first 30 points instantly! 🚀</p>
                    </div>
                </div>
            </div>

            <div id="submitterPage" className="page-content">
                <div className="container">
                    <div className="intro-section">
                        <h2>Submit Your App for Testing</h2>
                        <p>Getting your app tested on Pilot Testers is simple and straightforward. Follow these steps to get valuable feedback from real users!</p>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradS1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" cy="150" r="120" fill="url(#gradS1)" opacity="0.2" />
                                <circle cx="150" cy="120" r="50" fill="url(#gradS1)" />
                                <path d="M 80 200 Q 150 160 220 200 L 220 250 Q 150 280 80 250 Z" fill="#f5576c" />
                                <circle cx="130" cy="115" r="8" fill="white" />
                                <circle cx="170" cy="115" r="8" fill="white" />
                                <path d="M 130 140 Q 150 150 170 140" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">1</div>
                            <h3>Create Your Account</h3>
                            <ul>
                                <li>Getting started on Pilot Testers is simple</li>
                                <li>Create an account using basic information or use Google Sign-In for faster setup</li>
                                <li>Takes less than 2 minutes to get started</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradS2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <rect x="100" y="80" width="100" height="120" rx="15" fill="url(#gradS2)" />
                                <circle cx="150" cy="60" r="20" fill="url(#gradS2)" />
                                <path d="M 140 50 L 150 30 L 160 50" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                                <rect x="130" y="120" width="40" height="5" fill="white" opacity="0.8" />
                                <rect x="130" y="140" width="40" height="5" fill="white" opacity="0.8" />
                                <rect x="130" y="160" width="40" height="5" fill="white" opacity="0.8" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">2</div>
                            <h3>Welcome Rewards</h3>
                            <ul>
                                <li>On your first registration, you'll receive <span className="reward-badge">🎁 30 Points</span> as a welcome gift</li>
                                <li>Use these points to submit your first app for testing</li>
                                <li>Start your journey with instant rewards!</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradS3" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <rect x="80" y="50" width="140" height="200" rx="15" fill="url(#gradS3)" />
                                <rect x="95" y="65" width="110" height="150" fill="white" rx="8" />
                                <circle cx="150" cy="235" r="12" fill="white" />
                                <text x="150" y="155" fontSize="90" fill="url(#gradS3)" textAnchor="middle" fontWeight="bold">G</text>
                                <rect x="115" y="90" width="70" height="8" rx="4" fill="#f5576c" opacity="0.3" />
                                <rect x="115" y="110" width="70" height="8" rx="4" fill="#f5576c" opacity="0.3" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">3</div>
                            <h3>Join the Pilot Testers Google Group</h3>
                            <ul>
                                <li>After signing in, go to the Settings page</li>
                                <li>Join the Pilot Testers Google Group</li>
                                <li>This ensures your testing and submission experience works smoothly</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradS4" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" cy="150" r="100" fill="url(#gradS4)" />
                                <path d="M 150 100 L 150 200 M 110 160 L 150 200 L 190 160" stroke="white" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">4</div>
                            <h3>Submit Your App</h3>
                            <ul>
                                <li>Go to your dashboard and tap the "+" Floating Action Button</li>
                                <li>Enter your app details carefully and review everything before submitting</li>
                                <li>Add clear and helpful testing instructions so testers know exactly what to check</li>
                            </ul>
                            <div className="info-box">
                                <strong>✅ Double-check that key links are correct:</strong> Google Group link and Google Play Store link. Correct links help testers find and install your app without issues.
                            </div>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradS5" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" cy="150" r="100" fill="url(#gradS5)" />
                                <text x="150" y="190" fontSize="100" fill="white" textAnchor="middle" fontWeight="bold">30</text>
                                <circle cx="200" cy="80" r="25" fill="white" opacity="0.3" />
                                <circle cx="100" cy="80" r="20" fill="white" opacity="0.3" />
                                <circle cx="220" cy="200" r="15" fill="white" opacity="0.3" />
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">5</div>
                            <h3>Points Required to Submit</h3>
                            <p>Submitting an app requires <span className="reward-badge">⭐ 30 Points</span></p>
                            <p>You can earn points by:</p>
                            <ul>
                                <li>Testing other users' apps, or</li>
                                <li>Watching a reward video ad from the Settings page</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-image">
                            <svg className="step-icon" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradS6" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" cy="150" r="100" fill="url(#gradS6)" />
                                <path d="M 150 70 L 170 110 L 215 110 L 180 140 L 195 185 L 150 155 L 105 185 L 120 140 L 85 110 L 130 110 Z" fill="white" />
                                <circle cx="150" cy="150" r="25" fill="url(#gradS6)" />
                                <text x="150" y="160" fontSize="25" fill="white" textAnchor="middle" fontWeight="bold">★</text>
                            </svg>
                        </div>
                        <div className="step-content">
                            <div className="step-number">6</div>
                            <h3>Upgrade With Premium Packages</h3>
                            <p>Pilot Testers offers exclusive packages to help you get faster, higher-quality results. Packages may include features like:</p>
                            <ul>
                                <li>Guaranteed testers (e.g., 20 testers)</li>
                                <li>Daily testing for 14 days</li>
                                <li>Detailed testing reports</li>
                                <li>Reports designed to support Google Closed Testing approval</li>
                                <li>APK analysis and more</li>
                            </ul>
                            <div className="info-box">
                                <strong>💎 To purchase a package:</strong> Open Settings → Packages
                            </div>
                        </div>
                    </div>

                    <div className="thank-you">
                        <h2>🎉 Thank You!</h2>
                        <p>Thank you for choosing Pilot Testers—we're excited to help you improve your app with real user feedback!</p>
                        <p style={{ marginTop: '1.5rem', fontSize: '1.2rem' }}>Ready to submit your app? Get started today and receive valuable insights from real testers! 🚀</p>
                    </div>
                </div>
            </div>
        </>
    );
}

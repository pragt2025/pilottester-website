'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, CheckCircle, Smartphone, Users, Gift, Upload, Search, MessageSquare, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const testerSteps = [
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Sign Up & Get Started",
        points: [
            "Sign up using basic information or choose Google Sign-In for faster access.",
            "Quick and simple registration process takes less than 2 minutes.",
        ],
        reward: "As a welcome gift, you'll receive 30 Reward Points on your first registration."
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Join the Pilot Testers Google Group",
        points: [
            "After signing in, navigate to the Settings page.",
            "Join the Pilot Testers Google Group with one click.",
            "This step is essential to ensure all submitted apps load correctly on the Google Play Store.",
            "You'll receive a confirmation email once you've joined successfully."
        ]
    },
    {
        icon: <Search className="w-8 h-8 text-primary" />,
        title: "Discover New Apps to Test",
        points: [
            "Visit your Dashboard to explore apps submitted by other users.",
            "Browse through discoverable apps and select the one that matches your interest.",
            "Filter apps by category, popularity, or newest additions.",
            "Each app shows clear testing requirements and reward details."
        ]
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Join the App Owner's Google Group",
        points: [
            "Before testing, you must join the App Owner's Google Group.",
            "This allows closed-testing apps to appear in the Play Store.",
            "Simple one-click process directly from the app details page."
        ],
        warning: "Use the same Google account for joining the Google Group and accessing the Play Store. Account mismatch may prevent the app from loading."
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        title: "Allow Usage Tracking Permission",
        points: [
            "Grant permission to collect app usage data for accurate tracking.",
            "This helps Pilot Testers track how long you've tested the app.",
            "Minimum required testing time is 5 minutes.",
            "Permissions can be enabled during testing or from the Settings page.",
            "Your privacy is protected - only testing duration is tracked."
        ]
    },
    {
        icon: <Smartphone className="w-8 h-8 text-primary" />,
        title: "Start Testing the App",
        points: [
            "Click the \"Test Now\" button to begin your testing session.",
            "Download and launch the app—your test timer starts automatically.",
            "Explore all features and functionality thoroughly.",
            "After completing 5 minutes of testing, you'll be eligible to submit feedback and ratings.",
            "Take notes of any bugs or issues you encounter."
        ]
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-primary" />,
        title: "Submit Feedback & Ratings",
        points: [
            "Some apps require feedback; others make it optional.",
            "If feedback is mandatory, the feedback field will be required before submission.",
            "Rate your overall experience with the app (1-5 stars).",
            "Always read the app instructions carefully for better testing results.",
            "Provide constructive feedback to help developers improve."
        ]
    },
    {
        icon: <Award className="w-8 h-8 text-primary" />,
        title: "Earn Rewards",
        points: [
            "Earn 30 Reward Points for completing your test.",
            "Get an additional 10 Points by watching a reward video ad.",
            "Points accumulate and can be redeemed for exciting rewards.",
            "Track your total earnings in your profile dashboard."
        ],
        note: "After successfully submitting your test, rewards are instantly credited to your account."
    }
];

const submitterSteps = [
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Create Your Account",
        points: [
            "Getting started on Pilot Testers is simple.",
            "Create an account using basic information or use Google Sign-In for faster setup.",
            "Takes less than 2 minutes to get started."
        ]
    },
    {
        icon: <Gift className="w-8 h-8 text-primary" />,
        title: "Welcome Rewards",
        points: [
            "On your first registration, you'll receive 30 Points as a welcome gift.",
            "Use these points to submit your first app for testing.",
            "Start your journey with instant rewards!"
        ]
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Join the Pilot Testers Google Group",
        points: [
            "After signing in, go to the Settings page.",
            "Join the Pilot Testers Google Group.",
            "This ensures your testing and submission experience works smoothly."
        ]
    },
    {
        icon: <Upload className="w-8 h-8 text-primary" />,
        title: "Submit Your App",
        points: [
            "Go to your dashboard and tap the \"+\" Floating Action Button.",
            "Enter your app details carefully and review everything before submitting.",
            "Add clear and helpful testing instructions so testers know exactly what to check."
        ],
        info: "Double-check that key links are correct: Google Group link and Google Play Store link. Correct links help testers find and install your app without issues."
    },
    {
        icon: <Award className="w-8 h-8 text-primary" />,
        title: "Points Required to Submit",
        note: "Submitting an app requires 30 Points. You can earn points by testing other users' apps, or watching a reward video ad from the Settings page."
    },
    {
        icon: <Star className="w-8 h-8 text-primary" />,
        title: "Upgrade With Premium Packages",
        points: [
            "Guaranteed testers (e.g., 20 testers).",
            "Daily testing for 14 days.",
            "Detailed testing reports.",
            "Reports designed to support Google Closed Testing approval.",
            "APK analysis and more."
        ],
        info: "To purchase a package, open Settings → Packages."
    }
];

export default function HowItWorksPage() {
    const [view, setView] = useState<'initial' | 'tester' | 'submitter'>('initial');

    const renderStep = (step: any, index: number) => (
        <Card key={index} className="w-full">
            <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    {step.icon}
                </div>
                <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
                {step.note && <p className="text-muted-foreground mb-4">{step.note}</p>}
                {step.points && (
                    <ul className="space-y-2 text-muted-foreground">
                        {step.points.map((point: string, i: number) => (
                            <li key={i} className="flex items-start">
                                <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}
                {step.reward && (
                    <div className="mt-4 bg-accent/10 text-accent-foreground border border-accent/20 rounded-lg p-3 text-sm">
                        <p>🎁 {step.reward}</p>
                    </div>
                )}
                {step.warning && (
                     <div className="mt-4 bg-destructive/10 text-destructive-foreground border border-destructive/20 rounded-lg p-3 text-sm">
                        <p>⚠️ <strong>Important:</strong> {step.warning}</p>
                    </div>
                )}
                {step.info && (
                    <div className="mt-4 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg p-3 text-sm">
                        <p>✅ {step.info}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );

    const renderContent = () => {
        let title, subtitle, steps;
        if (view === 'tester') {
            title = 'How It Works - For Testers';
            subtitle = 'Your Journey with Pilot Testers';
            steps = testerSteps;
        } else {
            title = 'How It Works - For App Submitters';
            subtitle = 'Your Guide to Submitting Apps for Testing';
            steps = submitterSteps;
        }

        return (
            <div className="w-full">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">{title}</h1>
                    <p className="text-muted-foreground mt-2">{subtitle}</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map(renderStep)}
                </div>
                <div className="mt-12 text-center bg-card border rounded-lg p-8">
                     <h2 className="text-2xl font-bold mb-2">🎉 Thank You!</h2>
                     <p className="text-muted-foreground">Thank you for choosing Pilot Testers and contributing to better app experiences!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background text-foreground min-h-screen">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <a href="/" className="flex items-center gap-2">
                        <Smartphone className="h-6 w-6 text-primary" />
                        <span className="font-bold">Pilot Testers</span>
                    </a>
                    {view !== 'initial' && (
                         <Button variant="outline" onClick={() => setView(view === 'tester' ? 'submitter' : 'tester')}>
                            {view === 'tester' ? '📱 Switch to Submitter View' : '👤 Switch to Tester View'}
                        </Button>
                    )}
                </div>
            </header>

            <main className="container py-12 md:py-20">
                {view === 'initial' ? (
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">🚀 How It Works</h1>
                        <p className="mt-4 text-lg text-muted-foreground">Choose your path to get started with Pilot Testers.</p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" onClick={() => setView('tester')} className="w-full sm:w-auto">
                                <Users className="mr-2 h-5 w-5" />
                                I'm a Tester
                            </Button>
                            <Button size="lg" variant="secondary" onClick={() => setView('submitter')} className="w-full sm:w-auto">
                                <Smartphone className="mr-2 h-5 w-5" />
                                I'm a Developer
                            </Button>
                        </div>
                    </div>
                ) : renderContent()}
            </main>
        </div>
    );
}

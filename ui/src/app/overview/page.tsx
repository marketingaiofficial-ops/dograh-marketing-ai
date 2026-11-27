"use client";

import Link from 'next/link';

import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/lib/auth';

export default function OverviewPage() {
    const { user } = useAuth();

    return (
        <PageLayout
            title={`Welcome to YourVoiceOS${user?.displayName ? `, ${user.displayName.split(' ')[0]}` : ''}`}
            description="Build, test and run your voice AI agents">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Create and Manage your Voice Agents</CardTitle>
                        <CardDescription>
                            Build powerful AI Voice Agents with our visual editor
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button asChild>
                            <Link href="/workflow">
                                Go to Agents
                            </Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Configure Services</CardTitle>
                        <CardDescription>
                            Set up your AI services like LLM, TTS, and STT providers
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button asChild variant="outline">
                            <Link href="/model-configurations">
                                Configure Models
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

        </PageLayout>
    );
}

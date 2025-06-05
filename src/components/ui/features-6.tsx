
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Brain, Zap, Target, BookOpen, BarChart3, Clock } from 'lucide-react'
import { ReactNode } from 'react'

export function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="@container mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-foreground">Built to cover your study needs</h2>
                    <p className="mt-4 text-muted-foreground">AI-powered features designed to revolutionize your learning experience.</p>
                </div>
                <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="group border bg-card shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Brain className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium text-card-foreground">AI-Powered Learning</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Advanced AI algorithms adapt to your learning style and optimize study sessions for maximum retention.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border bg-card shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium text-card-foreground">Lightning Fast</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Instantly generate flashcards, summaries, and practice questions from any study material.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border bg-card shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Target className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium text-card-foreground">Goal Tracking</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Set learning goals and track your progress with detailed analytics and milestone celebrations.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border bg-card shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <BookOpen className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium text-card-foreground">Smart Flashcards</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">AI-generated flashcards with spaced repetition algorithm for optimal memory retention.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border bg-card shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <BarChart3 className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium text-card-foreground">Progress Analytics</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Detailed insights into your learning patterns, strengths, and areas for improvement.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border bg-card shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Clock className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium text-card-foreground">Time Management</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Smart scheduling and time blocking to optimize your study sessions and maximize productivity.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 [--border:hsl(var(--border))] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"/>
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l rounded-lg text-primary">{children}</div>
    </div>
)

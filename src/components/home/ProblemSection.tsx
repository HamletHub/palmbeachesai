import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function ProblemSection() {
  return (
    <section id="problem" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Why 85% of AI Projects Fail (And How to Beat the Odds)
          </h2>
          <h3 className="text-xl lg:text-2xl font-semibold text-muted-foreground mb-8">
            The Three Critical Problems
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Problem 1: Solving the Wrong Problem */}
          <Card className="border-destructive/20 hover:border-destructive/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-destructive flex items-center gap-2">
                🎯 Solving the Wrong Problem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Your team automates processes that don&apos;t save money or add value—like digitizing paperwork that shouldn&apos;t exist in the first place.
              </p>
            </CardContent>
          </Card>

          {/* Problem 2: Poor Customer Experience */}
          <Card className="border-destructive/20 hover:border-destructive/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-destructive flex items-center gap-2">
                😤 Poor Customer Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                AI customer service with incomplete data frustrates users instead of helping them, damaging relationships you&apos;ve spent years building.
              </p>
            </CardContent>
          </Card>

          {/* Problem 3: Garbage Data */}
          <Card className="border-destructive/20 hover:border-destructive/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-destructive flex items-center gap-2">
                📊 Garbage Data, Garbage Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                AI decisions are only as good as the data they&apos;re based on—and most companies discover their data quality issues too late.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Emotional Hook */}
        <div className="bg-muted/50 rounded-xl p-8 border border-muted text-center">
          <p className="text-lg lg:text-xl text-primary font-medium leading-relaxed">
            In Palm Beach&apos;s ultra-competitive market, failed AI investments don&apos;t just drain budgets—you watch competitors surge ahead while you&apos;re left explaining empty promises to your board.
          </p>
        </div>
      </div>
    </section>
  );
}

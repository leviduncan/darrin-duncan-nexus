import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function RiskSnapshot() {
    return (
        <>
            <div className="glass-card-lt p-8 rounded-lg text-center mt-12">
                <h2 className="text-2xl font-semibold text-background mb-6 text-center">
                    Not sure where to start? Run a free Frontend Performance & UX Risk Snapshot to identify risk patterns before investing in fixes.
                        </h2>
                <Button
                    variant="outline"
                    size="lg"
                    className="border-background text-foreground hover:bg-primary hover:border-primary/90 font-medium px-8"
                    asChild
                >
                    <a
                        href="https://risk-snapshot.darrinduncan.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Run Free Risk Snapshot
                        <ArrowRight className="ml-2 w-4 h-4 text-foreground" />
                    </a>
                </Button>
            </div>
        </>
    )
}

export default RiskSnapshot
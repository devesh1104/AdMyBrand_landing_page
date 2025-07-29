import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const InteractivePricingCalculator = () => {
  const [teamSize, setTeamSize] = useState([5]);
  const [campaigns, setCampaigns] = useState([10]);
  const [contentPieces, setContentPieces] = useState([100]);

  const calculatePrice = () => {
    const basePrice = 29;
    const teamMultiplier = teamSize[0] > 5 ? (teamSize[0] - 5) * 15 : 0;
    const campaignMultiplier = campaigns[0] > 10 ? (campaigns[0] - 10) * 8 : 0;
    const contentMultiplier = contentPieces[0] > 100 ? Math.ceil((contentPieces[0] - 100) / 50) * 20 : 0;
    
    return Math.min(basePrice + teamMultiplier + campaignMultiplier + contentMultiplier, 199);
  };

  const getSuggestedPlan = () => {
    const price = calculatePrice();
    if (price <= 29) return "Starter";
    if (price <= 79) return "Professional";
    return "Enterprise";
  };

  const calculateSavings = () => {
    const currentPrice = calculatePrice();
    const traditionalCost = teamSize[0] * 150 + campaigns[0] * 50 + Math.ceil(contentPieces[0] / 10) * 25;
    return Math.max(traditionalCost - currentPrice, 0);
  };

  return (
    <div className="glass-card p-8 rounded-2xl border border-primary/30 max-w-2xl mx-auto mt-16">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Interactive Pricing Calculator</h3>
        <p className="text-muted-foreground">
          Customize your plan based on your specific needs
        </p>
      </div>

      <div className="space-y-8">
        {/* Team Size */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-medium">Team Size</span>
            </div>
            <Badge className="bg-primary/20 text-primary">
              {teamSize[0]} {teamSize[0] === 1 ? 'member' : 'members'}
            </Badge>
          </div>
          <Slider
            value={teamSize}
            onValueChange={setTeamSize}
            max={50}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        {/* Campaigns per Month */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-primary" />
              <span className="font-medium">Campaigns per Month</span>
            </div>
            <Badge className="bg-primary/20 text-primary">
              {campaigns[0]} campaigns
            </Badge>
          </div>
          <Slider
            value={campaigns}
            onValueChange={setCampaigns}
            max={100}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        {/* Content Pieces */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-medium">AI Content Pieces</span>
            </div>
            <Badge className="bg-primary/20 text-primary">
              {contentPieces[0]} pieces
            </Badge>
          </div>
          <Slider
            value={contentPieces}
            onValueChange={setContentPieces}
            max={1000}
            min={10}
            step={10}
            className="w-full"
          />
        </div>

        {/* Results */}
        <motion.div 
          className="glass-card p-6 rounded-xl border border-accent/30 bg-gradient-to-r from-accent/5 to-primary/5"
          key={calculatePrice()}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              ${calculatePrice()}/month
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              Recommended: {getSuggestedPlan()} Plan
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-accent">
                  ${calculateSavings()}
                </div>
                <div className="text-xs text-muted-foreground">
                  Monthly Savings vs Traditional Tools
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-primary">
                  {Math.round((calculateSavings() / (calculateSavings() + calculatePrice())) * 100)}%
                </div>
                <div className="text-xs text-muted-foreground">
                  Cost Reduction
                </div>
              </div>
            </div>

            <Button className="w-full bg-gradient-primary hover:shadow-glow">
              Start {getSuggestedPlan()} Plan Free Trial
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractivePricingCalculator;
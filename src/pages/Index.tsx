import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Dyad App</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Start building your amazing project here!
        </p>
        <Link to="/todo">
          <Button size="lg" className="text-lg px-8 py-4">Go to To-Do List</Button>
        </Link>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;
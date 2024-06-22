import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/dateRangePicker";
import Score from "./components/score";
import Rank from "./components/rank";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScoresByDayChart from "./components/charts/scoresByDayChart";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <Card>
        <CardHeader>
          <CardTitle>Scores Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ScoresByDayChart data={[{ date: "A", point: 50 }, { date: "B", point: 30 }]} />
        </CardContent>
      </Card>
    </div>
  )
}

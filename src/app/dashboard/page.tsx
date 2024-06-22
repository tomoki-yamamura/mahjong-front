import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/dateRangePicker";
import Score from "./components/score";
import Rank from "./components/rank";

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-3">
          <DatePickerWithRange />
          <Button>
            Submit
          </Button>
        </div>
      </div>
      <div>
        <Rank />
        <Score />
      </div>
    </div>
  )
}

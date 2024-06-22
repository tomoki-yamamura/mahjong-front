"use client"

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { value: 12, date: "2024-01-01" },
  { value: 0, date: "2024-01-02" },
  { value: 18, date: "2024-01-03" },
]

type ScoresByDayChartProps = {
  data: {
    date: string;
    point: number;
  }[]
}

export default function ScoresByDayChart({ data }: ScoresByDayChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="hsl(var(--muted))" />
        <XAxis dataKey="date" />
        <YAxis dataKey="point"/>
        <Tooltip />
        <Line dataKey="point" name="Score" />
      </LineChart>
    </ResponsiveContainer>

  )
}

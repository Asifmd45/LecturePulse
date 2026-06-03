import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, ComposedChart } from "recharts";

const FeedbackTimeline = ({ data = [] }) => {
  if (!data.length) {
    return (
      <div className="flex items-center justify-center h-40 text-muted-foreground text-sm">
        No timeline data available
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={260}>
      <ComposedChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis dataKey="label" tick={{ fontSize: 11 }} />
        <YAxis yAxisId="left" domain={[0, 100]} tick={{ fontSize: 11 }} unit="%" />
        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} allowDecimals={false} />
        <Tooltip
          formatter={(value, name) => {
            if (name === "responses") return [value, "Responses"];
            return [`${value}%`, name];
          }}
        />
        <Legend />
        <Bar yAxisId="right" dataKey="responses" fill="#e2e8f0" name="responses" radius={[4, 4, 0, 0]} />
        <Line yAxisId="left" type="monotone" dataKey="understanding" stroke="#059669" strokeWidth={2} dot={{ r: 3 }} name="Understanding" />
        <Line yAxisId="left" type="monotone" dataKey="attention" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} name="Attention" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default FeedbackTimeline;
import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Chart.js will be loaded dynamically

export default function ActivityChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const { data: activityData, isLoading } = useQuery({
    queryKey: ["/api/activity-data/1"], // Using user ID 1 for demo
  });

  useEffect(() => {
    if (!activityData || !chartRef.current) return;

    // Load Chart.js from CDN if not already loaded
    if (!window.Chart) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.onload = initChart;
      document.head.appendChild(script);
    } else {
      initChart();
    }

    function initChart() {
      if (!chartRef.current || !window.Chart) return;

      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      
      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const data = activityData.map(item => item.value);
      
      chartInstance.current = new window.Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            data,
            backgroundColor: [
              '#06B6D4', '#3B82F6', '#06B6D4', '#3B82F6', 
              '#06B6D4', '#3B82F6', '#06B6D4'
            ],
            borderRadius: 8,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              display: false,
              grid: {
                display: false
              }
            },
            y: {
              display: false,
              grid: {
                display: false
              }
            }
          },
          elements: {
            bar: {
              borderWidth: 0
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [activityData]);

  if (isLoading) {
    return (
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-slate-200 rounded w-1/2"></div>
            <div className="h-48 bg-slate-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-800">
            Activity
          </CardTitle>
          <span className="text-sm text-slate-500">
            3 appointments on this week
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Chart Container */}
        <div className="h-48 relative">
          <canvas ref={chartRef} className="w-full h-full" />
        </div>

        {/* Chart Legend */}
        <div className="flex justify-center space-x-4 text-xs text-slate-500">
          {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

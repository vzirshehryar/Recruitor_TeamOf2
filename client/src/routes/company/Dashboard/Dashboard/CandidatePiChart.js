import { useRef, useEffect } from "react";
const CandidatePieChart = () => {
  const chartRef = useRef(null);

  //temporary for now, data will from the database
  let rejectedCount = 200,
    hiredCount = 200,
    shortlistedCount = 200;

  useEffect(() => {
    drawPieChart();
  }, [rejectedCount, hiredCount, shortlistedCount]);

  const drawPieChart = () => {
    const canvas = chartRef.current;
    const context = canvas.getContext("2d");
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const radius = Math.min(centerX, centerY) - 10; // Adjust margin

    const total = rejectedCount + hiredCount + shortlistedCount;
    const startAngle = 0;
    const endAngleRejected = (rejectedCount / total) * 2 * Math.PI;
    const endAngleHired = (hiredCount / total) * 2 * Math.PI;
    const endAngleShortlisted = (shortlistedCount / total) * 2 * Math.PI;

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    drawSlice(
      context,
      centerX,
      centerY,
      radius,
      startAngle,
      endAngleRejected,
      "#D4ACE9"
    );
    drawSlice(
      context,
      centerX,
      centerY,
      radius,
      endAngleRejected,
      endAngleRejected + endAngleHired,
      "#9747FF"
    );
    drawSlice(
      context,
      centerX,
      centerY,
      radius,
      endAngleRejected + endAngleHired,
      endAngleRejected + endAngleHired + endAngleShortlisted,
      "#6D0E9D"
    );

    drawHollowCircle(context, centerX, centerY, radius * 0.5, "#FFFFFF"); // Draw a white circle in the center
  };

  const drawSlice = (
    context,
    centerX,
    centerY,
    radius,
    startAngle,
    endAngle,
    color
  ) => {
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.arc(centerX, centerY, radius, startAngle, endAngle);
    context.closePath();
    context.fillStyle = color;
    context.fill();
  };

  const drawHollowCircle = (context, centerX, centerY, radius, color) => {
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.closePath();
    context.fillStyle = color;
    context.fill();
  };

  return (
    <div className="candidate-pie-chart-container">
      <div>
        <h3>Application Response</h3>
      </div>
      <canvas ref={chartRef} width={250} height={250} />
      <div className="pie-chart-bottom-div">
        <div>
          <span className="pie-chart-span span-shortlisted"></span>
          <p>200</p>
        </div>
        <div>
          <span className="pie-chart-span span-hired"></span>
          <p>200</p>
        </div>
        <div>
          <span className="pie-chart-span span-rejected"></span>
          <p>200</p>
        </div>
      </div>
    </div>
  );
};

export default CandidatePieChart;

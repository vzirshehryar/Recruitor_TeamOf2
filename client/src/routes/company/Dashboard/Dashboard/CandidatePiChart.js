import { useRef, useEffect, useState } from "react";
const CandidatePieChart = () => {
  const chartRef = useRef(null);
  const [pieInfo, setPieInfo] = useState({
    interviewed: 0,
    shortlisted: 0,
    hired: 0,
  });

  //temporary for now, data will from the database

  const getPieInfo = async () => {
    try {
      const res = await fetch("/company/getPieInfo", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      setPieInfo(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPieInfo();
  }, []);

  useEffect(() => {
    drawPieChart();
  }, [pieInfo]);

  const drawPieChart = () => {
    const canvas = chartRef.current;
    const context = canvas.getContext("2d");
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const radius = Math.min(centerX, centerY) - 10; // Adjust margin

    const total = pieInfo.interviewed + pieInfo.hired + pieInfo.shortlisted;
    const startAngle = 0;
    const endAngleRejected = (pieInfo.interviewed / total) * 2 * Math.PI;
    const endAngleHired = (pieInfo.hired / total) * 2 * Math.PI;
    const endAngleShortlisted = (pieInfo.shortlisted / total) * 2 * Math.PI;

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
  // drawPieChart();

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
          <p>{pieInfo.hired}</p>
        </div>
        <div>
          <span className="pie-chart-span span-hired"></span>
          <p>{pieInfo.interviewed}</p>
        </div>
        <div>
          <span className="pie-chart-span span-rejected"></span>
          <p>{pieInfo.shortlisted}</p>
        </div>
      </div>
    </div>
  );
};

export default CandidatePieChart;

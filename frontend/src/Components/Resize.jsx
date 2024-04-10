import React from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { WidthProvider, Responsive } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

function Resize() {
  const layout = [
    { i: "box1", x: 0, y: 0, w: 6, h: 2 }, // Top left box
    { i: "box2", x: 6, y: 0, w: 6, h: 2 }, // Top right box
    { i: "box3", x: 0, y: 2, w: 12, h: 4 }, // Bottom box
  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      layout={layout}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={100}
      margin={[10, 10]}
      containerPadding={[10, 10]}
      isResizable={true}
    >
      <div key="box1" className="box" data-grid={{ w: 6, h: 2 }}>
        Box 1
      </div>
      <div key="box2" className="box" data-grid={{ w: 6, h: 2 }}>
        Box 2
      </div>
      <div key="box3" className="box" data-grid={{ w: 12, h: 4 }}>
        Box 3
      </div>
    </ResponsiveGridLayout>
  );
}

export default Resize;



// function Resize() {
//   return (
//     <>
//       <div className="main" style={{}}>
//         <div style={{ display: "flex" }}>
//           <div style={{ border: "1px solid red" }}>asd </div>
//           <div style={{ border: "1px solid red" }}>asd</div>
//         </div>
//         <div style={{ border: "1px solid red" }}>asdas</div>
//       </div>
//     </>
//   );
// }

// export default Resize;

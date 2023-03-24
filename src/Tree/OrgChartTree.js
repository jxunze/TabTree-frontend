import React from "react";
import Tree from "react-d3-tree";
import "./Tree.css";
import orgChartJson from "./Data/TreeData.json";

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => (
  // <svg height="600" onClick={toggleNode}>
  //   <text fill="black" strokeWidth="1" x="20">
  //     {nodeDatum.name}
  //   </text>
  //   {nodeDatum.attributes?.department && (
  //     <text fill="black" x="20" dy="20" strokeWidth="1">
  //       Department: {nodeDatum.attributes?.department}
  //     </text>
  //   )}
  // </svg>
  <g>
    <circle r={15} onClick={toggleNode}></circle>
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>
      <div style={{ border: "1px solid black", backgroundColor: "lightgreen" }}>
        <a href={nodeDatum.link}>
          <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
        </a>
        <h5 style={{ textAlign: "center" }}>{nodeDatum.info}</h5>
      </div>
    </foreignObject>
  </g>
);

function OrgChartTree() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const nodeSize = { x: 200, y: 200 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: 20,
    y: -30,
  };
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div className="treeWrapper">
      <Tree
        nodeSize={nodeSize}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
        data={orgChartJson}
        orientation="vertical"
        depthFactor={200}
        separation={{ siblings: 5, nonSiblings: 10 }}
        translate={{ x: w / 2, y: h / 20 }}
        collapsible="true"
      />
    </div>
  );
}

export default OrgChartTree;

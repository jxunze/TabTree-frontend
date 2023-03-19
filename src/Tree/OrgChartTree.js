import React from "react";
import Tree from "react-d3-tree";
import "./Tree.css";
import orgChartJson from "./Data/TreeData.json";

const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g>
    <rect width="20" height="20" x="-10" onClick={toggleNode} />
    <text fill="black" strokeWidth="1" x="20">
      {nodeDatum.name}
    </text>
    {nodeDatum.attributes?.department && (
      <text fill="black" x="20" dy="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text>
    )}
  </g>
);

function OrgChartTree() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div className="treeWrapper">
      <Tree data={orgChartJson} orientation="horizontal" collapsible="true" />
    </div>
  );
}

export default OrgChartTree;

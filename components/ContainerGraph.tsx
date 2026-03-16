'use client'

import React from 'react'

export default function ContainerGraph() {
  return (
    <div className="container-graph">
      <div className="container-graph-header">
        <div className="container-graph-badge">ROS 2</div>
        <div>
          <h3 className="container-graph-title">Distributed System (Simplified)</h3>
          <p className="container-graph-subtitle">Host: Jetson AGX Orin</p>
        </div>
      </div>

      <div className="container-graph-flow">
        <div className="container-graph-node">
          <div className="container-graph-node-title">Sensors + Drivers</div>
          <div className="container-graph-node-meta">LiDAR / Camera</div>
        </div>
        <div className="container-graph-connector">
          <div className="container-graph-line" />
          <span>/image_raw, /scan</span>
        </div>

        <div className="container-graph-node">
          <div className="container-graph-node-title">Perception</div>
          <div className="container-graph-node-meta">Detection + Fusion</div>
        </div>
        <div className="container-graph-connector">
          <div className="container-graph-line" />
          <span>/detected_objects</span>
        </div>

        <div className="container-graph-node">
          <div className="container-graph-node-title">Navigation (Nav2)</div>
          <div className="container-graph-node-meta">Planning + Costmaps</div>
        </div>
        <div className="container-graph-connector">
          <div className="container-graph-line" />
          <span>/cmd_vel</span>
        </div>

        <div className="container-graph-node">
          <div className="container-graph-node-title">Motion Control</div>
          <div className="container-graph-node-meta">Actuation + Throttle</div>
        </div>
      </div>

      <p className="container-graph-footer">
        ROS 2 topics flow top to bottom. Containers are isolated and communicate over DDS.
      </p>
    </div>
  )
}

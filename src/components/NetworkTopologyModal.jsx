import { useState, useEffect } from "react";
import { ShieldCheck, Lock, Activity, Server, Cpu, Globe, X, Play, RefreshCw } from "lucide-react";
import { sounds } from "../utils/audio";
import "../styles/networkModal.css";

const NODES = [
  { id: "client", name: "Internal Client", ip: "192.168.1.50", icon: Cpu, type: "LAN", status: "Secure" },
  { id: "router", name: "NAT Gateway", ip: "203.0.113.1", icon: Server, type: "Gateway", status: "Translating" },
  { id: "vpn", name: "VPN Tunnel Endpoint", ip: "10.8.0.1", icon: Lock, type: "Encrypted Tunnel", status: "AES-256 Active" },
  { id: "dest", name: "Target Cloud Server", ip: "198.51.100.42", icon: Globe, type: "Cloud WAN", status: "Verified" },
];

function NetworkTopologyModal({ isOpen, onClose }) {
  const [activeNode, setActiveNode] = useState(NODES[0]);
  const [isSimulating, setIsSimulating] = useState(true);
  const [packetStep, setPacketStep] = useState(0);
  const [logs, setLogs] = useState([
    "Initialising Cisco Packet Tracer Simulation...",
    "[NAT] Mapping LAN IP 192.168.1.50 -> Public IP 203.0.113.1",
    "[VPN] Establishing IPSec/IKEv2 Tunnel (AES-256-GCM)",
    "[SECURITY] Firewall Rule #14: ALLOW PORT 443 (ENCRYPTED)",
  ]);

  useEffect(() => {
    let interval;
    if (isOpen && isSimulating) {
      interval = setInterval(() => {
        setPacketStep((prev) => (prev + 1) % 4);
        const steps = [
          "[CLIENT] Sending payload from 192.168.1.50:49152",
          "[NAT GATEWAY] Translating source header to 203.0.113.1",
          "[VPN TUNNEL] Encrypting packet with AES-256 payload",
          "[DESTINATION] Packet received & authenticated successfully!",
        ];
        setLogs((prevLogs) => [...prevLogs.slice(-6), steps[packetStep]]);
      }, 1800);
    }
    return () => clearInterval(interval);
  }, [isOpen, isSimulating, packetStep]);

  if (!isOpen) return null;

  return (
    <div className="net-modal-overlay" onClick={onClose}>
      <div className="net-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="net-modal-header">
          <div className="net-modal-title">
            <ShieldCheck size={22} className="net-header-icon" />
            <div>
              <h3>Network Security Topology Simulator</h3>
              <p>VPN Tunneling & NAT Packet Simulation (Cisco Architecture)</p>
            </div>
          </div>

          <button className="net-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="net-modal-body">
          {/* Visual Topology Diagram */}
          <div className="net-diagram-container">
            <div className="net-simulation-bar">
              <div className="net-status-badge">
                <span className="net-pulse-dot"></span>
                <span>STATUS: {isSimulating ? "SIMULATION RUNNING" : "PAUSED"}</span>
              </div>
              <button
                className="net-sim-toggle"
                onClick={() => {
                  sounds.playClick();
                  setIsSimulating(!isSimulating);
                }}
              >
                {isSimulating ? <RefreshCw size={13} className="spin" /> : <Play size={13} />}
                <span>{isSimulating ? "Pause Packets" : "Resume Flow"}</span>
              </button>
            </div>

            <div className="net-nodes-row">
              {NODES.map((node, index) => {
                const IconComponent = node.icon;
                const isActive = activeNode.id === node.id;
                const isPacketHere = packetStep === index && isSimulating;

                return (
                  <div key={node.id} className="net-node-wrapper">
                    <button
                      className={`net-node-card ${isActive ? "active" : ""} ${isPacketHere ? "has-packet" : ""}`}
                      onClick={() => {
                        sounds.playClick();
                        setActiveNode(node);
                      }}
                      onMouseEnter={() => sounds.playHover()}
                    >
                      {isPacketHere && <div className="net-packet-indicator">⚡ IP PACKET</div>}
                      <div className="net-node-icon">
                        <IconComponent size={20} />
                      </div>
                      <span className="net-node-name">{node.name}</span>
                      <span className="net-node-ip">{node.ip}</span>
                    </button>

                    {index < NODES.length - 1 && (
                      <div className={`net-connector ${packetStep === index && isSimulating ? "active-flow" : ""}`}>
                        <div className="net-flow-line"></div>
                        <Lock size={12} className="net-lock-icon" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Node Inspector & Log Output */}
          <div className="net-inspect-grid">
            <div className="net-inspect-card">
              <h4>Node Inspector</h4>
              <div className="net-spec-row">
                <span className="spec-label">Node Identifier:</span>
                <span className="spec-val">{activeNode.name}</span>
              </div>
              <div className="net-spec-row">
                <span className="spec-label">IP Address:</span>
                <span className="spec-val highlight">{activeNode.ip}</span>
              </div>
              <div className="net-spec-row">
                <span className="spec-label">Architecture Type:</span>
                <span className="spec-val">{activeNode.type}</span>
              </div>
              <div className="net-spec-row">
                <span className="spec-label">Security Protocol:</span>
                <span className="spec-val success">{activeNode.status}</span>
              </div>
            </div>

            <div className="net-log-card">
              <h4>Packet Stream Log</h4>
              <div className="net-log-terminal">
                {logs.map((log, i) => (
                  <div key={i} className="net-log-item">
                    <Activity size={12} className="net-log-icon" />
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworkTopologyModal;

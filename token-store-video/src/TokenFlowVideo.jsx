import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  Easing,
  Audio,
  staticFile
} from "remotion";
import { Sparkles, Zap, Shield, TrendingUp, Check, ArrowRight, Crown, Gem, Network, BarChart3, Lock, Code, Users } from "lucide-react";

const COLORS = {
  primary: "#10B981",
  secondary: "#06B6D4",
  accent: "#8B5CF6",
  dark: "#030014",
  light: "#F0F0F0"
};

const Intro = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoOpacity = interpolate(frame, [0, fps * 0.8], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const logoScale = interpolate(frame, [0, fps * 0.8], [0.5, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const titleOpacity = interpolate(frame, [fps * 0.4, fps * 1.2], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const titleY = interpolate(frame, [fps * 0.4, fps * 1.2], [50, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{
      background: COLORS.dark,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "60px"
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.15), transparent 50%), 
                     radial-gradient(circle at 70% 80%, rgba(6, 182, 212, 0.1), transparent 50%)`
      }} />
      
      <div style={{
        opacity: logoOpacity,
        scale: logoScale,
        display: "flex",
        alignItems: "center",
        gap: "20px"
      }}>
        <div style={{
          width: "120px",
          height: "120px",
          borderRadius: "30px",
          background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 60px rgba(16, 185, 129, 0.4)`
        }}>
          <Sparkles size={60} color="white" />
        </div>
      </div>

      <div style={{
        opacity: titleOpacity,
        transform: `translateY(${titleY}px)`,
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "140px",
          fontWeight: "bold",
          color: "white",
          margin: 0,
          lineHeight: 1.1,
          textShadow: `0 0 80px rgba(16, 185, 129, 0.5)`
        }}>
          TokenFlow
        </h1>
        <p style={{
          fontSize: "56px",
          color: COLORS.light,
          margin: "30px 0 0 0",
          opacity: 0.8
        }}>
          One API. Every model. Total control.
        </p>
      </div>
      
      <Audio src={staticFile("voiceover/intro.wav")} />
    </AbsoluteFill>
  );
};

const ProblemScene = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.8], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const problems = [
    { icon: Network, text: "Vendor sprawl", delay: 0.3 },
    { icon: Code, text: "Key chaos", delay: 0.6 },
    { icon: BarChart3, text: "Hidden token costs", delay: 0.9 }
  ];

  return (
    <AbsoluteFill style={{
      background: COLORS.dark,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "80px",
      padding: "100px",
      fontFamily: "Arial, Helvetica, sans-serif"
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1), transparent 50%)`
      }} />

      <h2 style={{
        fontSize: "100px",
        fontWeight: "bold",
        color: "white",
        margin: 0,
        opacity: titleOpacity,
        textAlign: "center"
      }}>
        The Challenge
      </h2>

      <div style={{
        display: "flex",
        gap: "60px",
        zIndex: 1
      }}>
        {problems.map((problem, index) => {
          const itemOpacity = interpolate(frame, [fps * problem.delay, fps * (problem.delay + 0.4)], [0, 1], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });

          const itemScale = interpolate(frame, [fps * problem.delay, fps * (problem.delay + 0.4)], [0.8, 1], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });

          const IconComponent = problem.icon;

          return (
            <div key={index} style={{
              opacity: itemOpacity,
              scale: itemScale,
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              border: "2px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "40px",
              padding: "60px 40px",
              textAlign: "center",
              minWidth: "280px"
            }}>
              <div style={{
                width: "92px",
                height: "92px",
                borderRadius: "24px",
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 30px",
                boxShadow: "0 0 45px rgba(16, 185, 129, 0.25)"
              }}>
                <IconComponent size={46} color="white" />
              </div>
              <div style={{ fontSize: "36px", color: "white", fontWeight: "700" }}>{problem.text}</div>
            </div>
          );
        })}
      </div>
      
      <Audio src={staticFile("voiceover/problem.wav")} />
    </AbsoluteFill>
  );
};
const SolutionScene = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.8], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const cardOpacity = interpolate(frame, [fps * 0.4, fps * 1.2], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const cardScale = interpolate(frame, [fps * 0.4, fps * 1.2], [0.9, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{
      background: COLORS.dark,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "80px",
      padding: "100px"
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15), transparent 50%)`
      }} />

      <h2 style={{
        fontSize: "100px",
        fontWeight: "bold",
        color: "white",
        margin: 0,
        opacity: titleOpacity,
        textAlign: "center"
      }}>
        The Solution
      </h2>

      <div style={{
        opacity: cardOpacity,
        scale: cardScale,
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(20px)",
        border: "2px solid rgba(16, 185, 129, 0.3)",
        borderRadius: "50px",
        padding: "80px 60px",
        maxWidth: "900px",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 0 80px rgba(16, 185, 129, 0.3)"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "40px"
        }}>
          <div style={{
            width: "100px",
            height: "100px",
            borderRadius: "25px",
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Sparkles size={50} color="white" />
          </div>
          <span style={{
            fontSize: "72px",
            fontWeight: "bold",
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            TokenFlow
          </span>
        </div>
        <p style={{
          fontSize: "42px",
          color: "white",
          lineHeight: 1.4,
          margin: 0
        }}>
          Access GPT-4, Claude, Gemini and more through a single unified API
        </p>
        <div style={{
          marginTop: "40px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          {["GPT-4", "Claude", "Gemini", "Llama"].map((model, i) => (
            <span key={i} style={{
              background: "rgba(16, 185, 129, 0.2)",
              color: COLORS.primary,
              padding: "15px 30px",
              borderRadius: "20px",
              fontSize: "28px",
              fontWeight: "600"
            }}>
              {model}
            </span>
          ))}
        </div>
      </div>
      
      <Audio src={staticFile("voiceover/solution.wav")} />
    </AbsoluteFill>
  );
};

const FeaturesScene = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.8], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const features = [
    { icon: Network, title: "Universal API", desc: "Single endpoint for all models", color: "from-blue-500 to-cyan-500" },
    { icon: BarChart3, title: "Real-time Analytics", desc: "Monitor usage and costs", color: "from-violet-500 to-purple-500" },
    { icon: Lock, title: "Enterprise Security", desc: "Bank-level encryption", color: "from-emerald-500 to-teal-500" },
    { icon: Zap, title: "Lightning Fast", desc: "<50ms response time", color: "from-amber-500 to-orange-500" }
  ];

  return (
    <AbsoluteFill style={{
      background: COLORS.dark,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "100px 80px"
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.1), transparent 50%)`
      }} />

      <h2 style={{
        fontSize: "90px",
        fontWeight: "bold",
        color: "white",
        margin: "0 0 80px 0",
        opacity: titleOpacity,
        textAlign: "center"
      }}>
        Why TokenFlow?
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "50px",
        width: "100%",
        maxWidth: "1400px",
        zIndex: 1
      }}>
        {features.map((feature, index) => {
          const itemOpacity = interpolate(frame, [fps * (0.3 + index * 0.2), fps * (0.7 + index * 0.2)], [0, 1], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });

          const itemScale = interpolate(frame, [fps * (0.3 + index * 0.2), fps * (0.7 + index * 0.2)], [0.9, 1], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });

          const IconComponent = feature.icon;

          return (
            <div key={index} style={{
              opacity: itemOpacity,
              scale: itemScale,
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(20px)",
              border: "2px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "40px",
              padding: "50px"
            }}>
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "20px",
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30px"
              }}>
                <IconComponent size={40} color="white" />
              </div>
              <h3 style={{
                fontSize: "42px",
                fontWeight: "bold",
                color: "white",
                margin: "0 0 15px 0"
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: "28px",
                color: "rgba(255, 255, 255, 0.7)",
                margin: 0
              }}>
                {feature.desc}
              </p>
            </div>
          );
        })}
      </div>
      
      <Audio src={staticFile("voiceover/features.wav")} />
    </AbsoluteFill>
  );
};

const PricingScene = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.8], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const plans = [
    { name: "Starter", price: "$29", tokens: "100K", icon: Sparkles, color: "from-emerald-400 to-cyan-500" },
    { name: "Professional", price: "$99", tokens: "500K", icon: Crown, color: "from-violet-500 to-purple-600", popular: true },
    { name: "Enterprise", price: "Custom", tokens: "Unlimited", icon: Gem, color: "from-amber-500 to-orange-600" }
  ];

  return (
    <AbsoluteFill style={{
      background: COLORS.dark,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "100px 60px"
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.1), transparent 50%)`
      }} />

      <h2 style={{
        fontSize: "90px",
        fontWeight: "bold",
        color: "white",
        margin: "0 0 80px 0",
        opacity: titleOpacity,
        textAlign: "center"
      }}>
        Simple Pricing
      </h2>

      <div style={{
        display: "flex",
        gap: "40px",
        width: "100%",
        maxWidth: "1400px",
        zIndex: 1
      }}>
        {plans.map((plan, index) => {
          const itemOpacity = interpolate(frame, [fps * (0.3 + index * 0.2), fps * (0.7 + index * 0.2)], [0, 1], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });

          const itemScale = interpolate(frame, [fps * (0.3 + index * 0.2), fps * (0.7 + index * 0.2)], [0.9, 1], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });

          const IconComponent = plan.icon;

          return (
            <div key={index} style={{
              opacity: itemOpacity,
              scale: itemScale,
              position: "relative",
              flex: 1,
              background: plan.popular ? "rgba(139, 92, 246, 0.1)" : "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(20px)",
              border: plan.popular ? "3px solid rgba(139, 92, 246, 0.5)" : "2px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "40px",
              padding: "50px 40px",
              textAlign: "center"
            }}>
              {plan.popular && (
                <div style={{
                  position: "absolute",
                  top: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.primary})`,
                  color: "white",
                  padding: "10px 25px",
                  borderRadius: "25px",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}>
                  RECOMMENDED
                </div>
              )}
              <div style={{
                width: "70px",
                height: "70px",
                borderRadius: "18px",
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 25px"
              }}>
                <IconComponent size={35} color="white" />
              </div>
              <h3 style={{
                fontSize: "38px",
                fontWeight: "bold",
                color: "white",
                margin: "0 0 15px 0"
              }}>
                {plan.name}
              </h3>
              <div style={{
                fontSize: "60px",
                fontWeight: "bold",
                color: "white",
                margin: "0 0 10px 0"
              }}>
                {plan.price}
              </div>
              <div style={{
                fontSize: "24px",
                color: "rgba(255, 255, 255, 0.6)",
                marginBottom: "30px"
              }}>
                {plan.tokens} tokens
              </div>
              <button style={{
                width: "100%",
                padding: "20px",
                borderRadius: "20px",
                border: "none",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",
                background: plan.popular 
                  ? `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.primary})`
                  : "rgba(255, 255, 255, 0.1)",
                color: "white"
              }}>
                Get Started
              </button>
            </div>
          );
        })}
      </div>
      
      <Audio src={staticFile("voiceover/pricing.wav")} />
    </AbsoluteFill>
  );
};

const MetricsScene = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.8], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const metrics = [
    { value: "99.99%", label: "Uptime", icon: Shield },
    { value: "<50ms", label: "Response", icon: Zap },
    { value: "10M+", label: "Daily Requests", icon: TrendingUp },
    { value: "500+", label: "Enterprise Clients", icon: Users }
  ];

  return (
    <AbsoluteFill style={{
      background: COLORS.dark,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "100px 80px"
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1), transparent 50%)`
      }} />

      <h2 style={{
        fontSize: "90px",
        fontWeight: "bold",
        color: "white",
        margin: "0 0 80px 0",
        opacity: titleOpacity,
        textAlign: "center"
      }}>
        Trusted by Developers
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "60px",
        width: "100%",
        maxWidth: "1200px",
        zIndex: 1
      }}>
        {metrics.map((metric, index) => {
          const itemOpacity = interpolate(frame, [fps * (0.3 + index * 0.15), fps * (0.7 + index * 0.15)], [0, 1], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });

          const itemScale = interpolate(frame, [fps * (0.3 + index * 0.15), fps * (0.7 + index * 0.15)], [0.8, 1], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });

          const IconComponent = metric.icon;

          return (
            <div key={index} style={{
              opacity: itemOpacity,
              scale: itemScale,
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(20px)",
              border: "2px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "40px",
              padding: "60px",
              textAlign: "center"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                marginBottom: "20px"
              }}>
                <IconComponent size={30} color={COLORS.primary} />
                <span style={{
                  fontSize: "22px",
                  color: "rgba(255, 255, 255, 0.6)",
                  fontWeight: "600"
                }}>
                  {metric.label}
                </span>
              </div>
              <div style={{
                fontSize: "70px",
                fontWeight: "bold",
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                {metric.value}
              </div>
            </div>
          );
        })}
      </div>
      
      <Audio src={staticFile("voiceover/metrics.wav")} />
    </AbsoluteFill>
  );
};

const CTAScene = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.8], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const subtitleOpacity = interpolate(frame, [fps * 0.4, fps * 1.2], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const ctaOpacity = interpolate(frame, [fps * 0.8, fps * 1.6], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const ctaScale = interpolate(frame, [fps * 0.8, fps * 1.6], [0.9, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{
      background: COLORS.dark,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "60px",
      padding: "100px"
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.2), transparent 50%)`
      }} />

      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "20px"
      }}>
        <div style={{
          width: "80px",
          height: "80px",
          borderRadius: "20px",
          background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Sparkles size={40} color="white" />
        </div>
        <span style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "white"
        }}>
          TokenFlow
        </span>
      </div>

      <h2 style={{
        fontSize: "100px",
        fontWeight: "bold",
        color: "white",
        margin: 0,
        opacity: titleOpacity,
        textAlign: "center"
      }}>
        Ready to get started?
      </h2>

      <p style={{
        fontSize: "42px",
        color: "rgba(255, 255, 255, 0.7)",
        margin: 0,
        opacity: subtitleOpacity,
        textAlign: "center",
        maxWidth: "900px"
      }}>
        Join thousands of developers using TokenFlow to power their AI applications
      </p>

      <div style={{
        opacity: ctaOpacity,
        scale: ctaScale,
        display: "flex",
        gap: "30px",
        zIndex: 1
      }}>
        <button style={{
          padding: "25px 50px",
          borderRadius: "25px",
          border: "none",
          fontSize: "28px",
          fontWeight: "bold",
          cursor: "pointer",
          background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
          color: "white",
          boxShadow: "0 0 60px rgba(16, 185, 129, 0.4)"
        }}>
          Start Free Trial
        </button>
        <button style={{
          padding: "25px 50px",
          borderRadius: "25px",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          fontSize: "28px",
          fontWeight: "bold",
          cursor: "pointer",
          background: "rgba(255, 255, 255, 0.05)",
          color: "white",
          backdropFilter: "blur(20px)"
        }}>
          View Documentation
        </button>
      </div>

      <div style={{
        display: "flex",
        gap: "40px",
        opacity: subtitleOpacity,
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {[
          { icon: Check, text: "No credit card required" },
          { icon: Check, text: "10K free tokens" },
          { icon: Check, text: "Cancel anytime" }
        ].map((benefit, i) => {
          const IconComponent = benefit.icon;
          return (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "24px",
              color: "rgba(255, 255, 255, 0.8)"
            }}>
              <IconComponent size={24} color={COLORS.primary} />
              <span>{benefit.text}</span>
            </div>
          );
        })}
      </div>
      
      <Audio src={staticFile("voiceover/cta.wav")} />
    </AbsoluteFill>
  );
};

export const TokenFlowVideo = ({ sceneDurations } = {}) => {
  const { fps } = useVideoConfig();
  
  // Metadata uses the real voiceover lengths; fallback keeps Studio usable if audio probing fails.
  const durations = sceneDurations?.length === 7
    ? sceneDurations
    : [4, 3, 4, 3, 3, 3, 4].map(seconds => seconds * fps);
  
  return (
    <AbsoluteFill style={{ fontFamily: "Arial, Helvetica, sans-serif", background: COLORS.dark }}>
      <Audio src={staticFile("music/promo-bed.wav")} volume={0.08} />
      <Sequence durationInFrames={durations[0]}>
        <Intro durationInFrames={durations[0]} />
      </Sequence>
      <Sequence from={durations[0]} durationInFrames={durations[1]}>
        <ProblemScene durationInFrames={durations[1]} />
      </Sequence>
      <Sequence from={durations[0] + durations[1]} durationInFrames={durations[2]}>
        <SolutionScene durationInFrames={durations[2]} />
      </Sequence>
      <Sequence from={durations[0] + durations[1] + durations[2]} durationInFrames={durations[3]}>
        <FeaturesScene durationInFrames={durations[3]} />
      </Sequence>
      <Sequence from={durations[0] + durations[1] + durations[2] + durations[3]} durationInFrames={durations[4]}>
        <PricingScene durationInFrames={durations[4]} />
      </Sequence>
      <Sequence from={durations[0] + durations[1] + durations[2] + durations[3] + durations[4]} durationInFrames={durations[5]}>
        <MetricsScene durationInFrames={durations[5]} />
      </Sequence>
      <Sequence from={durations[0] + durations[1] + durations[2] + durations[3] + durations[4] + durations[5]} durationInFrames={durations[6]}>
        <CTAScene durationInFrames={durations[6]} />
      </Sequence>
    </AbsoluteFill>
  );
};





import { ArrowRight, ChevronDownIcon, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { codeExamples, floatingCards } from "../data/CodeExamples";

export default function Hero() {
  type TabKey = "App.tsx" | "Hero.tsx" | "Navbar.tsx";

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<TabKey>("App.tsx");

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      console.log(e.clientX, e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const tabs: TabKey[] = ["App.tsx", "Hero.tsx", "Navbar.tsx"];

    const timeout = setTimeout(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  const currentFloatingCard = floatingCards[activeTab];

  return (
    <section className="min-h-screen relative flex items-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(59,130,246,0.15), transparent 40%)`,
        }}
      />

      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full animate-pulse blur-3xl" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/10 rounded-full animate-pulse blur-3xl" />

      <div className="max-w-7xl mx-auto text-center relative w-full ">
        <div className="max-w-7xl mx-auto flex sm:text-left flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 relative">
          <div>
            <div className="inline-flex  items-center px-3 space-x-2 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full  sm:mb-6  animate-in slide-in-from-bottom">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-300">
                Introducing CodeFlow AI 2.0
              </span>
            </div>

            <h1 className="lg:text-5xl xl:text-6xl text-5xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom-h1 leading-tight lg:text-left ">
              <span className="block bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-1 sm:m-2">
                Code Faster
              </span>
              <span className="block bg-linear-to-r from-blue-400 via-blue-200 to-blue-300 bg-clip-text text-transparent mb-1 sm:m-2">
                Build Better
              </span>
              <span className="block bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-1 sm:m-2">
                With CodeFlow AI{" "}
              </span>
            </h1>

            <p
              className="text-base sm:text-base lg:text-lg text-gray-400 max-w-2xl lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom-pill leading-relaxed lg:text-left
             "
            >
              Accelerate your development workflow with intelligent code
              completion, automated testing, and smart debugging. Ship
              production ready code 10X faster
            </p>

            <div className="flex flex-col sm:flex-row   gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-b from-blue-600 to-blue-400 rounded-lg font-semibold sm:text-base transition-all hover:scale-102 flex items-center justify-center space-x-2">
                <span>Start Coding Free</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 rounded-lg font-semibold sm:text-base transition-all hover:bg-white/10 flex items-center justify-center space-x-2 backdrop-blur-sm border border-white/10">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-200 transition-colors ">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white " />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          <div className="relative order-2 w-full">
            {/* Border */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border-white/10">
              {/* Screen */}
              <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] lg:h-[450px] border-white/5 border  ">
                {/* Screen Header */}
                <div className="flex items-center justify-between  px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="flex sm:space-x-1 space-x-2 items-center ">
                      <div className="w-2 h-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                      <div className="w-2 h-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-gray-300 text-xs sm:text-sm">
                      CodeFlow AI
                    </span>
                  </div>
                  <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
                </div>

                <div className="p-3 sm:p-4 relative h-full ">
                  {/* File Tabs */}
                  <div className="flex space-x-2 sm:space-x-1 mb-3 sm:mb-4 overflow-hidden">
                    <button
                      onClick={() => setActiveTab("App.tsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "App.tsx"
                          ? "bg-blue-500/30 text-white border-blue-400/20"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      App.tsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Hero.tsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "Hero.tsx"
                          ? "bg-blue-500/30 text-white border-blue-400/20"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      Hero.tsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Navbar.tsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "Navbar.tsx"
                          ? "bg-blue-500/30 text-white border-blue-400/20"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      Navbar.tsx
                    </button>
                  </div>

                  {/* Code Content */}
                  <div className="relative overflow-hidden grow">
                    <SyntaxHighlighter
                      language="tsx"
                      style={vscDarkPlus}
                      customStyle={{
                        margin: 0,
                        borderRadius: "8px",
                        fontSize: "11px",
                        lineHeight: "1.4",
                        height: "100%",
                        border: "1px solid #3c3c3c",
                      }}
                    >
                      {codeExamples[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div
                className={` block absolute bottom-4 right-4 transform translate-y-8 w-72 ${currentFloatingCard.bgColor} backdrop-blur-xl rounded-lg border  border-white/20 p-4 shadow-2xl`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div
                    className={`w-6 h-6 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold `}
                  >
                    {currentFloatingCard.icon}
                  </div>
                  <span
                    className={`text-sm font-medium ${currentFloatingCard.textColor}`}
                  >
                    {currentFloatingCard.title}
                  </span>
                </div>

                <div
                  className={`text-sm font-medium ${currentFloatingCard.contentColor}`}
                >
                  {currentFloatingCard.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
